import styled from "styled-components";

const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #B20085
  }
`;

export const CustomLink = ({ href, text}) => (
  <Link href={href}>
    {text}
  </Link>
);
