import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      category: "Data Privacy",
      date: "November 2, 2024",
      title: "Breaking Down Data Privacy Laws: What Every Internet User Needs to Know",
      brief: "In an era where digital interactions are part of daily life, data privacy has become an issue of critical importance. From social media and online shopping to banking and telemedicine, the internet is central to our lives.",
      imgSrc: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg",
      url: "https://medium.com/@kayvenekev/breaking-down-data-privacy-laws-what-every-internet-user-needs-to-know-c2034fab3294"
    },
    {
      id: 2,
      category: "Rights",
      date: "October 30, 2024",
      title: "Your Rights During a Traffic Stop: What the Law Says and What You Should Do",
      brief: "A traffic stop can be a stressful experience, whether it’s for a minor violation or a misunderstanding. However, understanding your legal rights during such encounters can make all the difference.",
      imgSrc: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-2.jpg",
      url: "https://medium.com/@kayvenekev/your-rights-during-a-traffic-stop-what-the-law-says-and-what-you-should-do-68364d61ccd1"
    },
    {
      id: 3,
      category: "Artificial Intelligence",
      date: "October 28, 2024",
      title: "The Impact of AI and Technology on Legal Practice: Revolution or Risk?",
      brief: "In recent years, technology has swept across every industry, transforming how we live and work. The legal field, often viewed as traditional and resistant to change, is no exception. Artificial intelligence (AI) and other cutting-edge technologies are now reshaping how legal services are delivered. But is this shift a revolution in legal practice, or does it pose significant risks?",
      imgSrc: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg",
      url: "https://medium.com/@kayvenekev/the-impact-of-ai-and-technology-on-legal-practice-revolution-or-risk-0bc52eb2e993"
    }
  ];

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24 font-montserrat">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-end justify-between">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Latest from blog</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">
              Read our latest blog posts and learn how to improve your life and business.
            </p>
          </div>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
          {blogPosts.map((post) => (
            <div key={post.id} className="overflow-hidden bg-white rounded shadow">
              <div className="p-5">
                <div className="relative">
                  <a href={post.url} title={post.title} className="block aspect-w-4 aspect-h-3">
                    <img className="object-cover w-full h-full" src={post.imgSrc} alt={post.title} />
                  </a>
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                  {post.date}
                </span>
                <p className="mt-5 text-2xl font-semibold">
                  <a href={post.url} title={post.title} className="text-black">
                    {post.title}
                  </a>
                </p>
                <p className="mt-4 text-base text-gray-600">{post.brief}</p>
                <a href={post.url} title="Continue Reading" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600" target="_blank">
                  Continue Reading
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
