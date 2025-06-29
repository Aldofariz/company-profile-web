import React from "react";
import scheduleimage from "../assets/stats.webp"
import { FaLongArrowAltRight } from "react-icons/fa";

const ScheduleSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
                {/* left */}
                <div className="md:w-1/2 w-full">
                    <img src={scheduleimage} alt="schedule image" className="w-full h-auto"/>
                </div>




                {/*  right   */}
                <div className="md:w-1/2 w-full">
                    <p className="text-orange-500 font-semibold">SCHEDULE</p>
                    <h2 className="font-bold text-3xl md:text-4xl text-neutral-900 mt-4 mb-6">Streamline Your Business With <br/> Smart Schedulling Solution</h2>
                    <p className="text-gray-500 font-medium mb-8">Take control of your time and boost productivity with our intelligient schedulling system. Automate appointment, manage team availablity, and deliver exceptional customer experience through seamless calendar management</p>
                    <a href="#" className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all">Explore Schedulling Feature
                        <FaLongArrowAltRight className="size-6" />
                    </a>
                </div>


            </div>
        </section>









    )
}








export default ScheduleSection