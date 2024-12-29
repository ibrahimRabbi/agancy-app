import Image from 'next/image';
import React from 'react';
import addidas from '@/assets/pngwing.com (1).png'
import nike from '@/assets/pngwing.com (2).png'
import google from '@/assets/pngimg.com - google_PNG19644.png'




const page = () => {
    return (
        <section className='bg-[#E8E3FF] mt-28 lg:py-4 py-2 px-4 w-full flex justify-between flex-wrap lg:flex-nowrap items-center gap-8'>
            <Image width={60} alt='addidas' src={addidas} />
            <p className='text-zinc-950 text-[18px] font-bold leading-6'>American <br /> Apparel</p>
            <Image width={60} alt='addidas' src={addidas} />
            <Image width={70} alt='addidas' src={nike} />
            <Image width={60} alt='addidas' src={addidas} />
            <p className='text-zinc-950 text-[18px] font-bold leading-6 lg:flex hidden'>American <br /> Apparel</p>
            <Image width={90} alt='addidas' src={google} />
            <p className='text-zinc-950 text-[18px] font-bold leading-6 lg:flex hidden'>American <br /> Apparel</p>
            <Image width={70} alt='addidas' className='hidden lg:flex' src={nike} />
            
        </section>
    );
};

export default page;