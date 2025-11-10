"use client";

import { IApartment } from "@/app/api/apartments/_types/apartments";
import { Fade, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ApartmentCardButton from "./ApartmentCardButton";

export default function ApartmentCard({
  apartment,
  index,
}: {
  apartment: IApartment;
  index: number;
}) {
  const [isViewed, setIsViewed] = React.useState(false);

  useEffect(() => {
    const viewed = localStorage.getItem("viewedApartments");
    const viewedApartments = viewed ? (JSON.parse(viewed) as string[]) : [];
    if (viewedApartments.includes(apartment.url)) {
      setIsViewed(true);
    }
  }, [apartment.url]);

  function handleClick() {
    if (!isViewed) {
      const viewed = localStorage.getItem("viewedApartments");
      const viewedApartments = viewed ? (JSON.parse(viewed) as string[]) : [];

      viewedApartments.push(apartment.url);
      localStorage.setItem(
        "viewedApartments",
        JSON.stringify(viewedApartments)
      );
    }

    window.open(apartment.url, "_blank");
    setIsViewed(true);
  }

  const timeOut = 500 + index * 150;

  return (
    <Fade in={true} timeout={timeOut >= 2000 ? 2000 : timeOut}>
      <Stack
        className="shadow-s"
        sx={{
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          borderRadius: "10px",
          padding: "10px 15px",
        }}
      >
        <Stack
          sx={{
            width: { xs: "100%", md: "auto" },
          }}
        >
          <Typography variant="h6" color="secondary">
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
        <ApartmentCardButton isViewed={isViewed} onClick={handleClick} />
      </Stack>
    </Fade>
  );
}
