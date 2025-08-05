import { useState } from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon, DeleteIcon, ArrowRightIcon } from "@/lib/ui/icons";

const SearchBar = ({ placeholder }: { placeholder: string }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const borderColor = useColorModeValue("primary.400", "primary.600");
  const iconColor = useColorModeValue("brand.600", "brand.400");

  return (
    <Box w={{ base: "100%", md: "20rem" }} py={4} px={2}>
      <InputGroup>
        <Input
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          borderColor={borderColor}
          focusBorderColor="primary.500"
          bg="white"
          color="primary.600"
          _placeholder={{ color: "primary.400" }}
          borderRadius="full"
          pr="4.5rem"
        />
        <InputRightElement width="4.5rem">
          {searchTerm ? (
            <>
              <IconButton
                aria-label="Search"
                icon={<ArrowRightIcon />}
                size="sm"
                color={iconColor}
                variant="ghost"
                onClick={() => {
                  /* handle search here */
                }}
                mr={1}
              />
              <IconButton
                aria-label="Clear"
                icon={<DeleteIcon />}
                size="sm"
                color="accent.500"
                variant="ghost"
                onClick={() => setSearchTerm("")}
              />
            </>
          ) : (
            <Box color={iconColor} fontSize="xl">
              <SearchIcon />
            </Box>
          )}
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
