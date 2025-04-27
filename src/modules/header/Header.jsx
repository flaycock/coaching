import { Box, Image } from "@chakra-ui/react";
import styled from "styled-components";

import { CustomLink } from "../../components/custom-link";
import icon from "../../images/icon.png";

const HeaderWrapper = styled.div`
  background-color: #c4dcd4;
  padding: 16px 32px;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Header = () => (
  <HeaderWrapper data-test-id="header">
    <Box float="left">
      <Image src={icon} alt="CLC icon" height="40px" marginBottom="4px" />
    </Box>
    <Box display="table" float="right" height="40px">
      <Box display="table-cell" verticalAlign="middle">
        <CustomLink bold={true} headFoot={true} href="#contact" text="contact me" />
      </Box>
    </Box>
  </HeaderWrapper>
);