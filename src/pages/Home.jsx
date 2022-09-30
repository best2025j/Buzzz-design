import React from "react";
import Card from "../components/Card";
import Content from "../components/Content";
import Customize from "../components/Customize";
import Hero from "../components/Hero";
import Items from "../components/Items";
import Navbar from "../components/Navbar";
import Red from "../components/Red";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
      <Content />
      <Items />
      <Customize />
      <Red />
    </div>
  );
};

export default Home;
