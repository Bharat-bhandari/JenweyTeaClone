import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Partner from "./components/Partner";
import Scroll from "./components/Scroll";
import Collection from "./components/Collection";
import Journel from "./components/Journel";
import About from "./components/About";
import HeaderMain from "./components/HeaderMain";
import Test from "./components/Test";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <Main /> */}
      <HeaderMain />
      <Test />
      <Partner />
      <Scroll />
      <Collection />
      <Journel />
      <About />
    </>
  );
};

export default App;
