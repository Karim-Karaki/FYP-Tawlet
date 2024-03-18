const API_BASE_URL = "http://localhost:5000"; // Adjust according to your server's address

export const login = async (portalUsername, password) => {
  const response = await fetch(`${API_BASE_URL}/twilio/PortalLogin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ portalUsername, password }),
  });

  if (!response.ok) {
    throw new Error("Authentication failed");
  }

  const data = await response.json();
  return data; // Contains the token and possibly other info
};
