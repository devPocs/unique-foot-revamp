import { Box, Grid, Heading } from "@chakra-ui/react";
import FeaturedProductItem from "./FeaturedProductItem";

const featuredProductList = [
  {
    idx: 1,
    name: "Maskim Sneakers",
    imgUrl: "/images/maksim-sneakers_1.webp",
    price: "NGN 40,000",
  },
  {
    idx: 2,
    name: "Maria White Sneakers",
    imgUrl: "/images/maria-white-sneakers_1.webp",
    price: "NGN 50,999",
  },
  {
    idx: 3,
    name: "Kimia Chelsea Boots",
    imgUrl: "/images/kimia-chelsea-boots_1.webp",
    price: "NGN 30,000",
  },
  {
    idx: 4,
    name: "Nike Multi Sneakers",
    imgUrl: "/images/nike-multi-sneakers_1.webp",
    price: "NGN 60,000",
  },
];
//here, i typically want to have an endpoint which returns an array of items which are featured products.

const FeaturedProducts = () => {
  return (
    <>
      <Heading
        as="h1"
        color="primary.500"
        textAlign="center"
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
        fontWeight="bold"
        mb={6}
        letterSpacing="tight"
      >
        Featured Products
      </Heading>
      <Box border="2px" borderColor="primary.200" p={6} mb={6} boxShadow="sm">
        <Grid
          gridTemplateColumns={{ base: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }}
          gap={5}
          justifyItems="center"
        >
          {featuredProductList.map((product) => (
            <FeaturedProductItem
              key={product.idx}
              name={product.name}
              productUrl={product.imgUrl}
              price={product.price}
            />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default FeaturedProducts;
