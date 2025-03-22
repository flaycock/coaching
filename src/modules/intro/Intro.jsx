import { Box, Image, Text, useMediaQuery } from "@chakra-ui/react";

import { BoldInline } from "../../components/bold-inline";
import { CustomLink } from "../../components/custom-link";
import { SectionContainer } from "../../components/section-container";
import intro from "../../images/intro.jpg";

export const Intro = () => {
  const [isMobile] = useMediaQuery('(min-width: 768px)', { fallback: [false] });

  return (
    <SectionContainer>
      <Box marginY="auto" order={isMobile ? 1 : 2} >
        <Text textStyle={["xs", "xs", "md", "lg", "xl"]}>
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
      <Box border="1px solid black" borderRadius="4px" marginY="auto" order={isMobile ? 2 : 1}>
        <Image htmlWidth="100%" src={intro} />
      </Box>
    </SectionContainer>
  )
};
