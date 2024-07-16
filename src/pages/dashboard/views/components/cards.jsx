import React, { useEffect, useState } from "react";
import axios from "axios";
import CardMedia from "@mui/material/CardMedia";
import { Box, CardActionArea, Tooltip, Typography, Zoom, CircularProgress } from "@mui/material";

import oboticarioImage from "../../../../assets/images/icons/oboticario.png";
import naturaImage from "../../../../assets/images/icons/natura.png";
import eudoraImage from "../../../../assets/images/icons/eudora.png";
import imageDefault from "../../../../assets/images/icons/default.png";

function ActionAreaCard({ label, image, link }) {
  return (
    <Tooltip
      title={label}
      TransitionComponent={Zoom}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <CardActionArea
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          width: "7rem",
          transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          backgroundClip: "border-box",
          border: "0px solid rgba(0, 0, 0, 0.125)",
          backgroundColor: "rgba(255, 255, 255, 0.402)",
          backdropFilter: "saturate(200%) blur(20px)",
          boxShadow: "rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem",
          padding: 2,
          paddingTop: 5,
          marginTop: 3,
          borderRadius: 50,
          flexDirection: "column",
          "&:hover": {
            background: `linear-gradient(180deg, rgba(42, 42, 42, 0) 80%, #ff003b 100%)`,
          },
          "@media (max-width: 767px)": {
            width: "5em",
          },
        }}
        onClick={() => window.open(link, '_blank')}
      >
        <Typography sx={{ fontSize: "90%" }}>{label}</Typography>
        <CardMedia
          component="img"
          height="auto"
          image={image}
          alt="Card"
          sx={{ display: "flex" }}
        />
      </CardActionArea>
    </Tooltip>
  );
}

const Card = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axios.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vTUBQaRQ7cuU-FlSBYdPM9inVKJd2AfG5ZJE9xWBVpCUi6GBjd8yfFH3Q0ofa0v_9Dp4ZCzXZRqKjX4/pub?output=csv');
        const data = response.data;
        const [headerRow, linkRow] = data.split('\n').slice(0, 2);
        const labels = headerRow.split(',').map(label => label.trim());
        const links = linkRow.split(',').map(link => link.trim());

        const fetchedCards = labels.map((label, index) => {
          const link = links[index];
          let image;
          switch (label.toLowerCase()) {
            case 'natura':
              image = naturaImage;
              break;
            case 'oboticario':
              image = oboticarioImage;
              break;
            case 'eudora':
              image = eudoraImage;
              break;
            default:
              image = imageDefault;
          }
          return { label, link, image };
        });

        setCards(fetchedCards);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar os links:', error);
        setLoading(false);
      }
    };

    fetchLinks();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Box className="cardsContact">
      {cards.map((card, index) => (
        <ActionAreaCard
          key={index}
          link={card.link}
          label={card.label}
          image={card.image}
        />
      ))}
    </Box>
  );
};

export default Card;
