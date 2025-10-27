import React from "react";
import { Stack, Typography } from "@mui/material";
import Header from "../components/Header";
import Configurator from "../components/Configurator";
import ApartmentCard from "@/components/ApartmentCard";
import { getSettingsFromSearchParams } from "@/utils/searchParams";
import { filterApartments } from "@/utils/filter";
import getApartments from "./api/apartments/_requests/apartments";

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await searchParams;
  const { roomsSettings, priceSettings } = getSettingsFromSearchParams(
    params || {}
  );

  const apartments = await getApartments();
  const filteredApartments = filterApartments(
    apartments,
    roomsSettings,
    priceSettings
  );

  return (
    <Stack className="container">
      <Header />
      <Configurator rooms={roomsSettings} price={priceSettings} />
      <Stack
        sx={{
          marginTop: 4,
        }}
      >
        <Typography
          variant="subtitle1"
          gutterBottom
          color="textSecondary"
          sx={{
            textAlign: "right",
          }}
        >
          Found {filteredApartments.length} apartments
        </Typography>
        {filteredApartments.map((apartment, index) => (
          <ApartmentCard
            key={apartment.url + index}
            apartment={apartment}
            index={index}
          />
        ))}
      </Stack>
    </Stack>
  );
}
