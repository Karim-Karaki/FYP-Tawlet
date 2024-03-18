import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
} from "@mui/material";
import { login } from "../../API/Login.js"; // Adjust the import path as necessary
import { useAuth } from "../../context/AuthContext";

//const AuthContext = createContext(null);

//export const useAuth = () => useContext(AuthContext);

const Dashboard = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setLogin } = useAuth(); // Use the renamed context function

  const handleLogin = async () => {
    try {
      console.log(username, password);
      const data = await login(username, password);

      console.log("Login Successful", data);
      setLogin(data.token, data.restaurantID); // Update the global state with the login details

      navigate("/app/reservations");
    } catch (error) {
      console.error("Login Error:", error);
      setError("Authentication failed. Please check your credentials.");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Avatar
          src="/illustration.svg"
          variant="square"
          sx={{ width: "50vw", height: "auto", maxWidth: "450px", py: 4 }}
        />
        <Paper elevation={3} sx={{ mt: 4, width: "100%", p: 4 }}>
          <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
            Login
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleLogin}
          >
            Log In
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default Dashboard;
