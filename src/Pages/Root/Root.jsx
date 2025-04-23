import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Component/Footer/Footer';

const Root = () => {
    return (
        <div className='bg-gray-100'>
            <Navbar></Navbar>
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