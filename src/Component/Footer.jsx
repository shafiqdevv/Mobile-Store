
import { BsInstagram } from "react-icons/bs";
import { CiMobile1 } from "react-icons/ci";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";

function Footer({ night }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Brand logos */}
      <div
        className={`flex flex-wrap items-center justify-between gap-5 px-5 md:px-15 py-4 bg-gray-200 ${
          night ? "bg-gray-800" : ""
        }`}
      >
        <img src="/logo (1).svg" alt="Brand 1" className="w-15" />
        <img src="/logo (2).svg" alt="Brand 2" className="w-15" />
        <img src="/logo (3).svg" alt="Brand 3" className="w-15" />
        <img src="/logo (4).svg" alt="Brand 4" className="w-15" />
        <img src="/logo (6).svg" alt="Brand 5" className="w-15" />
      </div>

      {/* Footer content */}
      <div className="grid grid-cols-1 gap-10 px-5 md:px-15 mt-8 mb-8 md:grid-cols-2 lg:grid-cols-3">

        {/* About */}
        <div className="max-w-70">
          <h1 className="text-red-600 font-bold text-2xl">
            ESHOP
          </h1>

          <p className="text-sm mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Natus in vero cupiditate nulla! Vero delectus
            molestias laborum odio off.
          </p>

          <p className="mt-5">Made by Coder Freinds</p>

          <a
            href="https://example.com"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-red-600 px-5 py-[2px] rounded-full text-white text-sm mt-2 hover:scale-97 active:scale-103 duration-200 cursor-pointer"
          >
            Visit our website
          </a>
        </div>

        {/* Navigation links */}
        <div className="flex flex-wrap gap-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-bold">
              Important Links
            </h1>

            <a
              href="#navBar"
              className="text-sm hover:text-gray-500 active:scale-105 duration-200"
            >
              Home
            </a>

            <a
              href="#category"
              className="text-sm hover:text-gray-500 active:scale-105 duration-200"
            >
              Category
            </a>

            <a
              href="#productsList"
              className="text-sm hover:text-gray-500 active:scale-105 duration-200"
            >
              Products
            </a>

            <NavLink
              to="/"
              className="text-sm hover:text-gray-500 active:scale-105 duration-200"
            >
              Blog
            </NavLink>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">Links</h1>

            <a
              href="#navBar"
              className="text-sm hover:text-gray-500 active:scale-105 duration-200"
            >
              Home
            </a>

            <a
              href="#category"
              className="text-sm hover:text-gray-500 active:scale-105 duration-200"
            >
              Category
            </a>

            <NavLink
              to="/cart"
              className="text-sm hover:text-gray-500 active:scale-105 duration-200"
            >
              Shopping Cart
            </NavLink>

            <NavLink
              to="/"
              className="text-sm hover:text-gray-500 active:scale-105 duration-200"
            >
              Contact
            </NavLink>
          </div>
        </div>

        {/* Social media */}
        <div className="flex flex-col gap-5 mt-2 lg:mt-0">
          <div className="flex flex-wrap items-center gap-5">

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin
                size={30}
                className="hover:scale-110 hover:text-blue-600 active:scale-95 duration-200 cursor-pointer"
              />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <BsInstagram
                size={30}
                className="hover:scale-110 hover:text-pink-500 active:scale-95 duration-200 cursor-pointer"
              />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              title="Facebook"
            >
              <FaFacebook
                size={30}
                className="hover:scale-110 hover:text-blue-700 active:scale-95 duration-200 cursor-pointer"
              />
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub
                size={30}
                className="hover:scale-110 hover:text-gray-500 active:scale-95 duration-200 cursor-pointer"
              />
            </a>

            <a
              href="https://www.whatsapp.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <FaWhatsapp
                size={30}
                className="hover:scale-110 hover:text-green-600 active:scale-95 duration-200 cursor-pointer"
              />
            </a>

          </div>

          {/* Phone number */}
          <a
            href="tel:+93777777777"
            className="flex items-center gap-1 hover:text-red-600 duration-200"
          >
            <CiMobile1 size={30} />
            +93 77 777 777 7
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Footer;
