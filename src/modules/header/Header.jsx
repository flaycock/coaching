import { Box, Image } from "@chakra-ui/react";
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
        <Image src={icon} alt="CLC icon" height="40px" marginBottom="4px" />
      </Box>
      <Box display="table" float="right" height="40px">
        <Box display="table-cell" verticalAlign="middle">
          <CustomLink bold={true} headFoot={true} href="#contact" text="Get in touch" />
        </Box>
      </Box>
    </HeaderWrapper>
    <Spacer />
  </>
);