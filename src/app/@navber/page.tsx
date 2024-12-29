import Image from "next/image";
import logo from '@/assets/logo.png'

const page = () => {
    return (
        <nav>
            <div className='lg:w-[80%] w-[90%] mx-auto flex justify-between items-center mt-6'>
                <div className='text-xl lg:text-2xl  flex justify-between'>
                    <Image src={logo} alt="logo" width={400} className="w-10"/>
                    <p className="font-semibold">Web</p> 
                    <p>Sphere</p>
                </div>

                <ul className='hidden md:flex justify-between items-center gap-9 text-[16px] font-semibold'>
                    <li>Home</li>
                    <li>about us</li>
                    <li>services</li>
                    <li>work sample</li>
                    <li>contact us</li>
                </ul>

                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 lg:hidden flex">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                    </svg>
                    <button className='p-2 px-4 text-center rounded-md border border-black font-semibold'>Hire us</button>
                </div>
                
           </div>
        </nav>
    );
};

export default page;