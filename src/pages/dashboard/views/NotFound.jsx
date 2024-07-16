import { Button, Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../../../assets/styles/NotFound.css";


export default function NotFound() {
  return (
    <Box sx={{display: "flex", alignItems: "center", flexDirection: "column", gap: 2, padding: 50,}}>
      <Typography variant="p" className="textNotfound">Oxi, página não encontrada 🤔</Typography>
      <Typography variant="p" className="textNotfound">Ta indo longe demais meu parceiro, seu link deve esta faltando informações ou não existe neste site.</Typography>
      <Button sx={{ width: '20em'}} variant="contained" component={Link} to="/pageElina" >Voltar a tela inicial</Button>
    </Box>
  );
};
