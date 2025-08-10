import { Box, Grid, Flex, Text, Stack } from "@chakra-ui/react";
import NavItem from "@/lib/ui/NavItem";
import { PhoneIcon, EmailIcon } from "@/lib/ui/icons";

const Footer = () => {
  return (
    <Box
      bg="brand.900"
      color="primary.50"
      py={8}
      px={{ base: 4, md: 12 }}
      mt="auto"
    >
      <Grid
        templateColumns={{ base: "1fr 1fr", md: "2fr 1fr 1fr" }}
        gap={8}
        alignItems="flex-start"
      >
        {/* Quick Links */}
        <Stack spacing={2}>
          <Text fontWeight="bold" mb={2}>
            Quick Links
          </Text>
          <NavItem href="#" text="Help & Support" hoverColor="brand.500" />
          <NavItem href="#" text="My Account" hoverColor="brand.500" />
          <NavItem href="#" text="Track Order" hoverColor="brand.500" />
        </Stack>

        {/* Contact */}
        <Stack spacing={2}>
          <Text fontWeight="bold" mb={2}>
            Contact
          </Text>
          <Flex align="center" gap={2}>
            <EmailIcon size={20} color="brand.500" />
            <Text as="span">uniqueFoot@gmail.com</Text>
          </Flex>
          <Flex align="center" gap={2}>
            <PhoneIcon size={20} color="brand.500" />
            <Text as="span">+23498654321</Text>
          </Flex>
        </Stack>
        {/* Socials */}
        <Stack spacing={2}>
          <Text fontWeight="bold" mb={2}>
            Follow Us
          </Text>
          <Flex gap={4}>
            <NavItem href="#" text="facebook" />
            <NavItem href="#" text="instagram" />
            <NavItem href="#" text="twitter" />
          </Flex>
        </Stack>
      </Grid>

      <Text textAlign="center" mt={8} fontSize="sm" color="primary.200">
        © {new Date().getFullYear()} UniqueFoot. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
