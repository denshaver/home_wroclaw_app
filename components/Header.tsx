import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import HomeIcon from "@/public/icon.png";

export default function Header() {
  return (
    <Stack marginBottom={4}>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h3" component="h1">
          Wroclaw Home
        </Typography>
        <Image
          src={HomeIcon}
          alt="Home Icon"
          width={50}
          height={50}
          style={{
            transform: "rotate(12deg)",
          }}
        />
      </Stack>
      <Typography variant="body1" textAlign="center" color="textSecondary">
        Find your perfect home in Wroclaw with ease.
      </Typography>
    </Stack>
  );
}
