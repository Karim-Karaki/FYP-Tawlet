import { Avatar, Button, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <div />
      <div className="flex flex-row items-center gap-4">
        <Avatar
          src="/favicon.svg"
          variant="rounded"
          className="h-24 w-24 rotate-12"
        />
        <ListItemText
          primary={"Taylet"}
          secondary={""}
          primaryTypographyProps={{ className: "text-5xl" }}
          secondaryTypographyProps={{ className: "text-sm pl-1" }}
        />
      </div>
      <div />
      <Button variant="contained" size="large" component={Link} to={"/app"}>
        Get Started
      </Button>
    </>
  );
};

export default Home;
