import Image from 'next/image';
import React from 'react';
import aboutImage from '@/assets/clipping-clan-team-work-station.jpg'
import style from './about.module.css'


const page = () => {
    return (
        <section className={`${style.abBackGround} lg:pt-28 pt-16`}>
            
            <div className={`lg:w-[80%] w-[90%] mx-auto lg:flex justify-between items-center`}>
                <div className='lg:w-[58%] w-full'>
                    <h1 className='lg:text-5xl text-4xl font-semibold'>Websphere Tech About Us</h1>
                    <p className='w-[92%] mt-5 text-lg leading-6'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,</p>
                    <button className='bg-[#664FE9] p-2 rounded-md text-white px-4 mt-10'>Learn More</button>
                </div>
                <div className='mt-5 lg:mt-5'>
                    <Image src={aboutImage} alt='hello' width={350} className='rounded-lg ring-4' />
                </div>
           </div>
            

            
        </section>
    );
};

export default page;