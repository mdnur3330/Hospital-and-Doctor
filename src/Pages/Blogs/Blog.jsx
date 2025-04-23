import React from 'react';
import { TbCalendarHeart } from "react-icons/tb";

const Blog = ({item}) => {
    return (
        <div className='bg-white rounded-lg space-y-3 p-5 my-5'>
            <h2 className='text-2xl font-bold'>{item.question}</h2>
            <p className='border-b border-t border-dashed border-gray-400 py-4'>answet: {item.answer}</p>
            <p className='flex gap-2'> <TbCalendarHeart /> Added at {item.date}</p>
        </div>
    );
};

export default Blog;