import { IApartment } from "@/app/api/apartments/_types/apartments";
import { Fade, Stack, Typography } from "@mui/material";
import React from "react";
import ApartmentCardButton from "./ApartmentCardButton";

export default function ApartmentCard({
  apartment,
  index,
}: {
  apartment: IApartment;
  index: number;
}) {
  return (
    <Fade in={true} timeout={500 + index * 150}>
      <Stack
        className="card"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack>
          <Typography variant="h6">
            {index + 1}. {apartment.title}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Price:{" "}
            <Typography component="span" fontWeight="bold">
              {apartment.totalPrice} PLN
            </Typography>{" "}
            | Rooms:{" "}
            <Typography component="span" fontWeight="bold">
              {apartment.rooms}
            </Typography>
          </Typography>
        </Stack>
        <ApartmentCardButton url={apartment.url} />
      </Stack>
    </Fade>
  );
}
