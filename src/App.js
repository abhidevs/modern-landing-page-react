import React from "react";

import {
  Header,
  Features,
  Possibility,
  WhatGPT3,
  Blog,
  Footer,
} from "./containers";
import { Navbar, Brands, CTA } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      <Brands />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
