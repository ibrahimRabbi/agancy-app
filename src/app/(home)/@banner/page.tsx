import React from 'react';
import style from './banner.module.css'


const page = () => {
    return (
        <section className={`${style.background} min-h-full backdrop-blur-md`}>
            <div className='text-center lg:pt-16 pt-10'>
                <p className='lg:text-7xl text-2xl font-semibold'>Elevating UX </p>
                <p className='lg:text-7xl text-2xl lg:mt-3 mt-1 font-semibold'>Transformation with</p>
                <h1 className="bg-gradient-to-r from-[#5b5bf0] to-[#f1a820] inline-block text-transparent bg-clip-text lg:text-7xl text-2xl font-semibold lg:pt-4 pt-2"> Business Solutions</h1>
            </div>
            <div className='lg:w-[70%] w-[90%] mx-auto text-center mt-2 pb-10'>
                <p className='lg:text-lg text-sm'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,</p>
                <button className='bg-[#664FE9] p-2 rounded-md text-white px-4 mt-10'>contact us</button>
            </div>
        </section>
    );
};

export default page;