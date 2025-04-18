import { Box, Text } from "@chakra-ui/react";

import { SECONDARY_FONT_COLOUR } from "../../constants";

export const Testimonial = ({ quotes, sources }) => (
  <Box marginY="16px" textAlign="center">
    {quotes.map(quote => (
      <Text
        paddingY="8px"
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
