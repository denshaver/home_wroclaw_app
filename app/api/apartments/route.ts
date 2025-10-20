import { NextRequest, NextResponse } from "next/server";
import { CORS_HEADERS } from "../utils";
import { authenticateClient } from "./_auth/auth";
import { parseApartmentData } from "./_utils/parser";
import { ApartmentsRequestBody } from "./_types/apartments";
import { filterApartments } from "./_utils/filters";

const apiId = Number(process.env.API_ID);
const apiHash = process.env.API_HASH!;
const sessionString = process.env.SESSION_STRING!;

export async function OPTIONS() {
  return NextResponse.json({}, { headers: CORS_HEADERS });
}

export async function POST(req: NextRequest) {
  try {
    const body: ApartmentsRequestBody = await req.json();

    const telegramClient = await authenticateClient(
      apiId,
      apiHash,
      sessionString
    );

    const limit = 1000;
    const channel = "home_Wroclaw";

    const messages = await telegramClient.getMessages(channel, { limit });
    const postsArray = Array.from(messages);

    const parsedApartments = parseApartmentData(postsArray);
    const filteredApartments = filterApartments(parsedApartments, body);

    return NextResponse.json(filteredApartments, { headers: CORS_HEADERS });
  } catch (error) {
    console.error("Error fetching apartments:", error);
    return NextResponse.json(
      { error: "Failed to fetch apartments" },
      { status: 500, headers: CORS_HEADERS }
    );
  }
}
