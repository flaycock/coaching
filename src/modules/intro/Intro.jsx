import { Box, Image, Text } from "@chakra-ui/react";

import { BoldInline } from "../../components/bold-inline";
import { CustomLink } from "../../components/custom-link";
import { SectionContainer } from "../../components/section-container";

export const Intro = () => (
  <SectionContainer>
    <Box marginY="auto">
      <Text textStyle="xs">
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
      <Image htmlWidth="100%" src="https://placehold.co/400" />
    </Box>
  </SectionContainer>
);
