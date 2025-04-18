import { Box, Text } from "@chakra-ui/react";

import { SECONDARY_FONT_COLOUR } from "../../constants";

export const Testimonial = ({ quotes, sources }) => (
  <Box marginTop="16px" textAlign="center">
    {quotes.map((quote, index) => (
      <Text
        paddingBottom="8px"
        paddingTop={index === 0 ? "0" : "8px"}
        textStyle={["sm", "sm", "lg", "xl", "2xl"]}
      >
        {quote}
      </Text>
    ))}
    {sources.map(source => (
    <Text
      color={SECONDARY_FONT_COLOUR}
      fontStyle="italic"
      textStyle={["xs", "xs", "md", "lg"]}
    >
      {source}
    </Text>
    ))}
  </Box>
);
