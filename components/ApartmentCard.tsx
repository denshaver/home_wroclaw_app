import { IApartment } from "@/app/api/apartments/_types/apartments";
import { Button, Stack, Typography } from "@mui/material";
import React from "react";

export default function ApartmentCard({
  apartment,
}: {
  apartment: IApartment;
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
        <Typography variant="h6">{apartment.title}</Typography>
        <Typography variant="body1">
          Price: {apartment.totalPrice} PLN
        </Typography>
      </Stack>
      <Button
        variant="outlined"
        color="primary"
        href={apartment.url}
        target="_blank"
      >
        View Details
      </Button>
    </Stack>
  );
}
