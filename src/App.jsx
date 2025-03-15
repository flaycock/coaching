import React from "react";

import { AboutMe } from "./modules/about-me";
import { Contact } from "./modules/contact";
import { Header } from "./modules/header";
import { Intro } from "./modules/intro";
import { Testimonials } from "./modules/testimonials";

const App = () => (
  <>
    <Header />
    <Intro />
    <AboutMe />
    <Testimonials />
    <Contact />
  </>
);

export default App;
