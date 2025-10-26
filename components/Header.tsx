import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h3" component="h1">
          Wroclaw Home Finder!
        </Typography>
        <Image
          src="https://img.icons8.com/?size=512&id=iJzm3AFQCS4W&format=png"
          alt="Home Icon"
          width={50}
          height={50}
        />
      </Stack>
      <Typography variant="body1" textAlign="center">
        Find your perfect home in Wroclaw with ease.
      </Typography>
    </>
  );
}
