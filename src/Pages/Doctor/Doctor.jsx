import React from "react";
import { PiTrademarkRegistered } from "react-icons/pi";
import { Link } from "react-router";


const Doctor = ({ doctor }) => {
    const {registration_number,Available,education,experience,name,image,speciality} = doctor;
  return (
    <div className="py-6 bg-white rounded-lg px-5 space-y-4 shadow">
        <img className="w-full h-70 mx-auto rounded-lg" src={image} alt="" />
        <div className="space-x-2">
            <span className="border hidden md:block rounded-full px-2 py-1 bg-green-100 text-green-500">{Available}</span>
            <span className="border rounded-full px-2 py-1 bg-indigo-100 text-indigo-500">{experience}</span>
        </div>
        <h3 className="text-2xl font-bold">{name}</h3>
        <p>speciality: {speciality}</p>
        <p className=" text-gray-700 border-b border-dashed">{education}</p>
        <p className="text-gray-600 flex gap-2 items-center"><PiTrademarkRegistered /> Reg No: {registration_number}</p>
       
        <Link to={`/details/${registration_number}`}><button className="border border-indigo-600 rounded-full font-bold hover:bg-indigo-500 hover:text-white btn w-full py-2 text-indigo-500">View Details</button></Link>
    </div>
  );
};

export default Doctor;
