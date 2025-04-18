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
      paddingY="32px"
      paddingX={["75px", "120px", "150px", "200px", "250px"]}
    />
    <SectionContainer>
      <Box marginY="auto">
        <Text lineHeight="50%" textStyle={["sm", "sm", "lg", "xl", "2xl"]}>
          Market disruption, regime changes, restructures, uncertainty - the chances are these are part
          of your working life these days.
          <br /><br />
          I’ve experienced them all, and overcome them to have a long and successful media career with
          a reputation as an excellent creative leader and communicator.
          <br /><br />
          Now I use that expertise to&nbsp;
            <BoldInline>unlock transformational success</BoldInline>
          &nbsp;in others.
          <br /><br />
          Through&nbsp;
            <BoldInline>
              one-to-one coaching, group coaching and team workshops
            </BoldInline>
          &nbsp;I help executives and leaders succeed, building the courage, confidence and
          communication skills they need to survive and thrive amidst industry disruption and change.
          <br /><br />
          If you’re tired of feeling stressed, overwhelmed, stuck, fearful of the future - or if you just
          need help figuring out your next steps - I can help you.
          <br /><br />
          Get in touch <CustomLink href="#contact" text="HERE" /> to find out. I'd love to say hello.
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
