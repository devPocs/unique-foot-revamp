import { Box, Text } from "@chakra-ui/react";

const CallOutBanner = () => {
  return (
    <Box
      h={{ base: "100px", md: "120px" }}
      position="relative"
      width="100%"
      bgImage="url('/images/nathan-dumlao-vsTbiuRRKvA-unsplash_1.webp')"
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      overflow="hidden"
    >
      <Box position="absolute" inset={0} bg="overlay.500" zIndex={1} />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex={2}
        w="100%"
        textAlign="center"
      >
        <Text fontStyle="italic" fontWeight="bold" fontSize="xl" color="white">
          &quot;Let&apos;s Redefine your Comfort&quot;
        </Text>
      </Box>
    </Box>
  );
};

export default CallOutBanner;
