import Image from 'next/image';
import React from 'react';
import employee from '@/assets/employee.jpg'
const page = () => {
    return (
        <section className='w-[80%] lg:pt-32 pt-20 mx-auto'>
            <Image className='w-full rounded-lg ring-8' src={employee} alt='employee' width={500}/>
        </section>
    );
};

export default page;