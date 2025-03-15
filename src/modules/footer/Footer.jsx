import { Box, Text } from "@chakra-ui/react";
import styled from "styled-components";

import { CustomLink } from "../../components/custom-link";

const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top: 2px solid #B20085;
  padding: 16px 32px;
`;

const Spacer = styled.div`
  height: 100px;
`;

export const Footer = () => (
  <>
    <FooterWrapper data-test-id="footer">
      <Box float="left">
        <Text textStyle={["xs", "xs", "md", "lg"]}>Website By:&nbsp;
          <CustomLink
            href="https://uk.linkedin.com/in/freddie-laycock-a23974171"
            newTab={true}
            text="Freddie Laycock"
          />
        </Text>
      </Box>
      <Box float="right">
        <Text textStyle={["xs", "xs", "md", "lg"]}>
          Photos By:&nbsp;
          <CustomLink
            href="#"
            newTab={true}
            text="Photographer Name"
          />
        </Text>
      </Box>
    </FooterWrapper>
    <Spacer />
  </>
);