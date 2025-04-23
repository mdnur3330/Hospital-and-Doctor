import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from './blog';

const Blogs = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
           {data.map((item,i) => <Blog
           key={i}
           item={item}
           ></Blog> )}
        </div>
    );
};

export default Blogs;