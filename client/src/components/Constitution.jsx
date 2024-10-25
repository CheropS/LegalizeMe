import React from 'react';

const Constitution = () => {
    return (
        <section className="py-10 sm:py-16 lg:py-24 bg-gray-100 font-roboto animate-fadeIn">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Text Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-red-600">
                            The Constitution of Kenya
                        </h2>

                        <p className="mt-4 text-lg text-gray-900">
                            <strong>We, the people of Kenya—</strong>
                        </p>

                        <p className="mt-4 text-lg text-gray-900">
                            Acknowledging the supremacy of the Almighty God of all creation:
                        </p>

                        <ul className="mt-4 space-y-2 text-lg text-gray-900 list-disc pl-6">
                            <li>
                                <strong>Honouring</strong> those who heroically struggled to bring freedom and justice to our land:
                            </li>
                            <li>
                                <strong>Proud</strong> of our ethnic, cultural, and religious diversity, and determined to live in peace and unity as one indivisible sovereign nation:
                            </li>
                            <li>
                                <strong>Respectful</strong> of the environment, which is our heritage, and determined to sustain it for the benefit of future generations:
                            </li>
                            <li>
                                <strong>Committed</strong> to nurturing and protecting the well-being of the individual, the family, communities, and the nation:
                            </li>
                            <li>
                                <strong>Recognising</strong> the aspirations of all Kenyans for a government based on the essential values of human rights, equality, freedom, democracy, social justice, and the rule of law:
                            </li>
                            <li>
                                <strong>Exercising</strong> our sovereign and inalienable right to determine the form of governance of our country and having participated fully in the making of this Constitution:
                            </li>
                            <li>
                                <strong>Adopt, Enact</strong> and give this Constitution to ourselves and to our future generations.
                            </li>
                        </ul>

                        {/* Download Links */}
                        <div className="mt-8 space-y-2 text-red-600">
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
                                Click to view The Amendments of the Constitution of Kenya (Repealed) from 1963 to 2010.
                            </a>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="flex justify-center px-4">
                        <a href="/TheConstitutionOfKenya.pdf">
                            <img
                                className="w-80 h-auto border-2 border-gray-200 hover:shadow-lg"
                                src="/constitution.jpeg"
                                alt="Constitution of Kenya"
                            />
                        </a>
                        <p className="mt-2 text-right py-60 text-gray-700">
                            Click on the Image to Download the Constitution of Kenya.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Constitution;
