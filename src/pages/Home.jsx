import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Services from "../components/Services";
import Expertise from "../components/Expertise";
import Newsletter from "../components/Newsletter";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <Expertise />
      <Newsletter />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
