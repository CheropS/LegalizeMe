import React from 'react';

const Constitution = () => {
    return (
        <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
            <div className="text-center mb-10">
                <h2 className="text-4xl tracking-tight font-bold text-primary-800">
                    The Constitution of Kenya
                </h2>
            </div>

            <div className="flex flex-col md:flex-row">
                {/* Right Image Section */}
                <div className="mr-0 md:mr-8 mb-6 md:mb-0">
                    <a href="/TheConstitutionOfKenya.pdf">
                        <img
                            className="w-1/2 md:w-full mx-auto border-2 border-gray-200 hover:shadow-lg"
                            src="/constitution.jpeg"
                            alt="Constitution of Kenya"
                        />
                    </a>
                    <p className="mt-2 text-center text-gray-700">
                        Click on the Image to Download the Constitution of Kenya.
                    </p>
                </div>
                
                <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
                    {/* Constitution Content Section */}
                    <div className="w-full mb-4 px-2">
                        <div className="h-full py-4 px-6 border border-red-600 border-t-0 border-l-0 rounded-br-xl">
                            <h3 className="text-2xl font-bold mb-6">Introduction:</h3>
                            <p className="text-sm">
                                <strong>We, the people of Kenya—</strong> Acknowledging the supremacy of the Almighty God of all creation, and recognizing our diversity and commitment to peace, unity, and sustainable development.
                            </p>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 mb-4 px-2">
                        <div className="h-full py-4 px-6 border border-red-600 border-t-0 border-l-0 rounded-br-xl">
                            <h3 className="text-2xl font-bold mb-6">Our Commitment:</h3>
                            <ul className="space-y-2 text-sm list-disc pl-6">
                                <li>Honouring those who fought for our freedom and justice.</li>
                                <li>Proud of our ethnic, cultural, and religious diversity.</li>
                                <li>Respectful of our environment and determined to preserve it.</li>
                                <li>Dedicated to protecting well-being at individual, family, and national levels.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 mb-4 px-2">
                        <div className="h-full py-4 px-6 border border-red-600 border-t-0 border-l-0 rounded-br-xl">
                            <h3 className="text-2xl font-bold mb-6">Our Aspiration:</h3>
                            <p className="text-sm">
                                Recognizing the aspirations of all Kenyans for a government based on human rights, equality, freedom, democracy, social justice, and rule of law.
                            </p>
                        </div>
                    </div>

                    <div className="w-full mb-4 px-2">
                        <div className="h-full py-4 px-6 border border-red-600 border-t-0 border-l-0 rounded-br-xl">
                            <h3 className="text-2xl font-bold mb-6">Download Links:</h3>
                            <div className="space-y-2 text-red-600">
                                <a href="/TheConstitutionOfKenya.pdf" className="block underline hover:text-red-700" target="_blank">
                                    Click to Download the Full Version of the Constitution of Kenya.
                                </a>
                                <a href="/Constitution of Kenya (Repealed).pdf" className="block underline hover:text-red-700" target="_blank">
                                    Click to download the Previous Constitution.
                                </a>
                                <a href="/1963_Constitution.pdf" className="block underline hover:text-red-700" target="_blank">
                                    Click to download the 1963 Constitution.
                                </a>
                                <a href="/amendments" className="block underline hover:text-red-700">
                                    View the Amendments from 1963 to 2010.
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Constitution;
