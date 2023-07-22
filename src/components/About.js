import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import img1 from "../assets/about/50426-removebg-preview.png";
import img2 from "../assets/about/7083598-removebg-preview.png";

const About = () => {
  return (
    <div
      className="w-screen lg:bg-[#1f1e1e] bg-none lg:px-[40px] sm:px-[60px] h-full lg:mb-[200px] py-10 rounded-md"
      id="about"
    >
      <div className="lg:flex bg-fourth flex-row lg:py-8 py-3 ">
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex-1 flex justify-center items-center "
        >
          <img src={img1} alt="" className="lg:h-[300px] h-[350px] md:h-[250px] w-auto" />
        </motion.div>
        <div className="flex-1 font-poppins mb-14 lg:mb-0 lg:mr-16 mr-0 px-8">
          <motion.h3
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-1xl font-medium lg:text-2xl text-white mb-1 sm:text-center lg:text-left"
          >
            About Me
          </motion.h3>
          <motion.h3
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lg:text-3xl text-2xl uppercase mb-3 font-medium primary-color sm:text-center lg:text-left"
          >
            Personal Details
          </motion.h3>
          <motion.h5
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-1xl mb-2 text-justify"
          >
            I am Alaiza Joy aspiring front-end developer with experience in
            building web design. Using HTML, CSS Javascript, and also their
            Frameworks and Libraries like React JS, Tailwindcss and Bootstrap. I
            am practicing my web-design using figma. I am learning other programming
            language to move forwand and to become a <span className="primary-color uppercase">web developer.</span>
          </motion.h5>
          <motion.h5
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-1xl text-justify"
          >
            I always want to improve my skills through practicing daily to
            attain my dream job which is to become a{" "}
            <span className="primary-color">FRONT-END DEVELOPER</span>. Even if
            the start is hard, giving up is never an option to me. And Hoping
            that someday my hardship will become success.{" "}
          </motion.h5>
          <motion.button
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="btn rounded mt-4"
          >
            <a href="#contact">Contact Me</a>
          </motion.button>
        </div>
      </div>

      <div className="lg:flex bg-fourth flex-row-reverse lg:flex-row lg:py-8 sm:py-3">
        <div className="flex-1 font-poppins mb-6 lg:mb-0 lg:ml-16 mr-0 px-8">
          <motion.h3
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lg:text-3xl text-2xl uppercase mb-3 font-medium primary-color sm:text-center lg:text-left"
          >
            Educational Attainment
          </motion.h3>
          <motion.h5
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-1xl mb-4 text-justify"
          >
            I studied High School in Janosa National High School with a strand
            of General Academic Strand{" "}
            <span className="primary-color">(GAS)</span>. And I am a fresh graduate in University of Rizal System{" "}
            <span className="primary-color">(URS)</span> with a course of
            Bachelor of Science in{" "}
            <span className="primary-color">Information Technology</span>. 
            Consistent Dean's Lister and <span className="primary-color">CUM LAUDE</span>.
          </motion.h5>
          <motion.h3
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lg:text-3xl text-2xl uppercase mb-3 font-medium primary-color sm:text-center lg:text-left"
          >
            Experience
          </motion.h3>
          <motion.h5
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-1xl text-justify"
          >
            My On-The-Job Training was in <span className="primary-color">Sheperds Voice Radio and Television Foundation INC.</span> in Cubao QC, wherein I become a part of
            the Web Team. Doing SEO Tags in their existing Website. I experience creating the basic interface of the task they 
            given to me, using HTML, CSS and PHP. Also, creating a new design for their Website using wireframes in Figma.
          </motion.h5>
        </div>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex-1 flex justify-center items-center lg:pb-0 pb-10"
        >
          <img src={img2} alt="" className="lg:h-[300px] h-[300px] md:h-[250px] w-auto" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
