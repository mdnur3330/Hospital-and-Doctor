import {toast} from "react-toastify"
export const getDoctor = () => {
  const doctor = localStorage.getItem("doctor");
  if (doctor) {
    return JSON.parse(doctor);
  } else {
    return [];
  }
};

export const setDoctor = (doctor) => {
  const doctorItem = getDoctor();
  const isExist = doctorItem.find((d) => d.id === doctor.id);
  if (isExist) {
    return 
  } else {
    doctorItem.push(doctor)
    localStorage.setItem("doctor", JSON.stringify(doctorItem));
  }
};

export const removeDoctor = (id) => {
    const remove = getDoctor()
    const remainingDoctors = remove.filter(doctor => doctor.id !== id)
    toast.error('Appointment scheduled cancel')
    localStorage.setItem("doctor", JSON.stringify(remainingDoctors))
};
