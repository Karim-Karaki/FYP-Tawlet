// src/api/reservations.js
const API_BASE_URL = "http://localhost:5000"; // Adjust to your actual API URL

export const createReservation = async (data, restaurantID) => {
  const randomGuestId = "6557468adc52cb5f5f1baaed";
  const updatedData = {
    ...data,
    guestId: randomGuestId,
  };

  const response = await fetch(`${API_BASE_URL}/reservation`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });

  if (!response.ok) {
    throw new Error("Failed to create reservation");
  }

  return await response.json();
};

export const deleteReservation = async (id) => {
  const response = await fetch(`${API_BASE_URL}/reservation/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`Failed to delete reservation with id ${id}`);
  }
  return await response.json();
};

// export const getAllreservationsByTable = async (tableId) => {

// };

export const getAllReservationsByRestaurant = async (restaurantId) => {
  console.log("restaurantIddsadasds", restaurantId);
  const response = await fetch(
    `${API_BASE_URL}/reservation/restaurant/${restaurantId}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch  for restaurant with id ${restaurantId}`);
  }
  return await response.json();
};

export const getAllReservationsByRestaurantAndDate = async (
  restaurantId,
  date
) => {
  const response = await fetch(
    `${API_BASE_URL}/reservation/restaurant/6558ac688934c017e768bcfd/date?date=${date}`
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch  for restaurant with id ${restaurantId} on date ${date}`
    );
  }
  return await response.json();
};
