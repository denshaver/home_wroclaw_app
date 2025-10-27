import { Box, FormLabel, Typography, Slider } from "@mui/material";

const minDistance = 10;

export default function PriceRange({
  priceRange,
  setPriceRange,
  disabled,
}: {
  priceRange: number[];
  setPriceRange: React.Dispatch<React.SetStateAction<number[]>>;
  disabled?: boolean;
}) {
  const handleChange = (_: Event, newValue: number[], activeThumb: number) => {
    if (activeThumb === 0) {
      setPriceRange([
        Math.min(newValue[0], priceRange[1] - minDistance),
        priceRange[1],
      ]);
    } else {
      setPriceRange([
        priceRange[0],
        Math.max(newValue[1], priceRange[0] + minDistance),
      ]);
    }
  };

  function valuetext(value: number) {
    return `${value} PLN`;
  }

  function sliderLabel() {
    if (priceRange[0] === 0 && priceRange[1] === 7000) return "Any";
    const label1 = `${priceRange[0]}`;
    const label2 = priceRange[1] === 7000 ? "+ PLN" : ` - ${priceRange[1]} PLN`;
    return `${label1}${label2}`;
  }

  return (
    <Box sx={{ flexGrow: 2 }}>
      <FormLabel id="range-slider">Price Range (PLN)</FormLabel>
      <Slider
        disabled={disabled}
        id="range-slider"
        getAriaLabel={() => "Price range"}
        value={priceRange}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        max={7000}
        step={50}
      />
      <Typography color="helperText" variant="body2">
        Selected range: {sliderLabel()}
      </Typography>
    </Box>
  );
}
