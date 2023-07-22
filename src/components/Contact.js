import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

//import icons
import { HiLocationMarker } from "react-icons/hi";
import { GrMail } from "react-icons/gr";

const Contact = () => {
  return (
    <div
      className="lg:px-[40px] px-[15px] w-screen py-14 font-poppins"
      id="contact"
    >
      <motion.h2
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center lg:text-5xl text-3xl font-medium mb-6 font-poppins primary-color"
      >
        Contact Me
      </motion.h2>
      <motion.p
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="lg:w-[30%] w-[90%] mx-auto text-center text-1xl"
      ></motion.p>
      <div className="w-[80%] mx-auto my-16 lg:flex flex-row">
        {/** left */}
        <div className="space-y-10 mr-10 mb-10">
          <motion.div
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex items-center"
          >
            <GrMail className="text-2xl primary-color mr-6" />

            <div className="space-y-2">
              <h5 className="text-[20px] text-white">Have a question?</h5>
              <h5 className="text-gray-400">I am here to help you</h5>
              <p className="primary-color">
                Email me at gondraneosalaiza@gmail.com
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("right", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex items-center lg:mb-0 mb-4"
          >
            <HiLocationMarker className="text-2xl primary-color mr-6" />

            <div className="space-y-2">
              <h5 className="text-[20px] text-white">Curret Location</h5>
              <h5 className="text-gray-400">Tayuman, Binangonan Rizal</h5>
              <p className="primary-color">Serving clients worldwide</p>
            </div>
          </motion.div>
        </div>
        {/** Right */}
        <form className="space-y-8 w-full max-w-[780px]">
          <div className="lg:flex sm:flex-row gap-8">
            <motion.input
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              type="text"
              className="p-4 mb-6 lg:mb-0 flex-1 w-full text-black"
              placeholder="Your Name"
            />
            <motion.input
              variants={fadeIn("left", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              type="email"
              className="p-4 flex-1 w-full text-black"
              placeholder="Your Email"
            />
          </div>
          <motion.input
            variants={fadeIn("left", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            type="text"
            className="w-full p-4 text-black"
            placeholder="Subject"
          />
          <motion.textarea
            variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="resize-none w-full outline-none text-black p-6 rounded-sm h-[200px]"
            placeholder="Your Message"
          ></motion.textarea>
          <motion.button
            variants={fadeIn("up", 0.9)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="btn rounded"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
