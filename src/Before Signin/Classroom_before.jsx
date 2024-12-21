import React from "react";
import { Link } from "react-router-dom";
import navbarLogo from '../Images/chirokut_white.png';

function ClassroomBefore() {
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
                    to="/ComplaintsBefore"
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

      {/* Banner */}
      <div className="bg-[#FF8C42] text-white py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Classroom</h1>
          <p className="text-lg">
            Our Classroom section is designed to foster collaboration and
            communication. Students can share notes, join or create online
            classes using platforms like Zoom or Google Meet, and submit
            assignments seamlessly.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            Unlock the Power of Learning
          </h2>
          <p className="text-gray-700">
            Teachers and students can connect directly, send messages, and even
            create groups for focused discussions. Sign in to access these
            amazing features and enhance your learning experience.
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

export default ClassroomBefore;
