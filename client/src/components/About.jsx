import { useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';
import Blog from './Blog';
import Numbers from './Numbers';

const AboutUs = () => {
    const stats = [
        { id: 1, name: 'Global Users', value: '10M+' },
        { id: 2, name: 'Active Projects', value: '1.2K+' },
        { id: 3, name: 'Support Staff', value: '24/7' },
    ];

    return (
        <div>
            <Navbar />
            {/* Page Title */}
            <section className="bg-white py-[70px] dark:bg-dark text-center font-roboto">
                <div className="mx-auto px-4 sm:container">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">About Us</h2>
                    </div>
                </div>
            </section>

            <hr className="mx-auto max-w-7xl border-t border-gray-200" />

            <section className="py-10 bg-white sm:py-16 lg:py-24 font-roboto animate-fadeIn">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
                        <div className="relative lg:mb-12">
                            <img className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4" src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg" alt="" />
                            <div className="pl-12 pr-6">
                                <img className="relative" src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/girl-working-on-laptop.jpg" alt="" />
                            </div>
                            <div className="absolute left-0 pr-12 bottom-8 xl:bottom-20">
                                <div className="max-w-xs bg-blue-600 rounded-lg sm:max-w-md xl:max-w-md">
                                    <div className="px-3 py-4 sm:px-5 sm:py-8">
                                        <div className="flex items-start">
                                            <p className="text-3xl sm:text-4xl">👋</p>
                                            <blockquote className="ml-5">
                                                <p className="text-sm font-medium text-white sm:text-lg">“You made it so simple. My new site is so much faster and easier to work with than my old site.”</p>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="2xl:pl-16">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">Get to know us</h2>
                            <p className="text-xl leading-relaxed text-gray-900 mt-9">LegalizeMe is redefining the legal experience with cutting-edge technology that makes legal services faster, reliable and accessible to all.
                                Our platform empowers users to save time, reduce costs, and streamline their processes - whether you're a law firm, student, or individual seeking justice.
                            </p>
                            <p className="mt-6 text-xl leading-relaxed text-gray-900">We believe in breaking barriers because justice delayed is justice denied. At LegalizeMe, we're not just transforming law - we're making it work for you.</p>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="mx-auto max-w-7xl border-t border-gray-200" />

            {/* Accordion Section */}
            <div className="bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8 animate-fadeInUp font-roboto">
                <div className="lg:w-1/2 w-full mx-auto">
                    <div id="accordion-flush" className="space-y-5">
                        {/* Mission */}
                        <AccordionItem title="Mission">
                            <p>To revolutionize the legal landscape by providing innovative, AI powered solutions that make legal services fast, accessible, and affordable for everyone, ensuring no one is left behind in the pursuit of justice.</p>
                        </AccordionItem>

                        {/* Vision */}
                        <AccordionItem title="Vision">
                            <p>To become the go-to legal tech platform that transforms how law is practiced and accessed across Africa and beyond, empowering individuals and legal professionals with cutting-edge tools to achieve justice efficiently.</p>
                        </AccordionItem>

                        {/* Core Values */}
                        <AccordionItem title="Core Values">
                            <p>
                                <li>Innovation - We push the boundaries of technology to deliver exceptional legal solutions</li>
                                <li>Accessibility - We believe legal services should be accessible to everyone, everywhere</li>
                                <li>Integrity - Upholding trust, transparency, and fairness in all we do</li>
                                <li>Impact - Empowering users to save time, reduce costs, and unlock opportunities through our platform</li>
                            </p>
                        </AccordionItem>
                    </div>
                </div>
            </div>

            <hr className="mx-auto max-w-7xl border-t border-gray-200" />

            <Blog />

            <hr className="mx-auto max-w-7xl border-t border-gray-200" />

            <section class="py-10 bg-gray-100 sm:py-16 lg:py-24 font-roboto">
                <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div class="max-w-2xl mx-auto text-center">
                        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Numbers tell our story</h2>
                        <p class="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                            What started as a dream has now become a reality. Our numbers speak for themselves, showcasing our growth, impact, and commitment to excellence.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
                        <div>
                            <h3 class="font-bold text-7xl">
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 500+ </span>
                            </h3>
                            <p class="mt-4 text-xl font-medium text-gray-900">Documents</p>
                            <p class="text-base mt-0.5 text-gray-500">Generated daily</p>
                        </div>

                        <div>
                            <h3 class="font-bold text-7xl">
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 2000+ </span>
                            </h3>
                            <p class="mt-4 text-xl font-medium text-gray-900">Active users</p>
                            <p class="text-base mt-0.5 text-gray-500">Since inception</p>
                        </div>

                        <div>
                            <h3 class="font-bold text-7xl">
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 5s </span>
                            </h3>
                            <p class="mt-4 text-xl font-medium text-gray-900">To Generate</p>
                            <p class="text-base mt-0.5 text-gray-500">Summary for a document</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Numbers /> */}
            <Footer />
        </div>
    );
};

const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 animate-accordionFade">
            <button
                className="w-full py-4 text-left text-gray-600 flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{title}</span>
                <svg
                    className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div className={`transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
                <div className="py-2">
                    {children}
                </div>
            </div>
        </div>
    );
};

// Prop types validation
AccordionItem.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default AboutUs;
