import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f57c1f", // main orange {support and contrast}
    600: "#2d3136", // dark gray {buttons, bgs}
    700: "#ea580c",
    800: "#c2410c",
    900: "#9a3412",
  },
  primary: {
    50: "#f5f6fa",
    100: "#e4e7ec",
    200: "#cfd4db",
    300: "#bfc5ce",
    400: "#aeb5c1",
    500: "#232a4d", // logo blue
    600: "#1a1d23",
    700: "#101215",
    800: "#08090a",
  },
  accent: {
    500: "#c1121f", // red
  },
};

const theme = extendTheme({ colors });

export default theme;
