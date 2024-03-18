import React, { useState, useEffect } from "react";
import { getAvailableTables } from "../../API/tables"; // Adjust the import path based on your project structure
import { useAuth } from "../../context/AuthContext.jsx"; // Adjust import based on your file structure

import {
  Box,
  Grid,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const Floor = () => {
  const [timeSlot, setTimeSlot] = useState("");
  const [availableTables, setAvailableTables] = useState([]);
  const { restaurantId } = useAuth(); // Assuming restaurantId is available either from context or props
  console.log(restaurantId);

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

  useEffect(() => {
    if (timeSlot) {
      console.log("Fetching available tables for time slot", timeSlot);
      // Assuming restaurantId is available either from context or props
      getAvailableTables(restaurantId, timeSlot)
        .then(setAvailableTables)
        .catch(console.error);
    }
  }, [timeSlot]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography variant="h5">Restaurant Layout</Typography>
        <Box
          component="img"
          src="/../../../public/restaurant-layout.png" // Update the path to your image
          alt="Restaurant Layout"
          sx={{ width: "100%", height: "auto" }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h5">Book a Table</Typography>
        <FormControl fullWidth margin="normal">
          <InputLabel id="time-slot-select-label">Time Slot</InputLabel>
          <Select
            labelId="time-slot-select-label"
            id="time-slot-select"
            value={timeSlot}
            label="Time Slot"
            onChange={(e) => setTimeSlot(e.target.value)}
          >
            {timeSlots.map((slot, index) => (
              <MenuItem key={index} value={slot}>
                {slot}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {availableTables.length > 0 ? (
          availableTables.map((table, index) => (
            <Button key={index} variant="contained" color="primary">
              Table {table.tableNumber}
            </Button>
          ))
        ) : (
          <Typography variant="body1">
            No tables available for the selected time slot
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default Floor;
