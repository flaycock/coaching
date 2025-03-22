import { Box, Text } from "@chakra-ui/react";
import styled from "styled-components";

import { CustomLink } from "../../components/custom-link";

const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  border-bottom: 2px solid #B20085;
  padding: 16px 32px;
`;

const Spacer = styled.div`
  height: calc(70px + min(20px, 1vw));
`;

export const Header = () => (
  <>
    <HeaderWrapper data-test-id="header">
      <Box float="left">
        <Text>
          Logo
        </Text>
      </Box>
      <Box float="right">
        <CustomLink href="#contact" text="Contact Me" />
      </Box>
    </HeaderWrapper>
    <Spacer />
  </>
);