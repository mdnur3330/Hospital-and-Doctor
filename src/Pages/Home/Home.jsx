import React from "react";
import Hero from "../Hero/Hero";
import Doctors from "../Doctors/Doctors";
import Counter from "../Counter/Counter";

import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  
  return (
    <div>
     

      <Hero></Hero>
      <Doctors></Doctors>
      <Counter></Counter>
    </div>
  );
};

export default Home;
