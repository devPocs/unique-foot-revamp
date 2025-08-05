import { Button } from "@chakra-ui/react";

interface BtnProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  width?: string | number;
  height?: string | number;
}

const Btn = ({ text, bgColor, textColor, width, height }: BtnProps) => {
  return (
    <Button bg={bgColor} textColor={textColor} width={width} height={height}>
      {text}
    </Button>
  );
};

export default Btn;
