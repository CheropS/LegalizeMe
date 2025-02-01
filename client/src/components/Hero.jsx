import React from 'react';

const Hero = () => {
    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24 animate-fadeIn font-montserrat">
            <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
                    <div className="pr-12 sm:pr-0">
                        <div className="relative max-w-xs mb-12">
                            <img className="object-bottom rounded-md" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/man-eating-noodles.jpg" alt="" />

                            <img className="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/smiling-businessman.jpg" alt="" />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Grow with LegalizeMe</h2>
                        <p className="mt-4 text-base leading-relaxed text-gray-600">Our platform is designed to provide you with the best legal
                            experience possible. We are committed to making the law
                            accessible to everyone, everywhere. LegalizeMe is the future
                            of law, today.</p>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Hero;