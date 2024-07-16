import React from "react";
import { Avatar, Box, Paper, Typography } from "@mui/material";
import "../../../assets/styles/home.css";
import imageProfile from "../../../assets/images/profileImage.jpg";
import Cards from "./components/cards";
import Particles from "./components/particles";

export default function Home() {
  return (
    <Box className="homeConteiner">
      <Particles />
      <Box className="homeConteiner">
        <Box className="myContacts">
          <Paper id="paper">
            <Avatar
              className="imageProfile"
              alt="Elina França"
              src={imageProfile}
              sx={{ width: "15em", height: "auto" }}
            />
            <Typography variant="h6" letterSpacing={4} fontWeight={400}>
              Elina França
            </Typography>
            <Cards />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
