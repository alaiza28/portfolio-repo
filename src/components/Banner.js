import React from "react";
import Avatar from "../assets/alaiza-photo.png";
import avatarSVG from "../assets/blob-haikei (2).svg";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <div
      className=" w-screen lg:px-[150px] xl:px-[20px] sm:px-[40px] grid lg:grid-cols-2 sm:grid-cols-1 pb-14"
      id="home"
    >
      <div className="flex justify-center items-center my-14 text-center lg:ml-20 lg:text-left">
        <div className="font-poppins space-y-3 xl:space-y-2 lg:space-x-3">
          <motion.h5
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-1xl lg:text-2xl"
          >
            Hi! I'm{" "}
            <span className="primary-color font-medium">Alaiza Gondraneos</span>
          </motion.h5>
          <motion.h1
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lg:text-6xl text-4xl font-medium"
          >
            Aspiring{" "}
            <span className="primary-color font-medium">Front-End</span>{" "}
            Developer
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lg:text-[19px] text-[17px]"
          >
            I design and create a website.
          </motion.p>
          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lg:text-[20px] text-[16px]"
          >
            My motivation in life is "Every challenges I experience will leave a
            lesson in my life regardless if it's a failure or success."{" "}
          </motion.p>

          <motion.div
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lg:flex  space-x-2 "
          >
            <button className="btn primary-color rounded mt-4">
              Work with Me
            </button>
            <button className="py-[10px] px-[20px] border mt-4 rounded hover:bg-[#98dccd] duration-300 hover:border-none">
              Download Portfolio
            </button>
          </motion.div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center relative">
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="z-20"
        >
          <img
            src={Avatar}
            alt=""
            className="w-[36rem] lg:w-[25rem] h-auto block md:w-[20rem] img-banner z-20"
          />
          
           
   
            
        </motion.div>
        <motion.div variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }} className="absolute top-10 left-0 z-10">
            <img src={avatarSVG} alt="" className="z-10 w-[40rem] lg:w-full"/>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
