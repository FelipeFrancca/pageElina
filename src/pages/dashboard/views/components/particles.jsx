import * as React from "react";
import { Box } from "@mui/material";
import "../../../../assets/styles/particles.css";

export default function Particles() {
  // Defina o número total de spans desejado
  const totalSpans = 70;

  // Gere uma lista de números aleatórios não repetidos
  const uniqueRandomNumbers = Array.from({ length: totalSpans }, (_, index) => index + 1)
    .sort(() => Math.random() - 0.2);

  return (
    <Box className="particlesContainer">
      <Box className="particles">
        {uniqueRandomNumbers.map((randomI) => (
          <span key={randomI} style={{ "--i": randomI }}></span>
        ))}
      </Box>
    </Box>
  );
}
