import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import img1 from "../assets/notes.png";
import img2 from "../assets/fb.png";
import img3 from "../assets/website.png";
import img4 from "../assets/UsAppAdmin.png";
import img5 from "../assets/white.png"
import img6 from "../assets/ig-clone.png"

const Work = () => {
  const works = [
    {
      images: img1,
      title: "React Notes",
      sec: 0.4,
    },
    {
      images: img2,
      title: "Facebook Clone",
      sec: 0.6,
    },
    {
      images: img3,
      title: "Foodskie Website",
      sec: 0.7,
    },
    {
      images: img4,
      title: "UsApp Admin Dashboard",
      sec: 0.9,
    },
    {
      images: img5,
      title: "Instruments Shop",
      sec: 1.0,
    },
    {
      images: img6,
      title: "Instagram Clone",
      sec: 1.2
    }
  ];

  return (
    <div className="bg-other section-p py-20" id="work">
      <div className="lg:w-[85%] sm:w-[80%] mx-auto">
        <motion.h2
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center lg:text-5xl text-3xl font-medium mb-10 font-poppins primary-color"
        >
          My Latest Work
        </motion.h2>
        <motion.p
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center lg:text-[20px] sm:text-[17px] font-poppins mb-6"
        >
          Here are the list of my recent created projects. Please do note that most of these are created for front-end.
        </motion.p>

        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6">
          {works.map((work, index) => (
            <motion.div
              variants={fadeIn("right", work.sec)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              key={index}
              className="group relative overflow-hidden border-2 border-white/50 rounded-x1 cursor-pointer"
            >
              {/** overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/** img */}
              <img
                src={work.images}
                className="group-hover:scale-125 transition-all duration-300 lg:h-[210px] h-[220px] md:h-[180px] w-auto"
                alt=""
              />
              {/** pre-title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                <span className="text-2xl font-medium font-poppins">
                  {work.title}
                </span>
              </div>
              {/** title */}
              {/*<div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700 z-50">
                    <span className="text-3xl text-white">Project Title</span>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
