import React from "react";
import Header from "../Components/Header";
import Feature from "../Components/Feature";
import Aboutus from "../Components/Aboutus";
import Team from "../Components/Team";
import Hero from "../Components/Hero";
import Footer from "./Footer";
function HomePage() {
  return (
    <div>
      <Hero />
      <Feature />
      <Team />
      <Footer/>
    </div>
  );
}

export default HomePage;
