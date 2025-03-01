import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import styled from "styled-components";

import { CustomLink } from "../../components/custom-link";

const IntroWrapper = styled.div`
  border: 2px solid #B20085;
  border-radius: 8px;
  margin: 16px 32px;
  padding: 32px;
`;

const BoldInline = styled.span`
  fontWeight: 700;
`;

export const Intro = () => (
  <IntroWrapper>
    <Grid templateColumns="repeat(2, 1fr)" gap="8">
      <Box>
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
          Get in touch <CustomLink href="#" text="HERE" /> to find out more and book in a FREE chemistry
          call. I'd love to say hello.
        </Text>
      </Box>
      <Box>
        <Image fit="fill" margin="auto" src="https://placehold.co/400" />
      </Box>
    </Grid>
  </IntroWrapper>
);
