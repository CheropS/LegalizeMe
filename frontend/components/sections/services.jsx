"use client"

import React from "react";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <section className="py-20 font-montserrat">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16 text-center">
          <span className="text-blue-400">Our Services</span>
          <h2 className="mt-2 text-3xl font-bold text-white">What We Offer</h2>
          <p className="mt-3 text-gray-400">
            Know more about our services and how we can help you with your legal needs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="AI Powered Database" 
            details="Get to experience the best lightning-fast AI that helps you find the best law resources and services.
            Say goodbye to research headaches and hello to effortless precision."
            icon={
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.0375 1.2374C11.8125 -0.393851 2.92503 5.7374 1.29378 14.9624C0.450029 19.4061 1.46253 23.9624 4.05003 27.6749C6.63753 31.4436 10.5188 33.9186 14.9625 34.7624C15.975 34.9311 16.9875 35.0436 18 35.0436C26.0438 35.0436 33.2438 29.2499 34.7625 21.0374C36.3938 11.8124 30.2625 2.9249 21.0375 1.2374ZM32.2313 20.5874C32.175 21.0374 32.0625 21.4874 31.95 21.8811L19.2375 17.0999V3.5999C19.6875 3.65615 20.1375 3.7124 20.5313 3.76865C28.4063 5.1749 33.6375 12.7124 32.2313 20.5874ZM16.7063 3.5999V16.7624H3.60003C3.65628 16.3124 3.71253 15.8624 3.76878 15.4124C4.95003 8.83115 10.4063 4.10615 16.7063 3.5999ZM15.4125 32.2311C11.5875 31.5561 8.32503 29.4186 6.13128 26.2124C4.66878 24.1311 3.82503 21.7124 3.60003 19.2374H17.775L31.05 24.2436C28.2938 29.9811 21.9375 33.4686 15.4125 32.2311Z"
                  fill="currentColor"
                />
              </svg>
            }
            delay={0.2}
          />
          <ServiceCard
            title="User Friendly Interface"
            details="Explore our user-friendly interface that makes it easy for you to find the best law resources and services. Our platform is designed to provide you with the best legal experience possible."
            icon={
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.89195 14.625C10.9995 10.1252 13.769 7.875 18.1996 7.875C24.8458 7.875 25.6765 12.9375 28.9996 13.7812C31.2151 14.3439 33.1535 13.5002 34.815 11.25C33.7075 15.7498 30.9379 18 26.5073 18C19.8611 18 19.0304 12.9375 15.7073 12.0938C13.4918 11.5311 11.5535 12.3748 9.89195 14.625ZM1.58423 24.75C2.69174 20.2502 5.46132 18 9.89195 18C16.5381 18 17.3689 23.0625 20.692 23.9062C22.9075 24.4689 24.8458 23.6252 26.5073 21.375C25.3998 25.8748 22.6302 28.125 18.1996 28.125C11.5535 28.125 10.7227 23.0625 7.39963 22.2188C5.18405 21.6561 3.24576 22.4998 1.58423 24.75Z"
                  fill="currentColor"
                />
              </svg>
            }
            delay={0.4}
          />
          <ServiceCard
            title="Interactive Chatbot"
            details="Draft contracts, get legal answers, and generate documents in real-time-fast, precise, and effortless with our interactive chatbot.
            Accessible anytime, anywhere."
            icon={
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.2063 1.9126H5.0625C3.15 1.9126 1.575 3.4876 1.575 5.4001V12.5438C1.575 14.4563 3.15 16.0313 5.0625 16.0313H12.2063C14.1188 16.0313 15.6938 14.4563 15.6938 12.5438V5.45635C15.75 3.4876 14.175 1.9126 12.2063 1.9126ZM13.2188 12.6001C13.2188 13.1626 12.7688 13.6126 12.2063 13.6126H5.0625C4.5 13.6126 4.05 13.1626 4.05 12.6001V5.45635C4.05 4.89385 4.5 4.44385 5.0625 4.44385H12.2063C12.7688 4.44385 13.2188 4.89385 13.2188 5.45635V12.6001Z M30.9375 1.9126H23.7937C21.8812 1.9126 20.3062 3.4876 20.3062 5.4001V12.5438C20.3062 14.4563 21.8812 16.0313 23.7937 16.0313H30.9375C32.85 16.0313 34.425 14.4563 34.425 12.5438V5.45635C34.425 3.4876 32.85 1.9126 30.9375 1.9126ZM31.95 12.6001C31.95 13.1626 31.5 13.6126 30.9375 13.6126H23.7937C23.2312 13.6126 22.7812 13.1626 22.7812 12.6001V5.45635C22.7812 4.89385 23.2312 4.44385 23.7937 4.44385H30.9375C31.5 4.44385 31.95 4.89385 31.95 5.45635V12.6001Z"
                  fill="currentColor"
                />
              </svg>
            }
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default Service;

const ServiceCard = ({ icon, title, details, delay }) => {
  return (
    <motion.div 
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
      <div className="relative p-6 bg-black/50 backdrop-blur-sm rounded-lg border border-white/10">
        <div className="text-blue-400 mb-6 transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        <div className="flex-grow">
          <h3 className="text-xl font-medium text-white transition-colors duration-300 group-hover:text-blue-400">
            {title}
          </h3>
          <p className="mt-3 text-sm text-gray-300 line-clamp-3">
            {details}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

