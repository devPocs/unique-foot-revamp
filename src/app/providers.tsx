"use client";

import theme from "@/lib/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraProvider theme={theme}>
      <ThemeProvider attribute="class">{children}</ThemeProvider>{" "}
    </ChakraProvider>
  );
};

export default Providers;
