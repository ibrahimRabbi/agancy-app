import Image from 'next/image';
import style from './service.module.css'
import designImage from '@/assets/design.png'

const page = () => {
    return (
        <section className={`${style.service}`}>
            <div className='lg:w-[80%] w-[90%] mx-auto lg:py-28 py-16'>
                <h1 className="lg:text-5xl text-4xl font-semibold">Services we offer</h1>

                <div className="flex items-start justify-between lg:pt-12 pt-6 border-t-2 border-zinc-700 lg:mt-12 mt-8">

                    <div className="lg:w-[55%] w-full flex items-start gap-5">
                        <p className="text-2xl text-[#664FE9] font-bold">1</p>
                        <div className="w-[80%]">
                            <p className="text-2xl font-semibold">UI/UX Design</p>
                            <p className="mt-2">Exceptional UX isn't just design; it's a journey that builds trust, forges loyalty, and makes your brand unforgettable and this is our commitment to you from our  journey that builds trust UX design agency.</p>
                            <button className='bg-[#664FE9] p-2 rounded-md text-white px-4 mt-6'>Learn More</button>
                        </div>
                    </div>
                    <div className='hidden lg:flex'>
                      <Image src={designImage} alt='design' width={200}/>
                    </div>
                </div>



                <div className="flex items-center gap-5 lg:pt-12 pt-8 border-t-2 border-zinc-700 mt-12">
                    <p className="text-2xl text-[#664FE9] font-bold">2</p>
                    <p className="text-2xl font-semibold">Social Media Management</p>
                </div>


                <div className="flex items-center gap-5 lg:pt-12 pt-8 border-t-2 border-zinc-700 mt-12">
                    <p className="text-2xl text-[#664FE9] font-bold">3</p>
                    <p className="text-2xl font-semibold">Apps Website Development</p>
                </div>


                <div className="flex items-center gap-5 lg:pt-12 pt-8 border-t-2 border-zinc-700 mt-12">
                    <p className="text-2xl text-[#664FE9] font-bold">4</p>
                    <p className="text-2xl font-semibold">Website Design</p>
                </div>


                <div className="flex items-center gap-5 lg:pt-12 pt-8 border-t-2 border-zinc-700 mt-12">
                    <p className="text-2xl text-[#664FE9] font-bold">5</p>
                    <p className="text-2xl font-semibold">SEO Service</p>
                </div>

                <div className="flex items-center gap-5 lg:pt-12 pt-8 border-t-2 border-zinc-700 mt-12">
                    <p className="text-2xl text-[#664FE9] font-bold">6</p>
                    <p className="text-2xl font-semibold">Content Creation and Management</p>
                </div>
            </div>
            

        </section>
    );
};

export default page;