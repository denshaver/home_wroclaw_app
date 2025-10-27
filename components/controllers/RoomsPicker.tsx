import { Box, FormLabel, Autocomplete, TextField } from "@mui/material";
import React from "react";

const rooms_options = [
  {
    title: "1 Room",
    value: 1,
  },
  {
    title: "2 Rooms",
    value: 2,
  },
  {
    title: "3 Rooms",
    value: 3,
  },
  {
    title: "4 Rooms",
    value: 4,
  },
];

export default function RoomsPicker({
  setSelectedRooms,
  selectedRooms,
  disabled,
}: {
  setSelectedRooms: React.Dispatch<React.SetStateAction<number[]>>;
  selectedRooms: number[];
  disabled?: boolean;
}) {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <FormLabel id="room-picker">Number of Rooms</FormLabel>
      <Autocomplete
        multiple
        id="rooms-picker"
        disabled={disabled}
        defaultValue={rooms_options.filter((o) =>
          selectedRooms.includes(o.value)
        )}
        onChange={(_, values) => setSelectedRooms(values.map((v) => v.value))}
        options={rooms_options}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => <TextField {...params} variant="standard" />}
      />
    </Box>
  );
}
