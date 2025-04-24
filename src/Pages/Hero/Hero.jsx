import React from "react";
import bannarImg from "../../img/banner-img-1.png";

const Hero = () => {
  return (
    <div className="hidden md:block text-center py-12 border-3 rounded-lg
     border-white bg-linear-to-t from-white to-gray-100 space-y-5 max-w-screen-3xl mx-auto px-8 md:px-12 lg:px-16 xl:px-24">
      <h1 className="text-4xl font-bold">
        Dependable Care, Backed by Trusted <br /> Professionals.
      </h1>
      <p className="text-gray-700">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a <br />
        routine checkup or urgent consultation, book appointments in minutes and
        receive quality care you can trust.
      </p>

      <div className="flex justify-center gap-2">
      <label className="input w-4/12 rounded-full">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" required placeholder="Search any doctor..." className="" />
      </label>
      <button className="rounded-full bg-indigo-500 px-4 py-2 text-white">Search Now</button>
      </div>
      <div className="flex gap-4 justify-center max-w-screen-3xl">
        <img className="max-w-[48%]" src={bannarImg} alt="bannarImg" />
        <img className="max-w-[48%]" src={bannarImg} alt="bannarImg" />
      </div>
    </div>
  );
};

export default Hero;
