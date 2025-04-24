import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from './Blog';

const Blogs = () => {
    const data = useLoaderData()
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