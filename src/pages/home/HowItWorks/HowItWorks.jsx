import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("/features.json")
      .then(res => res.json())
      .then(data => setFeatures(data))
      .catch(err => console.error("JSON load error:", err));
  }, []);

  return (
    <div className="my-20">
      <h2 className="text-3xl font-bold mb-10 text-secondary ">
        How it Works
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: item.id * 0.1 }}
            viewport={{ once: false }}
            data-aos="zoom-in-up"
            data-aos-delay={item.id * 150}
            className="backdrop-blur-xl bg-white/20 dark:bg-black/20 
                       p-7 rounded-2xl border relative
                       transition-all duration-300 shadow-lg
                       hover:-translate-y-3 hover:shadow-2xl 
                       cursor-pointer
                       border-transparent 
                       hover:border-gradient 
                       dark:hover:border-gradient-dark"
          >
            <div className="relative z-10">
              <img src={item.icon} alt="" className="w-14 mb-4 opacity-90" />
              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>
              <p className="text-sm mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
