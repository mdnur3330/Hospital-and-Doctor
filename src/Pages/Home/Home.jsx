import React from "react";
import Hero from "../Hero/Hero";
import Doctors from "../Doctors/Doctors";
import Counter from "../Counter/Counter";
import { useNavigation } from "react-router";
import { ToastContainer } from "react-toastify/unstyled";

const Home = () => {
  const navigation = useNavigation();
  return (
    <div>
      {navigation.state === "loading" && (
        <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-60 z-50 flex items-center justify-center">
          <span className="loading loading-spinner loading-lg text-indigo-600"></span>
          <span className="loading loading-spinner loading-lg text-indigo-600"></span>
          <span className="loading loading-spinner loading-lg text-indigo-600"></span>
        </div>
      )}

      <Hero></Hero>
      <Doctors></Doctors>
      <Counter></Counter>
    </div>
  );
};

export default Home;
