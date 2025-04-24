import React, { useEffect, useState } from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../../Component/Footer/Footer';

const Root = () => {
    const location = useLocation()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => {
          setLoading(false);
        }, 500); 
      
        return () => clearTimeout(timeout);
      }, [location.pathname]);
      

    return (
        <div className='bg-gray-100'>


            <Navbar></Navbar>

            {loading && (
        <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-60 z-50 flex items-center justify-center">
          <span className="loading loading-spinner loading-lg text-indigo-600"></span>
          <span className="loading loading-spinner loading-lg text-indigo-600"></span>
          <span className="loading loading-spinner loading-lg text-indigo-600"></span>
        </div>
      )}
            <div className='min-h-[calc(100vh-150px)]'>
            <div className='max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16 xl:px-24'>
                <Outlet></Outlet>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;