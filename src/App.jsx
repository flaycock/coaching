import React from "react";
import styled from "styled-components";

import { AboutMe } from "./modules/about-me";
import { Contact } from "./modules/contact";
import { Footer } from "./modules/footer";
import { Header } from "./modules/header";
import { Intro } from "./modules/intro";
import { Testimonials } from "./modules/testimonials";

const Spacer = styled.div`
  height: calc(70px + min(20px, 1vw));
`;

const App = () => (
  <>
    <Header />
    <Spacer />
    <Intro />
    <AboutMe />
    <Testimonials />
    <Contact />
    <Footer />
    <Spacer />
  </>
);

export default App;
