import { Box, Image, Text } from "@chakra-ui/react";
import styled from "styled-components";

import { CustomLink } from "../../components/custom-link";
import { SECONDARY_BG_COLOUR } from "../../constants";
import icon from "../../images/icon.png";

const HeaderWrapper = styled.div`
  background-color: #c4dcd4;
  border-bottom: 2px solid ${SECONDARY_BG_COLOUR};
  padding: 16px 32px;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Spacer = styled.div`
  height: calc(70px + min(20px, 1vw));
`;

export const Header = () => (
  <>
    <HeaderWrapper data-test-id="header">
      <Box float="left">
        <Image src={icon} alt="CLC icon" height="40px" />
      </Box>
      <Box float="right">
        <CustomLink headFoot={true} href="#contact" text="Get in touch" />
      </Box>
    </HeaderWrapper>
    <Spacer />
  </>
);