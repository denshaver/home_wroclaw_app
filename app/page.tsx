import React from "react";
import { Fade, Stack, Typography } from "@mui/material";
import Header from "../components/Header";
import Configurator from "../components/Configurator";
import ApartmentCard from "@/components/ApartmentCard";
import { getSettingsFromSearchParams } from "@/utils/searchParams";
import { filterApartments } from "@/utils/filter";
import getApartments from "./api/apartments/_requests/apartments";
import ClientThemeProvider from "./_theme/ClientThemeProvider";

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
    <ClientThemeProvider>
      <Stack
        className="container"
        sx={{
          width: { xs: "95%", md: "100%" },
        }}
      >
        <Fade in={true} timeout={400}>
          <Header />
        </Fade>
        <Configurator rooms={roomsSettings} price={priceSettings} />
        <Fade in={true} timeout={500}>
          <Stack
            sx={{
              marginTop: 4,
              gap: 2,
            }}
          >
            <Typography variant="subtitle1" gutterBottom color="textSecondary">
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
        </Fade>
      </Stack>
    </ClientThemeProvider>
  );
}
