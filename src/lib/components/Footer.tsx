import { Box, Center } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      bg="brand.600"
      mt="auto"
      color="primary.50"
      h={{ base: "200px", md: "150px" }}
    >
      <Center>This is the footer component</Center>
    </Box>
  );
};

export default Footer;
