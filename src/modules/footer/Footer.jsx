import { Box, Text } from "@chakra-ui/react";
import styled from "styled-components";

import { CustomLink } from "../../components/custom-link";
import { SECONDARY_BG_COLOUR } from "../../constants";

const FooterWrapper = styled.div`
  background-color: #c4dcd4;
  border-bottom: 2px solid ${SECONDARY_BG_COLOUR};
  bottom: 0;
  padding: 16px 32px;
  position: absolute;
  width: 100%;
`;

const Spacer = styled.div`
  height: calc(55px + min(20px, 1vw));
`;

export const Footer = () => (
  <>
    <FooterWrapper data-test-id="footer">
      <Box float="left">
        <Text textStyle={["xs", "xs", "xs", "md"]}>Website:&nbsp;
          <CustomLink
            headFoot={true}
            href="https://uk.linkedin.com/in/freddie-laycock-a23974171"
            newTab={true}
            text="Freddie Laycock"
          />
        </Text>
      </Box>
      <Box float="right">
        <Text textStyle={["xs", "xs", "xs", "md"]}>
          Photos:&nbsp;
          <CustomLink
            headFoot={true}
            href="https://www.linkedin.com/in/jane-keating-391369139"
            newTab={true}
            text="Jane Keating"
          />
        </Text>
      </Box>
    </FooterWrapper>
    <Spacer />
  </>
);