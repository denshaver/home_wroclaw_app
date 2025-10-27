import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import HomeIcon from "@/public/icon.png";

export default function Header() {
  return (
    <Stack marginBottom={4}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{
          gap: { xs: 1, md: 2 },
        }}
      >
        <Typography
          component="h1"
          sx={{
            textAlign: "center",
            fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
            fontWeight: 600,
            lineHeight: 1.2,
          }}
        >
          Wroclaw Home
        </Typography>
        <Box
          sx={{
            position: "relative",
            width: { xs: 30, sm: 40, md: 50 },
            height: { xs: 30, sm: 40, md: 50 },
          }}
        >
          <Image
            src={HomeIcon}
            alt="Home Icon"
            fill
            style={{
              objectFit: "contain",
              transform: "rotate(12deg)",
            }}
          />
        </Box>
      </Stack>
      <Typography variant="body1" textAlign="center" color="textSecondary">
        Find your perfect home in Wroclaw with ease.
      </Typography>
    </Stack>
  );
}
