import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h3">Welcome to dashboard</Typography>

      {/* <Link to="/contact">go to link</Link> */}

      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          navigate("/contact");
        }}
      >
        Go to Contact Page
      </Button>
    </Box>
  );
};

export default Dashboard;
