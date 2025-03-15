import styled from "styled-components";
import { Text } from "@chakra-ui/react"

const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #B20085
  }
`;

export const CustomLink = ({ href, newTab = false, text}) => (
  <Link href={href} target={newTab ? "_blank" : ""}>
    <Text as="span" textStyle={["xs", "xs", "sm", "md"]}>{text}</Text>
  </Link>
);
