"use client"

import React from "react";
import { motion } from "framer-motion";

const Cta = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="relative z-10 overflow-hidden rounded-2xl bg-black/50 backdrop-blur-sm border border-white/10 py-12 px-6 sm:px-8 md:p-[70px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25" />
          <div className="flex flex-wrap items-center -mx-4 relative">
            <div className="w-full px-4 lg:w-1/2">
              <motion.span 
                className="mb-4 block text-lg font-medium text-blue-400"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Ready to get started?
              </motion.span>
              <motion.h2 
                className="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-[40px]/[48px] lg:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="block">Get started with</span>
                <span>our free trial</span>
              </motion.h2>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 lg:justify-end"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.a
                  href="/register"
                  className="relative group inline-flex items-center justify-center py-3 px-7 text-base font-medium text-white rounded-lg w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute -inset-0.5 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300" />
                  <div className="relative text-white transition-all duration-300 hover:text-purple-400 border border-white/10 rounded-lg px-6 py-2.5 flex items-center">
                    Get Pro Version
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform inline-flex"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </motion.a>
                <motion.a
                  href="/cases"
                  className="relative group inline-flex items-center justify-center py-3 px-7 text-base font-medium text-white rounded-lg w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute -inset-0.5 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300" />
                    <div className="relative text-white transition-all duration-300 hover:text-purple-400 border border-white/10 rounded-lg px-6 py-2.5 flex items-center">
                    View Cases
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform inline-flex"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </motion.a>
              </motion.div>
            </div>
          </div>

          <div>
            <span className="absolute top-0 left-0 z-[-1]">
              <svg
                width="189"
                height="162"
                viewBox="0 0 189 162"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-50"
              >
                <ellipse
                  cx="16"
                  cy="-16.5"
                  rx="173"
                  ry="178.5"
                  transform="rotate(180 16 -16.5)"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-157"
                    y1="-107.754"
                    x2="98.5011"
                    y2="-106.425"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0.07" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="absolute bottom-0 right-0 z-[-1]">
              <svg
                width="191"
                height="208"
                viewBox="0 0 191 208"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-50"
              >
                <ellipse
                  cx="173"
                  cy="178.5"
                  rx="173"
                  ry="178.5"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-3.27832e-05"
                    y1="87.2457"
                    x2="255.501"
                    y2="88.5747"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0.07" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
