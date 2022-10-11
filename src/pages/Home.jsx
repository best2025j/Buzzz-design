import React from "react";
import BottomNav from "../components/Layout/BottomNav";
import Card from "../components/Layout/Card";
import Content from "../components/Layout/Content";
import Customize from "../components/Layout/Customize";
import Hero from "../components/Layout/Hero";
import Items from "../components/Layout/Items";
import { Navbar } from "../components/Layout/Navbar";
import Red from "../components/Layout/Red";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Card />
      <Content />
      <Items />
      <Customize />
      <Red />
      <BottomNav /> */}
    </div>
  );
};

export default Home;
