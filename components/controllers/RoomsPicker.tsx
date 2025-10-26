import {
  Box,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import React from "react";

export default function RoomsPicker({
  setSelectedRooms,
  selectedRooms,
  disabled,
}: {
  setSelectedRooms: React.Dispatch<React.SetStateAction<number[]>>;
  selectedRooms: number[];
  disabled?: boolean;
}) {
  const handleRoomChange = (room: number) => {
    setSelectedRooms((prev) =>
      prev.includes(room) ? prev.filter((r) => r !== room) : [...prev, room]
    );
  };

  return (
    <Box>
      <FormLabel> Number of Rooms </FormLabel>
      <FormGroup
        sx={{
          flexDirection: "row",
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              disabled={disabled}
              checked={selectedRooms.includes(1)}
              onChange={() => handleRoomChange(1)}
            />
          }
          label="1 Room"
        />
        <FormControlLabel
          control={
            <Checkbox
              disabled={disabled}
              checked={selectedRooms.includes(2)}
              onChange={() => handleRoomChange(2)}
            />
          }
          label="2 Rooms"
        />
        <FormControlLabel
          control={
            <Checkbox
              disabled={disabled}
              checked={selectedRooms.includes(3)}
              onChange={() => handleRoomChange(3)}
            />
          }
          label="3 Rooms"
        />
        <FormControlLabel
          control={
            <Checkbox
              disabled={disabled}
              checked={selectedRooms.includes(4)}
              onChange={() => handleRoomChange(4)}
            />
          }
          label="4 Rooms"
        />
      </FormGroup>
    </Box>
  );
}
