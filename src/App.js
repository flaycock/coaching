import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import styled from "styled-components";

const Background = styled.div`
  background-color: aliceblue;
  border: 1px solid aliceblue;
  border-radius: 12px;
  margin: 32px 0;
  text-align: center;
`;

const App = () => (
  <Background>
    <Heading color="black" size="xl">Clare Laycock Coaching</Heading>
    <Heading color="gray" size="md">Coming soon...</Heading>
  </Background>
);

export default App;
