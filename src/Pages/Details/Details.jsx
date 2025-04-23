import React, { useState } from 'react';
import { PiTrademarkRegistered } from 'react-icons/pi';
import { Link, useLoaderData, useParams } from 'react-router';
import { FiAlertCircle } from "react-icons/fi";
import { setDoctor } from '../LocalStroge/LocalStroge';
import { ToastContainer } from 'react-toastify';


const Details = () => {
    const [isBooked, setBooked] = useState(true)
    const handelIsBooked = (data)=>{
        setBooked(data)
        console.log(data);
    }


    const doctorsDetails = useLoaderData()
    const {id} = useParams()
    const singleDoctors = doctorsDetails.find(doctor => doctor.registration_number === id)
    const {consultation_fee, availability_day, working_at,registration_number,Available,education,name,image,speciality} = singleDoctors || {}
    if(!singleDoctors){
        return <div className='text-center space-y-3 bg-white rounded-lg py-16 px-10 mt-20'>
        <h3 className='text-xl font-bold'>No Doctor Found!!</h3>
        <p className="text-gray-700 ">No Doctor Found with this registration No-</p>
        <p className='flex gap-2 items-center justify-center text-xl'><PiTrademarkRegistered />{id}</p>
    </div>

      
    }
    return (
        <div className='space-y-4 my-10'>
            <div className='text-center space-y-3 bg-white rounded-lg py-16 px-10'>
                <h3 className='text-2xl font-bold'>Doctor’s Profile Details</h3>
                <p className="text-gray-700">Explore comprehensive information about each of our doctors, including their qualifications, specialties, years of experience, certifications, and patient reviews. Get to know your healthcare provider before your visit to ensure you receive the care that best fits your needs.</p>
            </div>
            <div className='flex gap-10 py-7 px-10 bg-white rounded-lg'>
            <div><img className='w-80 h-80 rounded-lg' src={image} alt="" /></div>
            <div className='space-y-4'>
                <h2 className='text-2xl font-bold'>{name}</h2>
                <p className='text-xl text-gray-400 font-medium'>{education}</p>
                <div>
                <p className='text-gray-600'> speciality</p>
                <p className='text-xl font-bold'>{speciality}</p>
                </div>
                <p className='text-xl text-gray-400 font-medium mt-4'>Working at</p>
                <p className='text-2xl font-medium'>{working_at}</p>
                <p className='flex items-center gap-2 text-gray-400 border-t border-b border-dashed py-4 '><PiTrademarkRegistered /> Reg No:{registration_number}</p>
                <p>Availability {availability_day.map(day => <button className='border bg-gray-100 px-1 rounded-full mr-2'>{day}</button>)}</p>
                <p className='text-2xl text-blue-700'>Consultation Fee: {consultation_fee} <span className='text-gray-400'>(incl. Vat)</span> <span> Per consultation</span></p>
            </div>
            </div>
            <div className='bg-white rounded-lg py-7 px-10'>
                <h3 className='text-2xl font-bold'>Book an Appointment</h3>
                <div>
                <div className='flex justify-between border-t border-b border-gray-500 border-dashed my-6 py-3'>
                <p>Availability</p>
                <p className="rounded-full px-2 py-1 bg-green-100 text-green-500">Doctor Available Today</p>
                </div>
                <p className='text-red-600 bg-fuchsia-200 rounded-full px-3 flex items-center gap-2'><FiAlertCircle />
                 Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>

                 
                 <button onClick={()=> setDoctor(singleDoctors, handelIsBooked)} className="px-3 py-2 w-full my-5 font-medium cursor-pointer rounded-full bg-indigo-500 text-white hover:bg-indigo-400">{isBooked ? <Link to='/booking'>Book Appointment Now </Link> : <Link to={`/details/${id}`}>Appointment has been booked </Link>}</button>


                 
                </div>
                <ToastContainer position="top-right" autoClose={3000} />
            </div>
        </div>
    );
};

export default Details;