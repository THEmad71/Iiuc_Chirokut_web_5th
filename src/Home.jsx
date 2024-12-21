import React from "react";
import { Link } from "react-router-dom";

import chirokutLogo from './Images/chirokut 1.png';
import classroomImage from './Images/Classroom_1.jpg';
import complainImage from './Images/complain_1.jpg';
import navbarLogo from './Images/chirokut_white.png';
import app_1 from './Images/chirokut app/1.png'
import app_2 from './Images/chirokut app/2.png';
import app_3 from './Images/chirokut app/3.png';
import app_4 from './Images/chirokut app/4.png';
import app_5 from './Images/chirokut app/5.png';


const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-[#1A434E]">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img
                  className="h-8 w-auto shadow-lg"
                  src={navbarLogo}  // Use imported image
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
                    to="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    Complaints
                  </Link>
                  <Link
                    to="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    About us
                  </Link>
                  <Link
                    to="/signin"
                    className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                    aria-current="page"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/signup"
                    className="rounded-md bg-[#FF8C42] px-3 py-2 text-sm font-medium text-white"
                    aria-current="page"
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
          <img
            src={chirokutLogo}  // Use imported image here too
            alt="Chirokut Logo"
            className="h-20 w-auto mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
            Welcome to Our Platform!
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Empowering students and teachers with seamless communication and classroom tools.
          </p>
          <div className="mt-6">
            <a
              href="#features"
              className="bg-[#FF8C42] text-white px-6 py-3 rounded-lg hover:bg-[#E07634]"
            >
              Explore Features
            </a>
          </div>
        </div>
      </section>

      {/* Classroom Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 flex justify-center">
              <img
                src={classroomImage}  // Use imported image here
                alt="Classroom Feature"
                className="w-full md:w-3/4 rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Explore Our Interactive Classroom
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Our **Classroom** section is designed to foster collaboration and communication. Students can share notes, join or create online classes using platforms like Zoom or Google Meet, and submit assignments seamlessly.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Teachers and students can connect directly, send messages, and even create groups for focused discussions. With all these tools, learning becomes more engaging and productive.
              </p>
              <a
                href="#classroom"
                className="inline-block bg-[#FF8C42] text-white px-6 py-3 rounded-lg hover:bg-[#E07634]"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Complaint Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Raise Your Voice Against Unethical Practices
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Our **Complaint Section** empowers students to report any unethical activities or corruption happening within the university. Whether it's an issue with administration, faculty, or peers, students can voice their concerns effectively.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Complaints can be submitted anonymously to protect your identity or with your name and ID for direct follow-up. The university authority will review and take the necessary actions to resolve these issues promptly.
              </p>
              <a
                href="#complaints"
                className="inline-block bg-[#FF8C42] text-white px-6 py-3 rounded-lg hover:bg-[#E07634]"
              >
                Submit a Complaint
              </a>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <img
                src={complainImage}  // Use imported image here
                alt="Complaint Feature"
                className="w-full md:w-3/4 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* App Section */}
      <section className="bg-white py-16">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">
      Experience Chirokut on the Go!
    </h2>
    <p className="text-lg text-gray-600 mb-8">
      We also have a mobile app version of **Chirokut**, making it easier for students and teachers to access essential features anytime, anywhere. The app will continue to evolve with exciting updates in the future.
    </p>

    <div className="image-container">
      <img src={app_1} alt="App Prototype 1" className="prototype-img" />
      <img src={app_2} alt="App Prototype 2" className="prototype-img" />
      <img src={app_3} alt="App Prototype 3" className="prototype-img" />
      <img src={app_4} alt="App Prototype 4" className="prototype-img" />
      <img src={app_5} alt="App Prototype 5" className="prototype-img" />
    </div>
  </div>
</section>


<section id="features" class="features-section">
    <div class="container">
      <h2 class="section-title">Features You'll Love</h2>
      <div class="features-grid">

        <div class="feature-item">
          <div class="feature-icon">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h11M9 21v-9m0 0L3 10m6 0l6-6m6 6h2m-2 0a2 2 0 11-4 0m4 0a2 2 0 10-4 0"></path>
            </svg>
          </div>
          <h3 class="feature-title">Interactive Classrooms</h3>
          <p class="feature-description">Engage with your teachers and classmates in real time.</p>
        </div>
      
        <div class="feature-item">
          <div class="feature-icon">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-3.866 0-7 2.686-7 6v4h14v-4c0-3.314-3.134-6-7-6zm0 0c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"></path>
            </svg>
          </div>
          <h3 class="feature-title">Anonymized Complaints</h3>
          <p class="feature-description">Share your concerns while keeping your identity secure.</p>
        </div>
       
        <div class="feature-item">
          <div class="feature-icon">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 21l-7-4-7 4V5a2 2 0 012-2h10a2 2 0 012 2z"></path>
            </svg>
          </div>
          <h3 class="feature-title">Resourceful Tools</h3>
          <p class="feature-description">Access assignments, materials, and grades effortlessly.</p>
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

export default Home;
