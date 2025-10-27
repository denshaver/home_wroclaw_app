import { IApartment } from "@/app/api/apartments/_types/apartments";
import { Stack, Typography } from "@mui/material";
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
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent="space-between"
      sx={{
        padding: 2,
        border: "1px solid #ccc",
        borderRadius: 2,
        marginBottom: 2,
      }}
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
  );
}
