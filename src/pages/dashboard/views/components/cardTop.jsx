import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import { Box, CardActionArea, Tooltip, Typography, Zoom } from "@mui/material";

function ActionAreaCard(props) {
  return (
    <Tooltip
      title={props.label}
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
          borderRadius: "0.75rem",
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
      >
        <Typography sx={{ fontSize: "90%" }}>{props.label}</Typography>
        <CardMedia
          component="img"
          height="auto"
          image={props.image}
          alt="Card"
          sx={{ display: "flex",}}
        />
      </CardActionArea>
    </Tooltip>
  );
}

const AreaCard = (props) => {
  return (
    <Box>
      {props.disabled ? (
        <ActionAreaCard disabled {...props}>
          {props.label}
        </ActionAreaCard>
      ) : (
        <ActionAreaCard backgroundImage={props.image} {...props}>
          {props.label}
        </ActionAreaCard>
      )}
    </Box>
  );
};

export default AreaCard;
