import React from "react";
import MonitorCard from "../assets/monitor-card.webp"
import { FaLongArrowAltRight } from "react-icons/fa";


const MonitorSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
                {/*Left */}
                <div className="md:w-1/2 w-full">
                    <p className="text-blue-500 font-semibold">MONITOR</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6">Introducing Best Mobile Carousels</h2>
                    <p className="text-gray-500 font-medium mb-8">Designed for a seamless and intuitive user experience, it lets you showcase diverse images, products, or important information in an interactive, easily accessible format. With a responsive design that adapts to various screen sizes and optimal loading speeds, our carousel ensures your audience gets a stunning visual experience without compromise, wherever and whenever they access it.</p>
                    <a href="#" className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all"> Learn About Monitoring
                    <FaLongArrowAltRight className="size-6" />
                    </a>
                </div>




                {/* Right */}
                <div className="md:w-1/2 w-full">
                    <img src={MonitorCard} alt="Monitor image"/>
                </div>











            </div>
        </section>
    )
}


export default MonitorSection