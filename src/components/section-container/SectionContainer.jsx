import { Grid, Heading } from "@chakra-ui/react";
import styled from "styled-components";

import { SECONDARY_BG_COLOUR, SECONDARY_FONT_COLOUR } from "../../constants";

const SectionWrapper = styled.div`
  background-color: ${SECONDARY_BG_COLOUR};
  border: 1px solid ${SECONDARY_BG_COLOUR};
  border-radius: 8px;
  margin: min(32px, 6vw);
  padding: min(32px, 6vw);
`;

export const SectionContainer = ({ children, heading, numChildren = 2 }) => (
  <SectionWrapper>
    {heading && (
      <Heading
        as="h2"
        color={SECONDARY_FONT_COLOUR}
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
