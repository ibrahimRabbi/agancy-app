import { FaBehance, FaStar } from "react-icons/fa6"
import { SlBadge } from "react-icons/sl";

const page = () => {
    return (
        <section className='grid lg:grid-cols-3 grid-cols-1 gap-5 w-[80%] mx-auto lg:mt-20 mt-12'>
            <div className='bg-[#E8E3FF] text-center pt-10 pb-12 rounded-md'>
                <p className=' '>
                    <FaBehance className='size-12 mx-auto bg-[#664FE9] p-2 text-2xl rounded-md text-white'/>
                </p>
                <p className='mt-5 font-semibold'>Featured on Behance</p>
            </div>

            <div className='bg-[#E3FFF5] text-center p-8 rounded-md'>
                <FaStar className="size-12 text-white bg-[#17A471] p-2 text-center mx-auto block rounded-md" />
                <p className='mt-4 font-semibold'>5 Star Review on Clutch</p>
            </div>

            <div className='bg-[#FFE6E4] text-center p-8 rounded-md'>
                <SlBadge className="size-12 text-white bg-[#D35146] p-2 text-center mx-auto block rounded-md" />
                <p className='mt-4 font-semibold'>Awarded by The Manifest</p>
            </div>
        </section>
    );
};

export default page;