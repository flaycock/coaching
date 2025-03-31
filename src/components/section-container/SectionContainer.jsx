import { Grid, Heading, Image } from "@chakra-ui/react";
import styled from "styled-components";

import { SECONDARY_BG_COLOUR, SECONDARY_FONT_COLOUR } from "../../constants";
import pageBreak from "../../images/page-break.png";

const SectionWrapper = styled.div`
  background-color: ${SECONDARY_BG_COLOUR};
  border: 1px solid ${SECONDARY_BG_COLOUR};
  border-radius: 8px;
  margin: min(32px, 6vw);
  padding: 0 60px;
`;

export const SectionContainer = ({ bottom = false, children, heading, numChildren = 2 }) => (
  <SectionWrapper>
    {heading && (
      <Heading
        as="h2"
        color="#735240"
        paddingBottom="16px"
        size={["2xl", "2xl", "3xl", "4xl", "5xl"]}
        textAlign="center"
      >
        {heading}
      </Heading>
    )}
    <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", `repeat(${numChildren}, 1fr)`]} gap="16">
      {children}
    </Grid>
    {!bottom && (
      <Image
        src={pageBreak}
        margin="auto"
        paddingTop={["8", "8", "16", "32", "48"]}
        paddingBottom={["4", "4", "8", "16", "24"]}
        paddingX={["12", "12", "24", "36", "48"]}
      />
    )}
  </SectionWrapper>
);
