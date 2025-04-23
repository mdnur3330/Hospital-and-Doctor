import React from 'react';
import notFound from '../../img/download (1).png'
import { Link } from 'react-router';
import Navbar from '../../Component/Navbar/Navbar';
const Contact = () => {
    return (
        <div className='text-center space-y-4'>
            <Navbar></Navbar>
            <img className='mx-auto rounded-lg shadow mt-10' src={notFound} alt="" />
            <h2 className='text-2xl text-rose-600 font-bold'>404-Page Not Found</h2>
            <p>Oops! The page you're looking for dosen't extst</p>
            <Link to='/'><button className='bg-indigo-600 hover:bg-indigo-500 rounded-md px-4 py-2 cursor-pointer text-white'>Go Back Home</button></Link>
        </div>
    );
};

export default Contact;