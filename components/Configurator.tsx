"use client";

import { Button, Stack, Typography } from "@mui/material";
import React, { useState, useTransition } from "react";
import PriceRange from "./controllers/PriceRange";
import RoomsPicker from "./controllers/RoomsPicker";
import { useRouter } from "next/navigation";

interface ConfiguratorProps {
  rooms?: number[];
  price?: number[];
}

export default function Configurator({ rooms, price }: ConfiguratorProps) {
  const router = useRouter();
  const [priceRange, setPriceRange] = useState<number[]>(price || [0, 70]);
  const [selectedRooms, setSelectedRooms] = useState<number[]>(rooms || []);

  const [isPending, startTransition] = useTransition();

  const applyFilters = () => {
    startTransition(() => {
      router.push(
        `/?rooms=${selectedRooms.join(",")}&price=${priceRange.join(",")}`
      );
    });
  };

  return (
    <Stack>
      <Typography variant="h5" marginTop={4} marginBottom={2}>
        Configuration
      </Typography>
      <Stack direction="row" spacing={6}>
        <PriceRange
          disabled={isPending}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
        <RoomsPicker
          disabled={isPending}
          selectedRooms={selectedRooms}
          setSelectedRooms={setSelectedRooms}
        />
        <Stack
          sx={{
            flexDirection: "row",
            flexGrow: 2,
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Button
            sx={{ alignSelf: "center", height: "fit-content" }}
            onClick={applyFilters}
            disabled={isPending}
            variant="contained"
          >
            Apply Filters
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
