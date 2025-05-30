"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const AnimatedSection = () => {
  const words = ["Energy", "Renewable", "Generation"];
  const [index, setIndex] = useState(0);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  

  return (
    <div className=" w-full h-screen  flex flex-col items-center justify-center ">
  
        
        <div className=" w-full flex-items-center gap-3 flex pl-20">
                  <h3 className="text-4xl">Renegent is</h3>
        
        
                  <span className="text-4xl">
  <AnimatePresence mode="wait">
            <motion.span
              key={words[index]}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="ml-2 text-[#1e2a52]"
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>

                  </span>
        </div>
<div className=" w-full flex flex-col items-center gap-3 justify-center">
    <h2 className="text-5xl">
    <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-xl sm:text-2xl md:text-4xl font-bold mt-6 text-[#1e2a52]"
        >
          Safe & Reliable Solar Solutions
        </motion.p>

    </h2>
<span>
  <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="text-base sm:text-lg md:text-xl mt-4 text-[#1e2a52] max-w-3xl mx-auto"
        >
          We help you save energy, money, and the environment by harnessing
          solar power.
        </motion.p>


</span>
 
</div>
 </div>

      
   
  );
};
