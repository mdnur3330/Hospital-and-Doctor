import React, { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";
import { useLoaderData } from "react-router";

const Doctors = () => {
  const doctorsData = useLoaderData();
  const [doctors, setDoctors] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    if (showAll) {
      setDoctors(doctorsData);
    } else {
      setDoctors(doctorsData.slice(0, 6));
    }
  }, [doctorsData, showAll]);
  return (
    <div>
      <div className=" text-center py-7 space-y-2">
        <h1 className="text-3xl font-bold">Our Best Doctors</h1>
        <p className="text-gray-600">
          Meet our team of highly skilled and compassionate medical
          professionals, each dedicated to providing the highest quality of
          care. With years of experience, specialized expertise, and a
          patient-first approach, our doctors are here to guide you on your
          journey to better health.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 py-20">
      {doctors.map((doctor) => (
        <Doctor key={doctor.id} doctor={doctor}></Doctor>
      ))}

      </div>
      <div className="text-center">
        <button
          onClick={() => {
            setShowAll((prv) => !prv);
            if (showAll) {
              window.scrollTo({ top: 100, behavior: "smooth" });
            }
          }}
          className="px-3 py-2 mx-auto rounded-full bg-indigo-600 hover:bg-indigo-500 cursor-pointer text-white"
        >
          {showAll ? " Show Less" : "View All Doctors"}
        </button>
      </div>
    </div>
  );
};

export default Doctors;
