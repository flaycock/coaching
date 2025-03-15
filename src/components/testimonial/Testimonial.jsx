import { Box, Text } from "@chakra-ui/react";

export const Testimonial = ({ quote, source }) => (
  <Box marginY="16px" textAlign="center">
    <Text paddingBottom="4px" textStyle={["sm", "md", "lg"]}>{quote}</Text>
    <Text fontStyle="italic" textStyle={["xs", "xs", "md"]}>- {source}</Text>
  </Box>
);
