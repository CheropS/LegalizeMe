import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Solutions = () => {
    return (
        <>
            <Navbar />
            <section className="py-10 bg-gray-100 sm:py-16 lg:py-24 font-roboto animate-fadeIn">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">How do we create success</h2>
                        <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
                    </div>

                    <ul className="max-w-md mx-auto mt-16 space-y-12">
                        <li className="relative flex items-start">
                            <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>

                            <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                                <svg className="w-10 h-10 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div className="ml-6">
                                <h3 className="text-lg font-semibold text-black">Create a free account</h3>
                                <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            </div>
                        </li>

                        <li className="relative flex items-start">
                            <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>

                            <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                                <svg className="w-10 h-10 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                </svg>
                            </div>
                            <div className="ml-6">
                                <h3 className="text-lg font-semibold text-black">Build your website</h3>
                                <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            </div>
                        </li>

                        <li className="relative flex items-start">
                            <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                                <svg className="w-10 h-10 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div className="ml-6">
                                <h3 className="text-lg font-semibold text-black">Release & launch</h3>
                                <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="py-10 bg-gray-100 sm:py-16 lg:py-24 animate-fadeIn font-roboto">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">Trusted by <span className="text-blue-600">30k+</span> world className companies & design teams</h2>
                    </div>

                    <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
                        <div className="overflow-hidden bg-white rounded-md shadow">
                            <div className="px-8 py-12">
                                <div className="relative w-24 h-24 mx-auto">
                                    <img className="relative object-cover w-24 h-24 mx-auto rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg" alt="" />
                                    <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                                        <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <blockquote className="mt-7">
                                    <p className="text-lg text-black">“Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat”</p>
                                </blockquote>
                                <p className="text-base font-semibold tex-tblack mt-9">Jenny Wilson</p>
                                <p className="mt-1 text-base text-gray-600">Project Manager at Microsoft</p>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-white rounded-md shadow">
                            <div className="px-8 py-12">
                                <div className="relative w-24 h-24 mx-auto">
                                    <img className="relative object-cover w-24 h-24 mx-auto rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-2.jpg" alt="" />
                                    <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                                        <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <blockquote className="mt-7">
                                    <p className="text-lg text-black">“Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat”</p>
                                </blockquote>
                                <p className="text-base font-semibold tex-tblack mt-9">Robert Fox</p>
                                <p className="mt-1 text-base text-gray-600">Founder at Brain.co</p>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-white rounded-md shadow">
                            <div className="px-8 py-12">
                                <div className="relative w-24 h-24 mx-auto">
                                    <img className="relative object-cover w-24 h-24 mx-auto rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-3.jpg" alt="" />
                                    <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                                        <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <blockquote className="mt-7">
                                    <p className="text-lg text-black">“Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat”</p>
                                </blockquote>
                                <p className="text-base font-semibold tex-tblack mt-9">Kristin Watson</p>
                                <p className="mt-1 text-base text-gray-600">UX Designer at Google</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </>
    );
}

export default Solutions;