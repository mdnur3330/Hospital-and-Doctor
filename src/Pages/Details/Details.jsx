import React, { useState } from "react";
import { PiTrademarkRegistered } from "react-icons/pi";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import { FiAlertTriangle } from "react-icons/fi";
import { getDoctor, setDoctor } from "../LocalStroge/LocalStroge";
import { toast, ToastContainer } from "react-toastify";


const Details = () => {
  const doctorsDetails = useLoaderData();
  const { id } = useParams();
  const singleDoctors = doctorsDetails.find(
    (doctor) => doctor.registration_number === id
  );
  
  const {
    consultation_fee,
    availability_day,
    working_at,
    registration_number,
    Available,
    education,
    name,
    image,
    speciality,
  } = singleDoctors || {};

  const navigate = useNavigate();
  const [isBooked, setBooked] = useState(false);

  const handleClick = (id) => {
    const doctors = getDoctor(); 
    const found = doctors.find((doctor) => doctor.registration_number === id);
    const alreadyBooked = !!found?.booked;
    if (!alreadyBooked) {
      
      const bookedDoctor = { ...singleDoctors, booked: true };
      setDoctor(bookedDoctor); 
      setBooked(true);
      toast.success(`Appointment scheduled for ${bookedDoctor.name} Successfully!!`)
      setTimeout(() => {
        navigate("/booking");
      }, 700);
      
    } else {
      setBooked(true);
      toast.error(`Appointment allready scheduled for ${found.name} today!`)
    }
  };
  

  if (!singleDoctors) {
    return (
      <div className="text-center space-y-3 bg-white rounded-lg py-16 px-10 mt-20">
        <h3 className="text-xl font-bold">No Doctor Found!!</h3>
        <p className="text-gray-700 ">
          No Doctor Found with this registration No-
        </p>
        <p className="flex gap-2 items-center justify-center text-xl">
          <PiTrademarkRegistered />
          {id}
        </p>

        <button>
        <Link className='btn px-3.5 bg-indigo-600 hover:bg-indigo-500 text-white' to="/">Viwe All Doctors</Link>
        </button>
      </div>
    );
  }
  return (
    <div className="space-y-4 my-10">
      <div className="text-center space-y-3 bg-white rounded-lg py-16 px-10">
        <h3 className="text-2xl font-bold">Doctor’s Profile Details</h3>
        <p className="text-gray-700">
          Explore comprehensive information about each of our doctors, including
          their qualifications, specialties, years of experience,
          certifications, and patient reviews. Get to know your healthcare
          provider before your visit to ensure you receive the care that best
          fits your needs.
        </p>
      </div>
      <div className="flex gap-10 py-7 px-10 bg-white rounded-lg">
        <div>
          <img className="w-80 h-80 rounded-lg" src={image} alt="" />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-xl text-gray-400 font-medium">{education}</p>
          <div>
            <p className="text-gray-600"> speciality</p>
            <p className="text-xl font-bold">{speciality}</p>
          </div>
          <p className="text-xl text-gray-400 font-medium mt-4">Working at</p>
          <p className="text-2xl font-medium">{working_at}</p>
          <p className="flex items-center gap-2 text-gray-400 border-t border-b border-dashed py-4 ">
            <PiTrademarkRegistered /> Reg No:{registration_number}
          </p>
          <p>
            Availability{" "}
            {availability_day.map((day) => (
              <button className="bg-yellow-300 px-3 rounded-full mr-2">
                {day}
              </button>
            ))}
          </p>
          <p className="text-2xl text-blue-700">
            Consultation Fee: {consultation_fee}{" "}
            <span className="text-gray-400">(incl. Vat)</span>{" "}
            <span> Per consultation</span>
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg py-7 px-10">
        <h3 className="text-2xl font-bold">Book an Appointment</h3>
        <div>
          <div className="flex justify-between border-t border-b border-gray-500 border-dashed my-6 py-3">
            <p>Availability</p>
            <p className="rounded-full px-2 py-1 bg-green-100 text-green-500">
              Doctor Available Today
            </p>
          </div>
          <p className="text-yellow-400 bg-yellow-100 rounded-full px-3 flex items-center gap-2">
          <FiAlertTriangle />
            Due to high patient volume, we are currently accepting appointments
            for today only. We appreciate your understanding and cooperation.
          </p>

          <button
      onClick={() => {
        handleClick(id)
      }}
      className="px-3 py-2 w-full my-5 font-medium cursor-pointer rounded-full bg-indigo-500 text-white hover:bg-indigo-400"
    >
      
      {isBooked ? "Already Booked" : "Book Appointment Now"}
    </button>
        </div>
       
       
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Details;
