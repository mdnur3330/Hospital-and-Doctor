import React, { useEffect, useState } from "react";
import { getDoctor, removeDoctor } from "../LocalStroge/LocalStroge";
import { NavLink, useLocation } from "react-router";
import { BarChart, Bar, XAxis, YAxis, Cell, LabelList, Tooltip } from "recharts";
import { toast, ToastContainer } from "react-toastify";

const Booking = () => {
  const location = useLocation();

useEffect(() => {
  if (location.state?.showToast) {
    toast.success(`Appointment successfully booked for ${location.state.doctorName} today!`);
  }
}, [location.state]);


  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const getDoctors = getDoctor();
    setDoctors(getDoctors);
  }, []);

  const handelRemoveItem = (id) => {
    
    removeDoctor(id);
    setDoctors(getDoctor());
  };


  const colors = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff8042",
    "#a28bd4",
    "#ffbb28",
  ];

  const doctorChart = doctors.map((doctorFee) => {
    const doctor = {
      fee: parseInt(doctorFee.consultation_fee.split(" ")[0]),
      name: doctorFee.name,
      uv: 100,
      pv: 2400,
      amt: 2400,
    };
    return doctor;
  });

  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    }, ${y}
     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
     Z`;

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div>
      {doctors.length < 1 ? (
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">
            You Have not Boked any appointment yet
          </h2>
          <p className="text-gray-500">
            It looks like you haven't scheduled an appointment with us. Booking
            an appointment is quick and easy — get started today to receive
            personalized care from our medical experts. Your health journey
            begins here!
          </p>

          <NavLink to="/">
            <button className="text-white bg-indigo-600 px-3 py-1 rounded-md cursor-pointer hover:bg-indigo-500 font-medium">
              Book an Appointment
            </button>
          </NavLink>
        </div>
      ) : (
        <div>
          <div className="bg-white rounded-lg m-10 pt-10 w-full hidden md:block">
            <BarChart width={1200} height={900} data={doctorChart}>
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="fee" fill="#8884d8" shape={<TriangleBar />} >
              <Tooltip></Tooltip>
              <LabelList className="text-3xl font-bold" dataKey="fee" position="top" fill="#333" fontSize={14} offset={10} />
                {doctorChart.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </div>

          <div className="text-center space-y-4">
            <h3 className="text-3xl font-bold">My Today Appointments</h3>
            <p className="text-gray-500">
              Easily view all your scheduled doctor appointments for today in
              one place. Stay organized with details like doctor names,
              appointment times, clinic locations, and more—so you're always
              prepared and never miss a visit.
            </p>
          </div>
          {doctors.map((d) => (
            <div key={d.id} className="bg-white rounded-lg py-4 px-10 my-6">
              <h2 className="text-2xl font-bold mb-3">{d.name}</h2>
              <div className="flex justify-between border-b border-dashed border-gray-400 pb-1">
                <p>{d.education}</p>
                <p>Appointment Fee : {d.consultation_fee} + Vat</p>
              </div>
              <p>speciality: {d.speciality}</p>
              <button
            onClick={() =>{
              handelRemoveItem(d.id)
            }}
                className="w-full cursor-pointer rounded-full border border-red-400 text-red-400  py-2 font-medium hover:text-white hover:bg-red-400 my-5"
              >
                Cancel Appointment
              </button>
              
            </div>
          ))}
         
        </div>
      )}
       
       <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Booking;
