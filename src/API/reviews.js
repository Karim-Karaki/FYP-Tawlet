const API_BASE_URL = "http://localhost:5000"; // Adjust to your actual API URL

export const getAllReviews = async () => {
  const response = await fetch(`${API_BASE_URL}/reviews`);
  if (!response.ok) {
    throw new Error("Failed to fetch reviews");
  }
  return await response.json();
};

export const createReview = async (data) => {
  const response = await fetch(`${API_BASE_URL}/reviews`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Failed to create review");
  }
  return await response.json();
};

export const getReviewById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/reviews/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch review with id ${id}`);
  }
  return await response.json();
};

export const updateReview = async (id, updateData) => {
  const response = await fetch(`${API_BASE_URL}/reviews/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateData),
  });
  if (!response.ok) {
    throw new Error(`Failed to update review with id ${id}`);
  }
  return await response.json();
};

export const deleteReview = async (id) => {
  const response = await fetch(`${API_BASE_URL}/reviews/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`Failed to delete review with id ${id}`);
  }
  return await response.json(); // No content expected back, but confirming success
};

export const getAllReviewsByRestaurant = async (restaurantId) => {
  const response = await fetch(
    `${API_BASE_URL}/review/restaurant/${restaurantId}`
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch reviews for restaurant with id ${restaurantId}`
    );
  }
  return await response.json();
};

export const getAverageRatingByRestaurant = async (restaurantId) => {
  const response = await fetch(
    `${API_BASE_URL}/review/restaurant/${restaurantId}/average`
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch average rating for restaurant with id ${restaurantId}`
    );
  }
  return await response.json();
};

// Note: You have a duplicate function createReview in ReviewService, you might need to adjust or remove it.
