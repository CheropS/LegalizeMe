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
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-black/50 backdrop-blur-sm rounded-lg border border-white/10">
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
                <div className="p-6">
                  <h3 className="text-xl font-medium text-white transition-colors duration-300 group-hover:text-blue-400">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-300 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4">
                    <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
