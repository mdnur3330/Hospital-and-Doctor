import React from "react";
import CountUp from "react-countup";
import TotalDoctors from "../../img/success-doctor.png";
import TotalReviews from "../../img/success-review.png";
import Patients from "../../img/success-patients.png";
import TotalStuffs from "../../img/success-staffs.png";
const Counter = () => {
  return (
    <div className="my-10 space-y-5">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-3" >We Provide Best Medical Services</h2>
        <p className="text-gray-500 mb-4">We are committed to delivering top-quality medical care with compassion, professionalism, and cutting-edge technology. Our experienced doctors and staff work round the clock to ensure every patient receives personalized attention, accurate diagnosis, and effective treatment. Your health is our priority — trust us to be your partner in wellness.</p>
      </div>
      <div className="md:flex justify-evenly space-y-3 shadow">
        <div className="bg-white rounded-lg p-10 space-y-2">
          <img src={TotalDoctors} alt="" />
          <div className="text-3xl font-bold">
            <CountUp start={1} end={234} duration={6} suffix="+" />
          </div>
          <p className="text-2xl text-gray-600">Total Doctors</p>
        </div>

        <div className="bg-white rounded-lg p-10 space-y-2">
          <div className="text-3xl font-bold">
            <img src={TotalReviews} alt="" />
            <CountUp start={10} end={354} duration={6} suffix="+" />
          </div>
          <p className="text-2xl text-gray-600">Total Reviews</p>
        </div>
        <div className="bg-white rounded-lg p-10 space-y-2">
          <img src={Patients} alt="" />
          <div className="text-3xl font-bold">
            <CountUp start={1} end={3234} duration={7} suffix="+" />
          </div>
          <p className="text-2xl text-gray-600">Patients</p>
        </div>
        <div className="bg-white rounded-lg p-10 space-y-2">
          <img src={TotalStuffs} alt="" />
          <div className="text-3xl font-bold">
            <CountUp start={1} end={114} duration={6} suffix="+" />
          </div>
          <p className="text-2xl text-gray-600">Total Stuffs</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
