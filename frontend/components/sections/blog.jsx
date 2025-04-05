import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';

const Blog = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24 font-montserrat">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-end justify-between">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Latest from blog</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300 lg:mx-0">
              Read our latest blog posts and learn how to improve your life and business.
            </p>
          </div>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
          {blogPosts.map((post) => (
            <div key={post.id} className="overflow-hidden bg-white rounded shadow h-[600px] flex flex-col">
              <div className="p-5 flex flex-col flex-grow">
                <div className="relative h-48">
                  <Link 
                    href={post.url} 
                    title={post.title}
                    className="block h-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image 
                      className="object-cover w-full h-full" 
                      src={post.imgSrc} 
                      alt={post.title}
                      width={400}
                      height={300}
                      priority={post.id === 1}
                    />
                  </Link>
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                    {post.date}
                  </span>
                  <p className="mt-5 text-2xl font-semibold">
                    <Link 
                      href={post.url} 
                      title={post.title} 
                      className="text-black hover:text-blue-600 transition-colors line-clamp-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {post.title}
                    </Link>
                  </p>
                  <p className="mt-4 text-base text-gray-600 line-clamp-3">{post.brief}</p>
                  <div className="mt-auto pt-5">
                    <Link 
                      href={post.url} 
                      title="Continue Reading" 
                      className="inline-flex items-center justify-center pb-0.5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Continue Reading
                      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
