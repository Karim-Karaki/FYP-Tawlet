import React from "react";
import { AppBar, Avatar, Toolbar, Typography, Box } from "@mui/material";
//import Iconify from "@components/iconify";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext.jsx";

interface AppHeaderProps {
  isLoggedIn: boolean;
}

const AppHeader: React.FC<AppHeaderProps> = ({ isLoggedIn }) => {
  //set is logged in to true
  const { isAuthenticated, restaurantId } = useAuth();
  console.log(isAuthenticated, restaurantId);

  return (
    <>
      <AppBar sx={{ bgcolor: "background.paper", color: "primary.main" }}>
        <Toolbar>
          <Box
            sx={{ display: "flex", alignItems: "center", flexGrow: 1, gap: 2 }}
          >
            <Avatar src="/favicon.svg" variant="square" />
            <Typography variant="h6">Tawlet</Typography>
            {!isAuthenticated && (
              <Link to="/app">
                <Typography>Login</Typography>
              </Link>
            )}
          </Box>

          {isAuthenticated && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Link to="/app/reservations">
                <Typography>Reservations</Typography>
              </Link>
              <Link to="/app/floor">
                <Typography>Floor</Typography>
              </Link>
              <Link to="/app/reviews">
                <Typography>Reviews</Typography>
              </Link>
              <Link to="/app">
                <Typography>Logout</Typography>
              </Link>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <div className="mb-20" /> {/* Adjust margin as needed */}
    </>
  );
};

export default AppHeader;
