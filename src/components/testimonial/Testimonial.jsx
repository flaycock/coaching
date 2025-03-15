import { Box, Text } from "@chakra-ui/react";

export const Testimonial = ({ quote, source }) => (
  <Box marginY="16px" textAlign="center">
    <Text paddingBottom="4px" textStyle={["sm", "md", "lg", "xl"]}>{quote}</Text>
    <Text fontStyle="italic" textStyle={["xs", "xs", "md", "lg"]}>- {source}</Text>
  </Box>
);
