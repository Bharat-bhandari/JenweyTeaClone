import React, { useState, useEffect } from "react";
import Loader from "./components/Loader"; // Import your Loader component

import Partner from "./components/Partner";
import Scroll from "./components/Scroll";
import Collection from "./components/Collection";
import Journel from "./components/Journel";
import About from "./components/About";
import HeaderMain from "./components/HeaderMain";
import Test from "./components/Test";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate some asynchronous data loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 600); // Adjust the time as per your requirement
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader /> // Render the loader if isLoading is true
      ) : (
        <>
          <HeaderMain />
          <Test />
          <Partner />
          <Scroll />
          <Collection />
          <Journel />
          <About />
        </>
      )}
    </>
  );
};

export default App;
