const API_BASE_URL = "http://localhost:5000";

export const getAllTablesByRestaurant = async (restaurantId) => {
  const response = await fetch(
    `${API_BASE_URL}/table/restaurant/${restaurantId}`
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch tables for restaurant with id ${restaurantId}`
    );
  }
  return await response.json();
};
export const createTable = async (data) => {
  const response = await fetch(`${API_BASE_URL}/table`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Failed to create table");
  }
  return await response.json();
};

export const getAvailableTables = async (restaurantId, date, timeSlot) => {
  const response = await fetch(`${API_BASE_URL}/table/available`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ restaurantId, date, timeSlot }),
  });
  if (!response.ok) {
    throw new Error("Failed to fetch available tables");
  }
  return await response.json();
};
