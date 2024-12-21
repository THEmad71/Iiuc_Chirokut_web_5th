import React from "react";
import { Link } from "react-router-dom";

import classroomImage from "./Images/Classroom_1.jpg";
import navbarLogo from "./Images/chirokut_white.png";

const Classroom = () => {
  return (
    <div>
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
                    to="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    Classroom
                  </Link>
                  <Link
                    to="/complaints"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    Complaints
                  </Link>
                  <Link
                    to="/about-us"
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

      {/* Classroom Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Explore the Classroom Experience
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Our classroom system is built to connect students and teachers,
            enabling seamless sharing of resources, communication, and
            collaboration. However, to access these interactive tools, please
            sign in or sign up.
          </p>
          <img
            src={classroomImage}
            alt="Classroom Overview"
            className="w-full md:w-3/4 mx-auto rounded-lg shadow-lg mb-6"
          />
          <div className="flex justify-center space-x-4">
            <Link
              to="/signin"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-[#FF8C42] text-white px-6 py-3 rounded-lg hover:bg-[#E07634]"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Classroom;
