"use client";

import React from "react";
import { motion } from "framer-motion";
import { DynaPuff } from "next/font/google";

const DynaPuffs = DynaPuff({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const HeroSection = () => {
  return (
    <>
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-white pt-24 px-4 sm:px-8 lg:px-20 overflow-hidden mt-12">
        {/* Animated Circles */}
        <motion.div
          className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-orange-300 rounded-full opacity-50"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "20%", left: "60%" }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-red-200 rounded-full opacity-40"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "40%", left: "10%" }}
        />
        <motion.div
          className="absolute w-72 h-72 bg-green-200 rounded-full opacity-50"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "70%", left: "80%" }}
        />

        {/* Hero Section */}
        <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-center z-10 gap-8">
          {/* Left: Text */}
          <div className="max-w-2xl text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
              <span className="text-orange-500 font-extrabold text-[60px]">
                Shaping Futures
              </span>{" "}
              ,<br /> One Class at a Time.
            </h1>
            <p className={`text-black ${DynaPuffs.className}`}>
              &quot;Where Curiosity Meets Clarity.&quot;
            </p>

            <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg">
              At The Study Wave, we offer personalized 1:1 live sessions that
              make learning simple and engaging. With expert tutors and a focus
              on concept clarity,
              <span className="text-orange-400">
                we help students not just learn — but truly thrive.
              </span>
            </p>

            <div
              type="button"
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Book Free Demo Class
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-6 items-center ">
              <div className="flex justify-center items-center space-x-2">
                <span className="text-blue-500 mb-6 text-4xl">📹</span>
                <p className="text-black font-semibold text-xl">Live 1:1 Classes</p>
              </div>
              <div className="flex items-center space-x-2 ">
                <span className="text-purple-500 mb-6 text-4xl">😊</span>
                <p className="text-black font-semibold text-xl">For ages 6-16</p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl">
            <img
              src="https://cdn.prod.website-files.com/61f64598c68d4ab53ecff616/66decb3ff9373371e32ec1bd_Hero%20Img.avif"
              alt="Student"
              className="w-full h-auto rounded-lg shadow-lg"
            />

            {/* Course Badge */}
            <div className="absolute top-4 left-4 bg-white shadow-md p-3 rounded-lg flex items-center">
              <div className="bg-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-full text-lg">
                📘
              </div>
              <div className="ml-2">
                <p className="text-orange-500 font-bold text-sm sm:text-lg">2829+</p>
                <p className="text-black text-xs sm:text-sm">Total Courses</p>
              </div>
            </div>

            {/* Certification Badge */}
            <div className="absolute bottom-4 right-4 bg-white shadow-md p-2 sm:p-3 rounded-full border-4 border-orange-500 text-xs sm:text-sm font-semibold text-black text-center">
              100% Certification Guarantee
            </div>
          </div>
        </div>
      </section>
      <div></div>
    </>
  );
};
