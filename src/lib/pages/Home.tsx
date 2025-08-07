"use client";

import { Box, Flex, Grid } from "@chakra-ui/react";
import Hero from "@/lib/components/Hero";
export default function Home() {
  return (
    <Flex px={4} flexDirection="column">
      <Hero />
    </Flex>
  );
}
