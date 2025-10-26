import { Api } from "telegram";

export function parseApartmentData(rawApartmentData: Api.Message[]) {
  const posts = rawApartmentData
    .map((m) => {
      return {
        text: m.message,
        url:
          m.replyMarkup &&
          "rows" in m.replyMarkup &&
          Array.isArray((m.replyMarkup as any).rows) &&
          (m.replyMarkup as any).rows[0]?.buttons[0]?.url
            ? (m.replyMarkup as any).rows[0].buttons[0].url
            : undefined,
      };
    })
    .filter((m) => m.text?.includes("Цена:"));

  const parsed = posts.map((t) => {
    const title = t.text.split("\n")[0].trim() || "No Title";
    const priceMatch = t.text.match(/Цена:[^\n]+/);
    const priceString = priceMatch ? priceMatch[0] : "";
    const [main, extra] = (priceString.match(/\d+/g) || []).map(Number);
    const rooms = t.text.match(/Комнаты:\s*(?:#\s*)?(\d+)/i)?.[1];

    const dateString = t.text.match(
      /📆\s*([0-9]{2}\/[0-9]{2}\/[0-9]{4})\s*\|\s*([0-9]{2}:[0-9]{2})/
    );
    let date = null;
    if (dateString) {
      const [_, d, t] = dateString;
      const [day, month, year] = d.split("/").map(Number);
      const [hour, minute] = t.split(":").map(Number);
      date = new Date(year, month - 1, day, hour, minute);
    }

    return {
      title,
      rooms: rooms ? +rooms : 0,
      url: t.url,
      totalPrice: (main || 0) + (extra || 0),
      date: date ? date.getTime() : 0,
    };
  });

  return parsed.sort((a, b) => b.date - a.date);
}
