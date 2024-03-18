import React, { useState, useEffect } from "react";
import {
  getAllReviewsByRestaurant,
  getAverageRatingByRestaurant,
} from "../../API/reviews.js";
import { Typography, Box, Paper } from "@mui/material";
import { useAuth } from "../../context/AuthContext.jsx";

const Reviews = ({}) => {
  const [reviews, setReviews] = useState([]);
  const { isAuthenticated, restaurantId } = useAuth();
  const [avgRating, setAvgRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  if (!isAuthenticated) return <div>Please log in</div>;
  const fetchReviews = async () => {
    try {
      console.log("restaurantId", restaurantId);
      const data = await getAllReviewsByRestaurant(restaurantId);
      setReviews(data);
      console.log("reviews", data);
    } catch (error) {
      console.error("Failed to fetch reviews", error);
    }
  };

  const fetchAverageRating = async () => {
    try {
      const data = await getAverageRatingByRestaurant(restaurantId);
      setAvgRating(data);
      console.log("avgRating", data);
      //setTotalReviews(data.totalReviews);
    } catch (error) {
      console.error("Failed to fetch average rating", error);
    }
  };

  useEffect(() => {
    fetchAverageRating();
    fetchReviews();
  }, [restaurantId]);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Reviews
      </Typography>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5">Average Rating: {avgRating}</Typography>
        <Typography variant="h6">Total Reviews: {totalReviews}</Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {reviews.map((review) => (
          <Paper key={review._id} sx={{ p: 2 }}>
            <Typography variant="h6">{review.title}</Typography>
            <Typography>Rating: {review.rating}</Typography>
            <Typography>{review.comment}</Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default Reviews;
