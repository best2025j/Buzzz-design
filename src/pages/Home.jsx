import React from "react";
import Card from "../components/Card";
import Content from "../components/Content";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
      <Content />
    </div>
  );
};

export default Home;
