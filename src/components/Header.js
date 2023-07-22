import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

///import icons
import { FaFacebookF, FaFacebookMessenger, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header = () => {
  return (
    <header className="w-full h-[90px] bg-inherit" id="home">
      <div className="lg:px-[40px] px-[20px] flex justify-between items-center h-full">
        <motion.div variants={fadeIn("up", 0.3)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.3}}>
          <h2 className="font-poppins text-2xl">Alaiza</h2>
        </motion.div>
        <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
         className="hidden lg:flex items-center space-x-4"
      >
          <a href="https://web.facebook.com/profile.php?id=100009372139838">
            <FaFacebookF size={22} />
          </a>
          <a href="">
            <FaFacebookMessenger size={22} />
          </a>
          <a href="http://www.instagram.com/alaiza.jy/">
            <FaInstagram size={24} />
          </a>
          <a href="gondraneosalaiza@gmail.com">
            <MdEmail size={24} />
          </a>
        </motion.div>
        <motion.div variants={fadeIn("up", 0.3)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.3}}>
          <button className="btn rounded">Portfolio</button>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
