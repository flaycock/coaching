import { Text } from "@chakra-ui/react";
import styled from "styled-components";

import { CustomLink } from "../../components/custom-link";

const FooterWrapper = styled.div`
  background-color: #c4dcd4;
  bottom: 0;
  padding: 16px 32px;
  position: absolute;
  text-align: center;
  width: 100%;
`;

export const Footer = () => (
  <FooterWrapper data-test-id="footer">
    <Text textStyle={["xs", "xs", "xs", "md"]}>Website:&nbsp;
      <CustomLink
        headFoot={true}
        href="https://uk.linkedin.com/in/freddie-laycock-a23974171"
        newTab={true}
        text="freddie laycock"
      />
    </Text>
  </FooterWrapper>
);