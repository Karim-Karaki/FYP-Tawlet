import React, { useState, useEffect } from "react";
import {
  getAllReservationsByRestaurantAndDate,
  createReservation,
  deleteReservation,
} from "../../API/reservations"; // Adjust these imports based on your actual file structure
import {
  Button,
  Typography,
  Box,
  Modal,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  CardActions,
  Grid,
} from "@mui/material";
import { useAuth } from "../../context/AuthContext.jsx"; // Adjust import based on your file structure

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const timeSlots = [
  "8:00 AM",
  "10:00 AM",
  "12:00 PM",
  "2:00 PM",
  "4:00 PM",
  "6:00 PM",
  "8:00 PM",
  "10:00 PM",
];

const ReservationsToday = () => {
  const [reservations, setReservations] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState(timeSlots[0]); // Default to the first time slot
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [status, setStatus] = useState("Pending");
  const { isAuthenticated, restaurantId } = useAuth();

  if (!isAuthenticated) return <div>Please log in</div>;

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const data = await getAllReservationsByRestaurantAndDate(
          restaurantId,
          date
        );
        setReservations(data);
      } catch (error) {
        console.error("Failed to fetch reservations", error);
      }
    };

    fetchReservations();
  }, [restaurantId, date]);

  const handleDelete = async (reservationId) => {
    try {
      await deleteReservation(reservationId);
      setReservations(
        reservations.filter((reservation) => reservation._id !== reservationId)
      );
    } catch (error) {
      console.error("Failed to delete reservation", error);
    }
  };

  const handleSubmit = async () => {
    const newReservation = {
      restaurantId,
      date,
      timeSlot,
      numberOfGuests: Number(numberOfGuests),
      status,
    };

    try {
      await createReservation(newReservation);
      setOpenModal(false);
      // Re-fetch reservations to update the list
      const updatedReservations = await getAllReservationsByRestaurantAndDate(
        restaurantId,
        date
      );
      setReservations(updatedReservations);
    } catch (error) {
      console.error("Failed to create reservation", error);
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Today's Reservations
      </Typography>
      <Grid container spacing={2}>
        {reservations.map((reservation) => (
          <Grid item xs={12} sm={6} md={4} key={reservation._id}>
            <Card>
              <CardContent>
                <Typography variant="h5">
                  Table {reservation.tableId}
                </Typography>
                <Typography>Date: {reservation.date}</Typography>
                <Typography>Time Slot: {reservation.timeSlot}</Typography>
                <Typography>Guests: {reservation.numberOfGuests}</Typography>
                <Typography>Status: {reservation.status}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => handleDelete(reservation._id)}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button onClick={() => setOpenModal(true)}>Create New Reservation</Button>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create New Reservation
          </Typography>
          <FormControl fullWidth sx={{ my: 2 }}>
            <TextField
              label="Date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
            />
          </FormControl>
          <FormControl fullWidth sx={{ my: 2 }}>
            <InputLabel>Time Slot</InputLabel>
            <Select
              value={timeSlot}
              label="Time Slot"
              onChange={(e) => setTimeSlot(e.target.value)}
            >
              {timeSlots.map((slot) => (
                <MenuItem key={slot} value={slot}>
                  {slot}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ my: 2 }}>
            <TextField
              label="Number of Guests"
              type="number"
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
              InputProps={{ inputProps: { min: 1 } }}
            />
          </FormControl>
          <FormControl fullWidth sx={{ my: 2 }}>
            <InputLabel>Status</InputLabel>
            <Select
              value={status}
              label="Status"
              onChange={(e) => setStatus(e.target.value)}
            >
              <MenuItem value="Confirmed">Confirmed</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Cancelled">Cancelled</MenuItem>
            </Select>
          </FormControl>
          <Button onClick={handleSubmit}>Submit</Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default ReservationsToday;
