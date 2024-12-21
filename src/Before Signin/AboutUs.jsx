import React from "react";
import { Link } from "react-router-dom";
import navbarLogo from '../Images/chirokut_white.png';

import Image1 from '../Before Signin/Images/4.jpg'; // Adjust the path accordingly

import Image2 from '../Before Signin/Images/5.jpg';

import Image3 from '../Before Signin/Images/6.jpg';




const AboutUs = () => {
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











      {/* Hero Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
            About Us
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Learn more about our mission, vision, and the team behind the
            Chirokut platform.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-4">
            At Chirokut, our mission is to empower students and teachers with
            seamless communication tools, fostering a collaborative learning
            environment.
          </p>
          <p className="text-lg text-gray-600">
            We strive to create an inclusive platform where everyone can share
            their voice, access essential resources, and grow together.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="team-member text-center">
              <img
                src={Image1}
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">Amad uddin </h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="team-member text-center">
              <img
                src={Image2}
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">Mohammad Osama</h3>
              <p className="text-gray-600">CTO</p>
            </div>
            <div className="team-member text-center">
              <img
                src={Image3}
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">Osama bin afridi</h3>
              <p className="text-gray-600">Lead Designer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 mb-8">
            Have questions or feedback? Reach out to us!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="contact-item">
              <h3 className="text-xl font-bold text-gray-800">Email</h3>
              <p className="text-gray-600">support@chirokut.com</p>
            </div>
            <div className="contact-item">
              <h3 className="text-xl font-bold text-gray-800">Phone</h3>
              <p className="text-gray-600">+880 123-456-7890</p>
            </div>
            <div className="contact-item">
              <h3 className="text-xl font-bold text-gray-800">Address</h3>
              <p className="text-gray-600">1234 Chirokut Lane, Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
      </section>


      <footer class="bg-[#1A434E] text-white py-8">
    <div class="container mx-auto px-6 text-center">
        <div class="flex justify-center space-x-6 mb-6">
            <a href="#" class="footer-link">Home</a>
            <a href="#" class="footer-link">Classroom</a>
            <a href="#" class="footer-link">Complaints</a>
            <a href="#" class="footer-link">About Us</a>
        </div>
        <div class="mb-6">
            <p class="text-lg">Follow us on social media</p>
            <div class="flex justify-center space-x-6 mt-4">
                <a href="#" class="footer-icon">Facebook</a>
                <a href="#" class="footer-icon">Twitter</a>
                <a href="#" class="footer-icon">Instagram</a>
                <a href="#" class="footer-icon">LinkedIn</a>
            </div>
        </div>
        <p class="text-sm">&copy; 2024 Chirokut Platform. All rights reserved.</p>
    </div>
</footer>



    </div>
  );
};

export default AboutUs;
