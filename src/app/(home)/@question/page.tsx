'use client'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import style from './question.module.css'
import { useState } from "react";





function AccordionDemo() {
     
    const [openItem, setOpenItem] = useState('item-1');



    return (
        <section className={`${style.question} lg:pt-28 pt-12`}>
            <div className="lg:w-[60%] w-[90%] mx-auto">
                <div className="lg:w-[60%] mx-auto">
                    <h1 className="lg:text-5xl text-4xl text-center font-semibold">Have Questions?</h1>
                    <p className="text-center mt-2">Stay informed and inspired by joining our newsletter! Sign up today to receive the latest updates, exclusive content, and special offers straight to your inbox.</p>
                </div>
                <Accordion type="single" value={openItem} onValueChange={setOpenItem} collapsible className="w-full lg:mt-16 mt-10 space-y-7">
                    <AccordionItem className="border-0 bg-white shadow-lg px-5 py-1 rounded-lg" value="item-1">
                        <AccordionTrigger className="text-xl font-semibold">Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                            An electric car is a vehicle powered by an electric motor instead of a traditional internal and best combustion engine. It uses electricity stored in batteries to drive the motor, producing zero emissions and offering a quieter, more efficient ride.
                        </AccordionContent>
                    </AccordionItem>
                    


                    <AccordionItem className="border-0 bg-white shadow-lg px-5 py-1 rounded-lg" value="item-2">
                        <AccordionTrigger className="text-xl font-semibold">How Do I Charge an Electric Car?</AccordionTrigger>
                        <AccordionContent>
                            An electric car is a vehicle powered by an electric motor instead of a traditional internal and best combustion engine. It uses electricity stored in batteries to drive the motor, producing zero emissions and offering a quieter, more efficient ride.
                        </AccordionContent>
                    </AccordionItem>




                    <AccordionItem className="border-0 bg-white shadow-lg px-5 py-1 rounded-lg" value="item-3">
                        <AccordionTrigger className="text-xl font-semibold">What is the Range of an Electric Car?</AccordionTrigger>
                        <AccordionContent>
                            An electric car is a vehicle powered by an electric motor instead of a traditional internal and best combustion engine. It uses electricity stored in batteries to drive the motor, producing zero emissions and offering a quieter, more efficient ride.
                        </AccordionContent>
                    </AccordionItem>



                    <AccordionItem className="border-0 bg-white shadow-lg px-5 py-1 rounded-lg" value="item-4">
                        <AccordionTrigger className="text-xl font-semibold">What Maintenance Do Electric Cars Require?</AccordionTrigger>
                        <AccordionContent>
                            An electric car is a vehicle powered by an electric motor instead of a traditional internal and best combustion engine. It uses electricity stored in batteries to drive the motor, producing zero emissions and offering a quieter, more efficient ride.
                        </AccordionContent>
                    </AccordionItem>



                    <AccordionItem className="border-0 bg-white shadow-lg px-5 py-1 rounded-lg" value="item-5">
                        <AccordionTrigger className="text-xl font-semibold">How Long Do Electric Car Batteries Last?</AccordionTrigger>
                        <AccordionContent>
                            An electric car is a vehicle powered by an electric motor instead of a traditional internal and best combustion engine. It uses electricity stored in batteries to drive the motor, producing zero emissions and offering a quieter, more efficient ride.
                        </AccordionContent>
                    </AccordionItem>



                    <AccordionItem className="border bg-white shadow-lg px-5 py-1 rounded-lg" value="item-6">
                        <AccordionTrigger className="text-xl font-semibold">Can I Take Long Trips in an Electric Car?</AccordionTrigger>
                        <AccordionContent>
                            An electric car is a vehicle powered by an electric motor instead of a traditional internal and best combustion engine. It uses electricity stored in batteries to drive the motor, producing zero emissions and offering a quieter, more efficient ride.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
           </div>
        </section>
    )
}


export default AccordionDemo
