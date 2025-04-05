import styled from "styled-components";
import { Text } from "@chakra-ui/react"

import { PRIMARY_FONT_COLOUR, SECONDARY_FONT_COLOUR } from "../../constants";

const Link = styled.a`
  color: ${(props) => props.headFoot ? PRIMARY_FONT_COLOUR : SECONDARY_FONT_COLOUR};
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const CustomLink = ({ headFoot = false, href, newTab = false, text}) => (
  <Link headFoot={headFoot} href={href} target={newTab ? "_blank" : ""}>
    <Text as="span" textStyle={["xs", "xs", "sm", "md"]}>{text}</Text>
  </Link>
);
