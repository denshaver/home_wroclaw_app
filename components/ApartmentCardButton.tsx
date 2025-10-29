"use client";

import { Button } from "@mui/material";
import React from "react";

export default function ApartmentCardButton({
  onClick,
  isViewed,
}: {
  onClick?: () => void;
  isViewed?: boolean;
}) {
  return (
    <Button
      variant={isViewed ? "outlined" : "contained"}
      color={isViewed ? "info" : "primary"}
      onClick={onClick}
      disableElevation={isViewed}
      sx={{
        height: "fit-content",
        width: "140px",
        alignSelf: { xs: "flex-end", md: "unset" },
      }}
    >
      View Details
    </Button>
  );
}
