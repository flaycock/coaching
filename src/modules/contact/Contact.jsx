import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

import { CustomLink } from "../../components/custom-link";
import { SectionContainer } from "../../components/section-container";
import contact from "../../images/contact.jpg";

export const Contact = () => (
  <Box id="contact" paddingBottom="16px">
    <SectionContainer heading="Contact Me">
      <Box marginY="auto">
        <Image border="1px solid black" borderRadius="4px" htmlWidth="100%" loading="lazy" src={contact} />
      </Box>
      <Box marginY="auto">
        <Text textStyle={["sm", "sm", "lg", "xl", "2xl"]}>
          Thanks for taking a look at my website! If you would like any more information, or would like to book
          a session, feel free to contact me via&nbsp;
          <CustomLink href="mailto:clarelaycock@blueyonder.co.uk" text="EMAIL" />
          &nbsp;or&nbsp;
          <CustomLink
            href="https://uk.linkedin.com/in/clare-laycock-2200b821"
            newTab={true}
            text="LinkedIn"
          />.
          <br />
          <br />
          Wish you all the best for whatever the future holds.
        </Text>
      </Box>
    </SectionContainer>
  </Box>
);
