import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blog-posts';

const Blog = () => {
  return (
    <section className="py-20 font-montserrat">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white">Latest insights</h2>
          <p className="mt-3 text-gray-400">
            Exploring the intersection of law and technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={post.id} 
              className="flex flex-col bg-black/20 backdrop-blur-sm transition-all duration-300 hover:bg-black/30 hover:translate-y-[-4px] group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image 
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  src={post.imgSrc} 
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={post.id === 1}
                />
                <motion.div 
                  className="absolute top-4 left-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <span className="px-3 py-1 text-xs font-medium text-white bg-blue-600/80 backdrop-blur-sm rounded-full transition-all duration-300 group-hover:bg-blue-500/90">
                    {post.category}
                  </span>
                </motion.div>
              </div>
              
              <div className="flex flex-col flex-grow p-6">
                <div className="flex-grow">
                  <span className="text-sm text-gray-400">
                    {post.date}
                  </span>
                  <h3 className="mt-2 text-xl font-medium text-white line-clamp-2">
                    <Link 
                      href={post.url} 
                      className="transition-colors duration-300 hover:text-blue-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm text-gray-400 line-clamp-2">
                    {post.brief}
                  </p>
                </div>
                
                <Link 
                  href={post.url} 
                  className="inline-flex items-center mt-4 text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300 group-hover:translate-x-1" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
