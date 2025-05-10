import { Grid, Heading, Image } from "@chakra-ui/react";
import styled from "styled-components";

import { SECONDARY_BG_COLOUR, TERTIARY_FONT_COLOUR } from "../../constants";
import pageBreak from "../../images/page-break.png";

const SectionWrapper = styled.div`
  background-color: ${SECONDARY_BG_COLOUR};
  border: 1px solid ${SECONDARY_BG_COLOUR};
  border-radius: 8px;
  margin: min(28px, 6vw);
`;

export const SectionContainer = ({ bottom = false, children, heading, numChildren = 2 }) => (
  <SectionWrapper>
    {heading && (
      <Heading
        as="h2"
        color={TERTIARY_FONT_COLOUR}
        paddingBottom="16px"
        size={["3xl", "4xl", "4xl", "5xl", "6xl"]}
        textAlign="center"
        fontFamily="LeagueSpartan"
        letterSpacing={["-3px", "-3px", "-4px", "-5px"]}
      >
        {heading}
      </Heading>
    )}
    <Grid
      templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", `repeat(${numChildren}, 1fr)`]}
      gap={["8", "10", "12", "14", "16"]}
      paddingX={["16px", "32px", "60px", "90px", "120px"]}
    >
      {children}
    </Grid>
    {!bottom && (
      <Image
        src={pageBreak}
        alt="section break image"
        margin="auto"
        paddingTop={["20px", "20px", "30px", "40px", "72px"]}
        paddingBottom={["0", "0", "4px", "8px", "12px"]}
        paddingX={["12px", "12px", "2px4", "36px", "48px"]}
      />
    )}
  </SectionWrapper>
);
