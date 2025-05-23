import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { BoldInline } from "../../components/bold-inline";
import { CustomLink } from "../../components/custom-link";
import { SectionContainer } from "../../components/section-container";
import circles from "../../images/circles.png";
import intro from "../../images/intro-new.jpg";
import logo from "../../images/logo-new.png";


export const Intro = () => (
  <>
    <Flex float="left" position="absolute" top="0" left="0">
      <Image
      src={circles}
      alt="circles-design"
      height={["0", "225px", "275px", "325px", "400px"]}
      zIndex="3"
    />
    </Flex>
    <Flex>
      <Image
        src={logo}
        alt="Clare Laycock Coaching logo"
        margin="auto"
        paddingTop="32px"
        paddingBottom={["0", "4px", "12px", "20px", "32px"]}
        paddingX={["75px", "120px", "150px", "200px", "250px"]}
        zIndex="5"
      />
    </Flex>
    <SectionContainer>
      <Box marginY="auto">
        <Text lineHeight="50%" textStyle={["sm", "sm", "lg", "xl", "2xl"]}>
          Market disruption, regime changes, restructures, uncertainty - the chances are these are part
          of your working life these days.
          <br /><br />
          I’ve experienced them all, and overcome them to have a long and successful media career with
          a reputation as an excellent creative leader and communicator.
          <br /><br />
            <BoldInline>
              Now I use that expertise to unlock transformational success in others. Through one-to-one
              coaching, group coaching and team workshops.
            </BoldInline>
          <br /><br />
          I help executives and leaders succeed, building the courage, confidence and
          communication skills they need to survive and thrive amidst industry disruption and change.
          <br /><br />
          If you’re tired of feeling stressed, overwhelmed, stuck, fearful of the future - or if you just
          need help figuring out your next steps - I can help you.
          <br /><br />
          Get in touch <CustomLink href="#contact" text="here" /> to find out. I'd love to say hello.
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
