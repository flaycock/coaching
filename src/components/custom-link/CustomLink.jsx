import styled from "styled-components";
import { Text } from "@chakra-ui/react"

import { PRIMARY_FONT_COLOUR, SECONDARY_FONT_COLOUR } from "../../constants";

const Link = styled.a`
  color: ${({ headFoot }) => headFoot ? PRIMARY_FONT_COLOUR : SECONDARY_FONT_COLOUR};
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const CustomLink = ({
  bold = false,
  headFoot = false,
  href,
  newTab = false,
  text
}) => (
  <Link headFoot={headFoot} href={href} target={newTab ? "_blank" : ""}>
    <Text
    as="span"
    fontFamily="LeagueSpartan"
    letterSpacing={headFoot ?
      ["-1px", "-1px", "-2px", "-3px"]
    :
      ["0px", "0px", "-1px", "-2px"]
    }
    fontWeight={bold ? "bold" : ""}
    textStyle={["md", "md", "xl", "2xl", "3xl"]}
  >
    {text}
  </Text>
  </Link>
);
