import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

import { CustomLink } from "../../components/custom-link";
import { SectionContainer } from "../../components/section-container";
import contact from "../../images/contact.webp";
import { PRIMARY_FONT_COLOUR } from "../../constants";

export const Contact = () => (
  <Box id="contact" paddingBottom="16px">
    <SectionContainer bottom={true}>
      <Box marginY="auto">
        <Heading
          as="h2"
          color={PRIMARY_FONT_COLOUR}
          paddingBottom="16px"
          size={["3xl", "4xl", "4xl", "5xl", "6xl"]}
          textAlign="center"
          fontFamily="LeagueSpartan"
          letterSpacing={["-3px", "-3px", "-4px", "-5px"]}
        >
          contact me
        </Heading>
        <Text textStyle={["md", "md", "xl", "2xl", "3xl"]}>
          Thanks for taking a look at my website! If you would like any more information, or would like to book
          a session, feel free to contact me via&nbsp;
          <CustomLink href="mailto:clarelaycock5@gmail.com" text="EMAIL" />
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
      <Box marginY="auto">
        <Image
          alt="Contact photo"
          border="1px solid #9ac6b2"
          borderRadius="12px"
          htmlWidth="100%"
          loading="lazy"
          src={contact}
        />
      </Box>
    </SectionContainer>
  </Box>
);
