import React from "react";
import Card from "../components/Card";
import Content from "../components/Content";
import Hero from "../components/Hero";
import Items from "../components/Items";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
      <Content />
      {/* <Items /> */}
    </div>
  );
};

export default Home;
