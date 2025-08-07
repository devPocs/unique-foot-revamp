import { Button } from "@chakra-ui/react";

interface BtnProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  width?: string | number;
  height?: string | number;
  hoverBg?: string;
}

const Btn = ({
  text,
  bgColor,
  textColor,
  width,
  height,
  hoverBg,
}: BtnProps) => {
  return (
    <Button
      bg={bgColor}
      textColor={textColor}
      width={width}
      height={height}
      borderRadius={8}
      _hover={{ bg: hoverBg }}
    >
      {text}
    </Button>
  );
};

export default Btn;
