import { Grid, Heading } from "@chakra-ui/react";
import styled from "styled-components";

const SectionWrapper = styled.div`
  border: 2px solid #B20085;
  border-radius: 8px;
  margin: min(32px, 6vw);
  padding: min(32px, 6vw);
`;

export const SectionContainer = ({ children, heading, numChildren = 2 }) => (
  <SectionWrapper>
    {heading && (
      <Heading
        as="h2"
        paddingBottom="16px"
        size={["2xl", "2xl", "3xl", "4xl", "5xl"]}
        textAlign="center"
      >
        {heading}
      </Heading>
    )}
    <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", `repeat(${numChildren}, 1fr)`]} gap="8">
      {children}
    </Grid>
  </SectionWrapper>
);
