"use client"

import React from "react";
import { motion } from "framer-motion";
import { Brain, FileText, Scale } from "lucide-react";

const UseCases = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 font-montserrat">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-8 sm:mb-12 md:mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Supercharge Your Legal Work</h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            Experience the power of AI in your legal practice with our cutting-edge features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <UseCaseCard
            title="Research Faster"
            description="Accelerate your legal research with AI-powered insights and instant access to relevant case law and statutes."
            icon={<Brain className="h-8 w-8 sm:h-10 sm:w-10 text-blue-400" />}
            delay={0.2}
          />
          <UseCaseCard
            title="Generate Legal Documents"
            description="Create professional legal documents in minutes with our AI-powered document generation tools."
            icon={<FileText className="h-8 w-8 sm:h-10 sm:w-10 text-purple-400" />}
            delay={0.4}
          />
          <UseCaseCard
            title="Case Law Insights"
            description="Access relevant precedents instantly—AI-curated,accurate and tailored to your legal needs."
            icon={<Scale className="h-8 w-8 sm:h-10 sm:w-10 text-indigo-400" />}
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

const UseCaseCard = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      className="relative group h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
      <div className="relative p-6 bg-black/50 backdrop-blur-sm rounded-lg border border-white/10 h-full flex flex-col items-center text-center">
        <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="text-xl sm:text-2xl font-medium text-white transition-colors duration-300 group-hover:text-blue-400 mb-3">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default UseCases; 