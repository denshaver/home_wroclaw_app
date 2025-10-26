import { IApartment } from "@/app/api/apartments/_types/apartments";

export function filterApartments(
  apartments: IApartment[],
  roomsSettings: number[],
  priceSettings: number[]
) {
  const minPrice = priceSettings[0];
  const maxPrice = priceSettings[1] === 7000 ? null : priceSettings[1];
  const minRooms = roomsSettings.length > 0 ? Math.min(...roomsSettings) : null;
  const maxRooms = roomsSettings.length > 0 ? Math.max(...roomsSettings) : null;

  const filteredApartments = apartments.filter((apartment) => {
    const meetsMinPrice = minPrice ? apartment.totalPrice >= minPrice : true;
    const meetsMaxPrice = maxPrice ? apartment.totalPrice <= maxPrice : true;
    const meetsMinRooms = minRooms ? apartment.rooms >= minRooms : true;
    const meetsMaxRooms = maxRooms ? apartment.rooms <= maxRooms : true;

    return meetsMinPrice && meetsMaxPrice && meetsMinRooms && meetsMaxRooms;
  });

  return filteredApartments;
}
