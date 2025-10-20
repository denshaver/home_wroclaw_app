export interface ApartmentsRequestBody {
  maxPrice?: number;
  minPrice?: number;
  maxRooms?: number;
  minRooms?: number;
}

export interface IApartment {
  rooms: number;
  url: string;
  totalPrice: number;
  date: number;
}
