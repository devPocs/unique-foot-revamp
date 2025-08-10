import { Card, Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Btn from "../ui/Button";

interface FeaturedAccessoryItemProps {
  productUrl: string;
  name: string;
  price: string | number;
}

const FeaturedAccessoryItem: React.FC<FeaturedAccessoryItemProps> = ({
  productUrl,
  name,
  price,
}) => {
  return (
    <Card
      p={0}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      h={{ base: 250 }}
      w={{ base: 150 }}
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Box position="relative" w="100%" h="150px">
        <Image
          src={productUrl}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Box p={2} w="100%" textAlign="center">
        <Text fontWeight="bold" fontSize="md" mb={1} noOfLines={1}>
          {name}
        </Text>
        <Text color="brand.600" fontWeight="semibold" fontSize="sm">
          ₦{price}
        </Text>
      </Box>

      <Btn
        text="View Product"
        bgColor="brand.600"
        textColor="white"
        hoverBg="brand.500"
      />
    </Card>
  );
};

export default FeaturedAccessoryItem;
