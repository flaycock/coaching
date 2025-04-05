import { Box, Text } from "@chakra-ui/react";

import { SECONDARY_FONT_COLOUR } from "../../constants";

export const Testimonial = ({ quote, source }) => (
  <Box marginY="16px" textAlign="center">
    <Text paddingBottom="4px" textStyle={["sm", "sm", "lg", "xl", "2xl"]}>{quote}</Text>
    <Text
      color={SECONDARY_FONT_COLOUR}
      fontStyle="italic"
      textStyle={["xs", "xs", "md", "lg"]}
    >
      - {source}
    </Text>
  </Box>
);
