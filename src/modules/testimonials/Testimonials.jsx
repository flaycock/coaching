import { Box, Image, Text } from "@chakra-ui/react";

import { SectionContainer } from "../../components/section-container";
import { Testimonial } from "../../components/testimonial";

const TESTIMONIAL_DATA = [
  {
    quote: `
      Clare is the most amazing person ever I literally paid her all the money and she changed my life!
      If you haven't already spoken with her then you're a fool and waste of time!
    `,
    source: "Definitely real person"
  },
  {
    quote: `
      Coaching may sound like a cold wet Sunday afternoon on some sorry excuse for a field, but this 
      kind is much drier, warmer and more fashionable. I mean, just look at the website!
    `,
    source: "Legitimate business woman"
  },
  {
    quote: `
      I was lot but then I was found. I was blind, but then Clare helped me figure out how to deal with
      a merger.
    `,
    source: "Capatilist Faithful"
  },
  {
    quote: `
      Meow
    `,
    source: "Albert"
  }
];

export const Testimonials = () => (
  <SectionContainer heading="Testimonials">
    <Box marginY="auto">
      {TESTIMONIAL_DATA.map(({ quote, source }) => (
        <Testimonial quote={quote} source={source} />
      ))}
    </Box>
    <Box marginY="auto" maxWidth="600px">
      <Image htmlWidth="100%" src="https://placehold.co/400" />
    </Box>
  </SectionContainer>
);
