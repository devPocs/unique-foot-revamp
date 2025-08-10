"use client";

import { Flex } from "@chakra-ui/react";
import Hero from "@/lib/components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import FeaturedAccessories from "../components/FeaturedAccessories";

export default function Home() {
  return (
    <Flex px={4} flexDirection="column">
      <Hero />
      <FeaturedProducts />
      <FeaturedAccessories />
    </Flex>
  );
}
