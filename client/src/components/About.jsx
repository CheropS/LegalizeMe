import { useState } from 'react';
import PropTypes from 'prop-types';
import bannerImage from '/about.jpg';

const AboutUs = () => {
    const stats = [
        { id: 1, name: 'Global Users', value: '10M+' },
        { id: 2, name: 'Active Projects', value: '1.2K+' },
        { id: 3, name: 'Support Staff', value: '24/7' },
    ];

    return (
        <div>
            {/* Banner Image */}
            <div className="relative h-[400px]">
                <img
                    src={bannerImage}
                    alt="Banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-white text-5xl font-bold animate-fadeIn">About LegalizeMe</h1>
                </div>
            </div>

            {/* Header */}
            <div className="bg-white py-12 animate-slideIn">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
                    <p className="mt-4 text-lg text-gray-600">
                        LegalizeMe is a global leader in customer support and service excellence. We are committed to providing top-notch services to our clients worldwide.
                    </p>
                </div>
            </div>

            {/* Accordion Section */}
            <div className="bg-white py-12 animate-fadeInUp">
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

            {/* Stats Section */}
            <div className="bg-gray-50 py-16 animate-fadeInUp delay-100">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        {stats.map((stat) => (
                            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
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
