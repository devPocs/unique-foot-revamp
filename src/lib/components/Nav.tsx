"use client";

import {
  Flex,
  IconButton,
  Link,
  Drawer,
  useDisclosure,
  VStack,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  DrawerHeader,
  DrawerOverlay,
  HStack,
} from "@chakra-ui/react";
import SearchBar from "../ui/SearchBar";
import Image from "next/image";
import { HamburgerIcon } from "@/lib/ui/icons";
import Btn from "@/lib/ui/Button";
import CartObject from "../ui/CartObject";

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex w="100%" direction="column">
      <Flex
        justifyContent="space-between"
        align="center"
        minH={{ base: 5, md: 20 }}
        py={{ base: 2, md: 4 }}
        px={{ base: 2, md: 4 }}
        bg="#FFF"
        w="100%"
      >
        <HStack spacing={2}>
          {/* Drawer links */}
          <IconButton
            aria-label="Open Menu"
            display={{ base: "flex", md: "none" }}
            variant="ghost"
            onClick={onOpen}
          >
            <HamburgerIcon />
          </IconButton>
          <Image src="/images/unique1.svg" alt=" logo" width={60} height={60} />
        </HStack>
        {/* Desktop links */}
        <Flex
          display={{ base: "none", md: "flex" }}
          justifyContent="space-between"
          w="50%"
        >
          <Link href="/">Home</Link>
          <Link href="/accessories">Accessories</Link>
          <Link href="/favourites">Favourites</Link>
          <Link href="/contact">Contact</Link>
        </Flex>
        <Flex gap={8} align="center" px={8}>
          <CartObject />
          <Btn bgColor="brand.900" textColor="primary.50" text="Login" />
        </Flex>
      </Flex>
      <SearchBar placeholder="search for a product" />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Logo</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4}>
              <Link href="/">Home</Link>
              <Link href="/accessories">Accessories</Link>
              <Link href="/favourites">Favourites</Link>
              <Link href="/contact">Contact</Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Nav;
