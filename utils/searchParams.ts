export function getSettingsFromSearchParams(searchParams: {
  [key: string]: string | undefined;
}) {
  const roomsParam = searchParams["rooms"];
  const priceParam = searchParams["price"];

  const rooms = roomsParam ? roomsParam.split(",").map(Number) : [];
  const price = priceParam ? priceParam.split(",").map(Number) : [0, 7000];

  return {
    roomsSettings: rooms,
    priceSettings: price,
  };
}
