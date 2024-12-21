import React, { useState } from "react";
import { Link } from "react-router-dom";
import navbarLogo from '../Images/chirokut_white.png';

import Image1 from '../Before Signin/Images/1.png'; // Adjust the path accordingly

import Image2 from '../Before Signin/Images/2.jpg';

import Image3 from '../Before Signin/Images/3.jpg';


function ComplaintsBefore() {
  const [currentSlide, setCurrentSlide] = useState(0);


  const slides = [
    Image1,  // Local image
    Image2,
    Image3,
  ];
  

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-[#1A434E]">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img
                  className="h-8 w-auto shadow-lg"
                  src={navbarLogo}
                  alt="Chirokut Logo"
                />
              </div>
              <div className="w-full flex justify-end">
                <div className="flex space-x-6">
                  <Link
                    to="/"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    Home
                  </Link>
                  <Link
                    to="/Classroom"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    Classroom
                  </Link>
                  <Link
                    to="/Complaints"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    Complaints
                  </Link>
                  <Link
                    to="/AboutUs"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    About us
                  </Link>
                  <Link
                    to="/signin"
                    className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/signup"
                    className="rounded-md bg-[#FF8C42] px-3 py-2 text-sm font-medium text-white"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>


      
      {/* Carousel Slider */}
      <div className="relative">
        {/* Slide Images */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="flex-shrink-0 w-full">
                <img
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Prev/Next Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white rounded-full p-2 shadow-lg"
        >
          &#8249;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white rounded-full p-2 shadow-lg"
        >
          &#8250;
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-gray-800' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </div>

      {/* Banner */}
      <div className="bg-[#FF8C42] text-white py-14">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to Complaints</h1>
          <p className="text-lg">
            The Complaints section is designed to help you raise issues and get
            resolutions quickly. You can anonymously or publicly report problems,
            and authorities can take necessary action.
          </p>
        </div>
      </div>


      {/* Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            Share Your Concerns
          </h2>
          <p className="text-gray-700">
            If you have any complaints, you can report them here. Authorities will
            review and respond accordingly to resolve the issues. Sign in to get started!
          </p>
          <div className="mt-8">
            <Link
              to="/signin"
              className="rounded-md bg-[#1A434E] text-white px-4 py-2 text-sm font-medium hover:bg-gray-900"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="ml-4 rounded-md bg-[#FF8C42] text-white px-4 py-2 text-sm font-medium hover:bg-orange-500"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComplaintsBefore;
