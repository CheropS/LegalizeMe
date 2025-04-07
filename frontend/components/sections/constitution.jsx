"use client"

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Download, FileText, History, BookOpen } from 'lucide-react';

export default function Constitution() {
  return (
    <div className="max-w-screen-xl mx-auto py-12 px-4 lg:py-20 lg:px-6 font-montserrat">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl tracking-tight font-bold text-white mb-4">
          The Constitution of Kenya
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          The supreme law of the Republic of Kenya, establishing the structure and functions of government, 
          and protecting the rights and freedoms of all citizens.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Image Section */}
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/TheConstitutionOfKenya.pdf" className="group block">
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300" />
              <div className="relative">
                <Image
                  src="/constitution.jpeg"
                  alt="Constitution of Kenya"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/70 backdrop-blur-sm p-4 rounded-lg flex items-center gap-2">
                    <Download className="h-5 w-5 text-blue-400" />
                    <span className="text-white font-medium">Download Constitution</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <p className="mt-4 text-center text-gray-300">
            Click on the image to download the Constitution of Kenya
          </p>
        </motion.div>
        
        {/* Right Content Section */}
        <motion.div 
          className="w-full lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Introduction Card */}
          <motion.div 
            className="relative group overflow-hidden rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm p-6"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">Introduction</h3>
              </div>
              <p className="text-gray-300">
                <strong className="text-white">We, the people of Kenya—</strong> Acknowledging the supremacy of the Almighty God of all creation, and recognizing our diversity and commitment to peace, unity, and sustainable development.
              </p>
            </div>
          </motion.div>

          {/* Commitment Card */}
          <motion.div 
            className="relative group overflow-hidden rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm p-6"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-6 w-6 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">Our Commitment</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Honouring those who fought for our freedom and justice.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Proud of our ethnic, cultural, and religious diversity.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Respectful of our environment and determined to preserve it.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Dedicated to protecting well-being at individual, family, and national levels.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Aspiration Card */}
          <motion.div 
            className="relative group overflow-hidden rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm p-6"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <History className="h-6 w-6 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">Our Aspiration</h3>
              </div>
              <p className="text-gray-300">
                Recognizing the aspirations of all Kenyans for a government based on human rights, equality, freedom, democracy, social justice, and rule of law.
              </p>
            </div>
          </motion.div>

          {/* Download Links Card */}
          <motion.div 
            className="relative group overflow-hidden rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm p-6"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <Download className="h-6 w-6 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">Download Links</h3>
              </div>
              <div className="space-y-3">
                <Link 
                  href="/TheConstitutionOfKenya.pdf" 
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 group/link"
                  target="_blank"
                >
                  <Download className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  <span>Full Version of the Constitution of Kenya</span>
                </Link>
                <Link 
                  href="/Constitution of Kenya (Repealed).pdf" 
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 group/link"
                  target="_blank"
                >
                  <Download className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  <span>Previous Constitution</span>
                </Link>
                <Link 
                  href="/1963_Constitution.pdf" 
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 group/link"
                  target="_blank"
                >
                  <Download className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  <span>1963 Constitution</span>
                </Link>
                <Link 
                  href="/amendments" 
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 group/link"
                >
                  <Download className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  <span>Amendments from 1963 to 2010</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}