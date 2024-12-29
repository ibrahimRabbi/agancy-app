'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import style from './work.module.css'
import { FaArrowRight } from 'react-icons/fa6';





const page = () => {

    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
        .then(res=>setData(res))
    },[])



    return (
        <section className={`${style.work}`}>
            <div className='lg:w-[80%] w-[90%] mx-auto'>
                <div className='flex justify-between flex-col lg:flex-row items-end'>
                    <div className='lg:w-[52%] w-full'>
                        <h1 className='text-4xl font-semibold'>Work Samples</h1>
                        <p className='mt-4'>Exceptional UX isn't just design; it's a journey that builds trust, forges loyalty, and makes your brand unforgettable and this is our commitment to you from our  journey that builds trust UX design agency.</p>
                    </div>
                    <div>
                        <p></p>
                        <button className='bg-[#664FE9] p-2 rounded-md text-white px-4 mt-6'>view All</button>
                    </div>

                </div>

                <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-12 gap-6 lg:mt-20 mt-10'>
                    {
                        data.map((value: any, index: number) => {
                            return (
                                <div key={index} className='bg-white rounded-md p-5 shadow-lg'>
                                    <Image className='rounded-md w-full' src={value.image} alt='image' width={200} height={200} />
                                    <div className='flex justify-between items-center mt-4'>
                                        <p className='text-lg font-semibold'>{value.title}</p>
                                            <FaArrowRight className='bg-[#664FE9] text-white size-8 p-2 rounded-full' /> 
                                    </div>
                                    <p className='mt-4'>{value.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
           


            

        </section>
    );
};

export default page;