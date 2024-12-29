import Image from 'next/image';
import style from './contact.module.css'
import person from '@/assets/person.png'
import { BiSolidPhoneCall } from 'react-icons/bi';


export default function ContactSection() {
    return (
        <section className={`lg:grid ${style.contactLayout} gap-12 lg:py-28 py-16 lg:space-y-0 space-y-8 lg:w-[80%] w-[90%] mx-auto`}>
            {/* Left Section */}
            <div className="flex-1 border-1 bg-[#664FE9] text-white p-6 rounded-lg shadow-md w-full">
                <h2 className="text-lg font-semibold mb-2">Got a project in mind?</h2>
                <h1 className="text-3xl lg:text-4xl font-bold mb-4">Let’s discuss the details</h1>
                <button className="bg-black text-white py-2 px-4 mt-10 rounded-lg shadow hover:bg-gray-800 transition">
                    Contact Us
                </button>
            </div>

            {/* Right Section */}
            <div className="flex-1 bg-black text-white p-6 rounded-lg shadow-md text-center lg:text-left ">
                
                <Image
                    className='lg:flex block mx-auto lg:mx-0'
                        src={person}
                        alt="Profile"
                        width={50}
                    />
                
                <p className="my-4">
                    Stay informed and inspired by joining our newsletter! Sign up today
                    to receive UX design tips.
                </p>
                <button className="bg-[#664FE9] mt-7 text-xs text-white py-2 px-4 shadow hover:bg-[#5d43ec] transition gap-2 rounded-2xl flex justify-center items-center mx-auto lg:mx-0">
                    Ask Questions
                    <BiSolidPhoneCall className='bg-white p-1 size-7 text-black rounded-full' />
                </button>
            </div>
        </section>
    );
}
