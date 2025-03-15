import { Box, Image, Text } from "@chakra-ui/react";

import { BoldInline } from "../../components/bold-inline";
import { SectionContainer } from "../../components/section-container";

export const AboutMe = () => (
  <SectionContainer heading="About Me">
    <Box marginY="auto">
      <Image htmlWidth="100%" src="https://placehold.co/400" />
    </Box>
    <Box marginY="auto">
      <Text textStyle={["xs", "xs", "md", "lg", "xl"]}>
        Hello. What drives you?
        <br /><br />
        For me it's to be excited by life and to have fun - but also to share expertise and inspire others -
        which is why I launched Clare Laycock Coaching.
        <br />
        <br />
        I spent 30+ years in global media companies, leading creative and content teams through an ever-changing
        media landscape, including&nbsp;
        <BoldInline>
          Discovery, the BBC, UKTV and Warner Bros. Discovery
        </BoldInline>
        . I've been through the reorganisations, the mergers, the regime-changes; I've learnt how to flex,
        adapt and thrive through change, knowing when and what to fight for, and getting comfortable with
        risk and failure and building dream teams with a core mission. And I've had a great time doing it.
        <br />
        <br />
        Now, as a qualified coach and member of the&nbsp;
        <BoldInline>
          International Coaching Federation
        </BoldInline>
        , I work with executives and teams to unlock transformational thinking that enables them to move 
        forwards in successful careers that fulfil their potential and bring them joy.
        <br />
        <br />
        But enough about me - what about you? Get in touch, it'd be great to meet you.
      </Text>
    </Box>
  </SectionContainer>
);

