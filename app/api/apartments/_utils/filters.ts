import { ApartmentsRequestBody, IApartment } from "../_types/apartments";

export function filterApartments(
  apartments: IApartment[],
  body: ApartmentsRequestBody
) {
  const filteredApartments = apartments.filter((apartment) => {
    const meetsMinPrice =
      body.minPrice !== undefined
        ? apartment.totalPrice >= body.minPrice
        : true;
    const meetsMaxPrice =
      body.maxPrice !== undefined
        ? apartment.totalPrice <= body.maxPrice
        : true;
    const meetsMinRooms =
      body.minRooms !== undefined ? apartment.rooms >= body.minRooms : true;
    const meetsMaxRooms =
      body.maxRooms !== undefined ? apartment.rooms <= body.maxRooms : true;

    return meetsMinPrice && meetsMaxPrice && meetsMinRooms && meetsMaxRooms;
  });

  return filteredApartments;
}
