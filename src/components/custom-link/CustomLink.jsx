import styled from "styled-components";
import { Text } from "@chakra-ui/react"

import { SECONDARY_FONT_COLOUR } from "../../constants";

const Link = styled.a`
  color: ${SECONDARY_FONT_COLOUR};
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const CustomLink = ({ href, newTab = false, text}) => (
  <Link href={href} target={newTab ? "_blank" : ""}>
    <Text as="span" textStyle={["xs", "xs", "sm", "md"]}>{text}</Text>
  </Link>
);
