/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

import { motion } from "framer-motion";

const OurServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="py-20 bg-secondary rounded-3xl mt-30">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
        <p className="text-gray-200 max-w-2xl mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {services.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: item.id * 0.1 }}
            viewport={{ once: false }}
            className="
                group p-8 rounded-2xl 
                bg-white dark:bg-black/30 
                backdrop-blur-xl 
                border border-white/20 dark:border-white/10 
                shadow-xl 
                transition-all duration-300 cursor-pointer

                hover:-translate-y-3 
                hover:shadow-2xl 
                hover:bg-primary 
                hover:border-transparent
  "
          >
            <div className="flex justify-center mb-4">
              <img src={item.icon} alt="" className="w-16" />
            </div>

            <h3
              className="
                text-lg font-semibold text-center 
                text-[#03343F] dark:text-white 
                group-hover:text-black "
            >
              {item.title}
            </h3>

            <p
              className="
                    text-sm text-center mt-3 leading-relaxed 
                    text-gray-600 dark:text-gray-300 
                    group-hover:text-black/80"
            >
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
