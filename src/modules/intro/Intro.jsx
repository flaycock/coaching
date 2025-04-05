import { Box, Image, Text } from "@chakra-ui/react";

import { BoldInline } from "../../components/bold-inline";
import { CustomLink } from "../../components/custom-link";
import { SectionContainer } from "../../components/section-container";
import intro from "../../images/intro.jpg";
import logo from "../../images/logo-cropped.png";

export const Intro = () => (
  <>
    <Image
      src={logo}
      alt="Clare Laycock Coaching logo"
      margin="auto"
      paddingTop="32px"
      paddingX={["75px", "120px", "150px", "200px", "250px"]}
    />
    <SectionContainer>
      <Box marginY="auto">
        <Text lineHeight="50%" textStyle={["sm", "sm", "lg", "xl", "2xl"]}>
          Market disruption, turbulent times, regime changes, re-structures... sound familiar?
          <br /><br />
          Are you tied of feeling under threat, stressed, fearful of the future, stuck?
          <br /><br />
          I've experienced all these things and overcome themto have a long and successful media career
          with a reputation as an excellent creative leader and communicator - and now I use that
          expertise to unlock transformational success in others.
          <br /><br />
          Through 1:1 coaching and team workshops&nbsp;
            <BoldInline>
              I help executives and leaders succeed, building the courage, confidence and communication
              skills they need to survive and thrive admist industry disruption and change.
            </BoldInline>
          <br /><br />
          Get in touch <CustomLink href="#contact" text="HERE" /> to find out more and book in a FREE chemistry
          call. I'd love to say hello.
        </Text>
      </Box>
      <Box marginY="auto">
        <Image
          alt="Intro photo"
          border="1px solid #9ac6b2"
          borderRadius="12px"
          htmlWidth="100%"
          src={intro} 
        />
      </Box>
    </SectionContainer>
  </>
);
