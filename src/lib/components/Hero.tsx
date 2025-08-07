import { Box, Card, Container, Heading, Text } from "@chakra-ui/react";
import Btn from "../ui/Button";

const Hero = () => {
  return (
    <Card
      h={{ base: "600px", md: "600px" }}
      position="relative"
      bgImage="url('/images/suede.jpeg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      overflow="hidden"
      borderRadius="xl"
      boxShadow="lg"
      mb={{ base: 8 }}
    >
      {/* Overlay */}
      <Box position="absolute" inset={0} bg="overlay.600" zIndex={1} />
      {/* Content */}
      <Container
        position="relative"
        zIndex={2}
        h="100%"
        maxW="container.lg"
        color="primary.50"
        py={{ base: 8, md: 0 }}
        px={{ base: 8 }}
      >
        {/* <Text as="span" fontSize={{ base: "1.2rem", md: "2.5rem" }} mb={4}>
          Here, we go the extra mile to
        </Text>
        <Text fontSize={{ base: "1.2rem", md: "2.5rem" }} mb={4}>
          make footwears that speak.
        </Text> */}

        <Box fontSize="28px" fontWeight="bold" color="primary.400" mt="90px">
          <Text>Shop Our Best Sellers</Text>
          <Text>Get a discount!</Text>
        </Box>
        <Btn
          text="Shop Now"
          bgColor="brand.600"
          textColor="white"
          hoverBg="brand.500"
        />
      </Container>
    </Card>
  );
};

export default Hero;
