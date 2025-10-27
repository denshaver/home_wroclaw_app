"use client";

import { Button, Fade, Stack } from "@mui/material";
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
    <Fade in={true} timeout={450}>
      <Stack
        className="shadow-m"
        sx={{
          padding: "24px",
          borderRadius: "10px",
        }}
      >
        <Stack
          sx={{
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 5 },
            alignItems: { xs: "stretch", md: "center" },
            justifyContent: "space-between",
          }}
        >
          <Stack
            sx={{
              gap: { xs: 3, md: 5 },
              flexDirection: { xs: "column", md: "row" },
              flexGrow: 3,
            }}
          >
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
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="flex-end">
            <Button
              sx={{ alignSelf: "center", height: "fit-content" }}
              onClick={applyFilters}
              disabled={isPending}
              variant="contained"
              size="large"
            >
              Apply Filters
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Fade>
  );
}
