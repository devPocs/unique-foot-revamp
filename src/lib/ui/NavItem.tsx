import { Link } from "@chakra-ui/react";

interface NavItemProps {
  href: string;
  hoverColor?: string;
  text: string;
}

const NavItem = ({ href, hoverColor, text }: NavItemProps) => {
  return (
    <Link textDecoration="none" _hover={{ color: hoverColor }} href={href}>
      {text}
    </Link>
  );
};

export default NavItem;
