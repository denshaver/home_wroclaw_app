import { NextResponse } from "next/server";
import { CORS_HEADERS } from "../utils";
import { authenticateClient } from "./_auth/auth";
import { parseApartmentData } from "./_utils/parser";

const apiId = Number(process.env.API_ID);
const apiHash = process.env.API_HASH!;
const sessionString = process.env.SESSION_STRING!;

export async function OPTIONS() {
  return NextResponse.json({}, { headers: CORS_HEADERS });
}

export async function GET() {
  try {
    const telegramClient = await authenticateClient(
      apiId,
      apiHash,
      sessionString
    );

    const limit = 350;
    const channel = "home_Wroclaw";

    const messages = await telegramClient.getMessages(channel, { limit });
    const postsArray = Array.from(messages);

    const parsedApartments = parseApartmentData(postsArray);

    return NextResponse.json(parsedApartments, { headers: CORS_HEADERS });
  } catch (error) {
    console.error("Error fetching apartments:", error);
    return NextResponse.json(
      { error: "Failed to fetch apartments" },
      { status: 500, headers: CORS_HEADERS }
    );
  }
}
