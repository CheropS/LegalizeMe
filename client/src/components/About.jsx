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
                    <div class="max-w-2xl mx-auto text-center">
                        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">About Us</h2>
                        <p class="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Get to know more about LegalizeMe. LegalizeMe is a global leader in customer support and service excellence. We are committed to providing top-notch services to our clients worldwide.</p>
                    </div>
                </div>
            </section>

            {/* Accordion Section */}
            <div className="bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8 animate-fadeInUp font-roboto">
                <div className="lg:w-1/2 w-full mx-auto">
                    <div id="accordion-flush" className="space-y-5">
                        {/* Mission */}
                        <AccordionItem title="Mission">
                            <p>Our mission is to achieve customer satisfaction through consistent service delivery. We strive to exceed expectations by providing top-notch support and innovative solutions tailored to our clients&apos; needs.</p>
                        </AccordionItem>

                        {/* Vision */}
                        <AccordionItem title="Vision">
                            <p>Our vision is to be a global leader in customer support and service excellence, continuously innovating and adapting to meet the evolving needs of our clients.</p>
                        </AccordionItem>

                        {/* Core Values */}
                        <AccordionItem title="Core Values">
                            <p>Our core values include integrity, dedication, teamwork, and innovation. We believe in fostering a culture of trust and collaboration to achieve excellence in all our endeavors.</p>
                        </AccordionItem>
                    </div>
                </div>
            </div>

            <Blog />

            <section class="py-10 bg-gray-100 sm:py-16 lg:py-24 font-roboto">
                <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div class="max-w-2xl mx-auto text-center">
                        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Numbers tell our story</h2>
                        <p class="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
                    </div>

                    <div class="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
                        <div>
                            <h3 class="font-bold text-7xl">
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 6+ </span>
                            </h3>
                            <p class="mt-4 text-xl font-medium text-gray-900">Years in business</p>
                            <p class="text-base mt-0.5 text-gray-500">Creating the successful path</p>
                        </div>

                        <div>
                            <h3 class="font-bold text-7xl">
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 4821 </span>
                            </h3>
                            <p class="mt-4 text-xl font-medium text-gray-900">Projects delivered</p>
                            <p class="text-base mt-0.5 text-gray-500">In last 6 years</p>
                        </div>

                        <div>
                            <h3 class="font-bold text-7xl">
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 37+ </span>
                            </h3>
                            <p class="mt-4 text-xl font-medium text-gray-900">Team members</p>
                            <p class="text-base mt-0.5 text-gray-500">Working for your success</p>
                        </div>
                    </div>
                </div>
            </section>
            <Numbers />
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
