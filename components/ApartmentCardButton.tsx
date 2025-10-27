"use client";

import { Button } from "@mui/material";
import React, { useEffect } from "react";

export default function ApartmentCardButton({ url }: { url: string }) {
  const [isViewed, setIsViewed] = React.useState(false);
  const viewed =
    typeof window !== "undefined"
      ? localStorage.getItem("viewedApartments")
      : null;
  const viewedApartments = viewed ? (JSON.parse(viewed) as string[]) : [];

  useEffect(() => {
    if (viewedApartments.includes(url)) {
      setIsViewed(true);
    }
  }, [url]);

  function handleClick() {
    if (!isViewed) {
      viewedApartments.push(url);
      localStorage.setItem(
        "viewedApartments",
        JSON.stringify(viewedApartments)
      );
    }

    window.open(url, "_blank");
    setIsViewed(true);
  }

  return (
    <Button
      variant={isViewed ? "outlined" : "contained"}
      color={isViewed ? "info" : "primary"}
      onClick={handleClick}
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
