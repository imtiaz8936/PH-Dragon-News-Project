import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex gap-5 items-center bg-base-200 p-4 my-8'>
            <p className='px-6 py-2 bg-secondary text-white'>Latest</p>
            <Marquee className='flex' pauseOnHover={true} speed={60}>
                <p className='font-bold text-lg mr-5 hover:text-blue-600 hover:underline cursor-pointer'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, aut. Nisi ut error sit culpa blanditiis beatae aut iusto esse doloribus a numquam voluptatum sunt odit fugiat animi, ullam accusantium?
                </p>
                <p className='font-bold text-lg mr-5 hover:text-blue-600 hover:underline cursor-pointer'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, aut. Nisi ut error sit culpa blanditiis beatae aut iusto esse doloribus a numquam voluptatum sunt odit fugiat animi, ullam accusantium?
                </p>
                <p className='font-bold text-lg mr-5 hover:text-blue-600 hover:underline cursor-pointer'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, aut. Nisi ut error sit culpa blanditiis beatae aut iusto esse doloribus a numquam voluptatum sunt odit fugiat animi, ullam accusantium?
                </p>
            </Marquee>
        </div>
    );
};

export default LatestNews;