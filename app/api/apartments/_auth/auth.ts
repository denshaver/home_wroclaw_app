import { TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions/StringSession";

export async function authenticateClient(
  apiId: number,
  apiHash: string,
  sessionString: string
) {
  const stringSession = new StringSession(sessionString);
  const client = new TelegramClient(stringSession, apiId, apiHash, {
    connectionRetries: 5,
  });

  await client.connect();

  return client;
}
