import { IApartment } from "@/app/api/apartments/_types/apartments";
import { baseUrl } from "../../utils";

export default async function getApartments() {
  const res = await fetch(`${baseUrl}/apartments`);

  if (!res.ok) {
    throw new Error("Failed to fetch apartments");
  }

  return res.json() as Promise<IApartment[]>;
}
