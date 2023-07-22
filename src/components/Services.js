import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import { BiCode } from "react-icons/bi";
import { RiComputerLine } from "react-icons/ri";
import { ImMobile } from "react-icons/im";

//import images
import img1 from "../assets/html.png";
import img2 from "../assets/CSS3_logo.svg.png";
import img3 from "../assets/JavaScript-logo.png";
import img4 from "../assets/Bootstrap_logo.svg.png";
import img5 from "../assets/Tailwind_CSS_Logo.svg.png";
import img6 from "../assets/react.png";
//import img7 from "../assets/git-logo.png";
import img8 from "../assets/mui-logo.png";
import img9 from "../assets/next-js-logo.png";
import img10 from "../assets/sass-logo.png";
const Services = () => {
  const services = [
    {
      icon: <BiCode />,
      name: "Front-End Coding",
      text: "I can create Front End for website using HTML, CSS and Vanilla Javascript. But recently im more focused on creating website using React JS.",
      sec: 0.4,
      sec1: 0.5,
      sec2: 0.6,
      sec3: 0.7,
    },
    {
      icon: <BiCode />,
      name: "Web Development",
      text: "Can create website using front end tools and currently learning API's and other Javascript programming language for backend development such as Node JS and Express JS. And Redux for State Management.",
      sec: 0.5,
      sec1: 0.6,
      sec2: 0.7,
      sec3: 0.8,
    },
    {
      icon: <RiComputerLine />,
      name: "Web Design",
      text: "Can create static design, prototype and modern design for web development in FIGMA.",
      sec: 0.6,
      sec1: 0.7,
      sec2: 0.8,
      sec3: 0.9,
    },
    {
      icon: <ImMobile />,
      name: "Responsive Design",
      text: "Capable to develop the compatibility of the website for all types of devices.",
      sec: 0.7,
      sec1: 0.8,
      sec2: 0.9,
      sec3: 1.0,
    },
  ];

  const imagesServices = [
    {
      img: img1,
      sec: 0.5,
    },
    {
      img: img2,
      sec: 0.6,
    },
    {
      img: img3,
      sec: 0.7,
    },
    {
      img: img4,
      sec: 0.8,
    },
    {
      img: img5,
      sec: 0.9,
    },
    {
      img: img10,
      sec: 1.0,
    },
    {
      img: img8,
      sec: 1.0
    },
    {
      img: img6,
      sec: 1.0,
    },
    {
      img: img9,
      sec: 1.0
    },
    // {
    //   img: img7,
    //   sec: 1.1
    // }
  ];
  return (
    <div className="lg:px-[40px] px-[15px] w-screen font-poppins" id="services">
      <motion.h2
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center lg:text-5xl text-3xl font-medium primary-color"
      >
        What I can provide?
      </motion.h2>
      <div className="lg:w-[100%] w-[90%] mx-auto">
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 md:grid-cols-2 my-10 gap-4">
          {services.map((service, index) => (
            <motion.div
              variants={fadeIn("up", service.sec)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              key={index}
              className="bg-secondary p-10 w-full text-center font-poppins"
            >
              <motion.div
                variants={fadeIn("up", service.sec1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex justify-center items-center"
              >
                <span className="text-4xl my-2">{service.icon}</span>
              </motion.div>
              <motion.h3
                variants={fadeIn("up", service.sec2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="my-4 text-3xl font-medium primary-color"
              >
                {service.name}
              </motion.h3>
              <motion.p
                variants={fadeIn("up", service.sec3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                {service.text}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="lg:w-[90%] w-full mx-auto py-10">
        <div className="grid lg:grid-cols-9 lg:gap-3 grid-cols-2 md:grid-cols-4 place-items-center">
            {
              imagesServices.map((images, index)=>(
                <motion.div
                variants={fadeIn("left", images.sec)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                key={index} className="flex justify-center items-center">
                  <img src={images.img} className="lg:w-[100px] w-[120px] h-auto"
                  alt=""/>
                </motion.div>
              ))
            }
        </div>
      </div>
    </div>
  );
};

export default Services;
