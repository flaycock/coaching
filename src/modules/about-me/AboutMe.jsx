import { Box, Image, Text } from "@chakra-ui/react";

import { BoldInline } from "../../components/bold-inline";
import { CustomLink } from "../../components/custom-link";
import { SectionContainer } from "../../components/section-container";

export const AboutMe = () => (
  <SectionContainer heading="about me" numChildren={1}>
    <Box marginY="auto">
      <Text textStyle={["sm", "sm", "lg", "xl", "2xl"]}>
        What gets you out of bed in the morning ?
        <br /><br />
        For me it’s to be excited by life and to have fun - but also to&nbsp;
          <BoldInline>share expertise and inspire others</BoldInline>
        &nbsp;- which is why I launched Clare Laycock Coaching.
        <br />
        <br />
        I’ve spent 30+ years in global media companies, leading creative, commissioning and content
        teams through an ever-changing media landscape.  I’ve held senior roles at Discovery, the BBC,
        UKTV and Warner Brothers Discovery.  You can read more in my bio&nbsp;
          <CustomLink>HERE</CustomLink>.
        <br /><br />
        I’ve been through reorganisations, mergers and regime-changes.
        I’ve learnt how to flex, adapt and thrive through change - understanding when and what
        to fight for and getting comfortable with risk and the possibility of failure. I’ve built and
        led dream-teams working to a core mission.  And I’ve had a great time doing it.
        <br />
        <br />
        Now, as a&nbsp;
          <BoldInline>qualified business and personal coach</BoldInline>
        &nbsp;and a member of the International Coaching Federation, I work with executives and teams
        to unlock transformational thinking that enables them to move forwards in
          <BoldInline>successful careers that fulfil their potential</BoldInline>
        &nbsp;and, most importantly,
          <BoldInline>bring them joy</BoldInline>.
        <br />
        <br />
        But enough about me - what about you? Get in touch, it'd be great to meet you.
      </Text>
    </Box>
  </SectionContainer>
);

