import React from "react";
import { Avatar, Box, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../../../assets/styles/home.css";
import imageProfile from "../../../assets/images/profileImage.jpg";

import oboticario from "../../../assets/images/icons/oboticario.png";
import natura from "../../../assets/images/icons/natura.png";
import eudora from "../../../assets/images/icons/eudora.png";

//Card area
import CardTop from "./components/cardTop";

//Big card area
import Particles from "./components/particles";

//End

export default function Home() {
  return (
    <Box className="homeConteiner">
      <Particles />
      <Box className="homeConteiner">
        <Box className="myContacts">
          <Paper id="paper">
            <Avatar
              className="imageProfile"
              alt="Felipe França"
              src={imageProfile}
              sx={{ width: "15em", height: "auto" }}
            />
            <Typography variant="h6" letterSpacing={4} fontWeight={400}>
              Elina França
            </Typography>
            <Box className="cardsContact">
              <a target="blank" href="https://minhaloja.grupoboticario.com.br/loja-elinajoycesilvabarbosafranca-9597663">
                <CardTop
                  image={oboticario}
                  alt="OBoticário"
                  label="OBoticário"
                />
              </a>
              <a target="blank" href="https://www.natura.com.br/consultoria/linajoy">
                <CardTop image={natura} alt="Natura" label="Natura" />
              </a>
              <a target="blank" href="https://minhaloja.grupoboticario.com.br/loja-elinajoycesilvabarbosafranca-9597663">
                <CardTop image={eudora} alt="Eudora" label="Eudora" />
              </a>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
