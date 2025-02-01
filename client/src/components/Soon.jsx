import Slider from "react-slick";

function Soon() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Tablet
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Desktop
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cardsData = [
    {
      id: "01",
      title: "AI-Powered Document Generation",
      description:
        "Harnessing cutting-edge LLM technology to instantly generate accurate legal documents, with the future potential to answer your legal queries.",
    },
    {
      id: "02",
      title: "Contract Analysis",
      description:
        "Automated contract analysis, extracting critical insights to help you make smarter decisions.",
    },
    {
      id: "03",
      title: "Legal references",
      description:
        "Seamless access to legal references and case laws, tailored to your needs.",
    },
  ];

  return (
    <section className="bg-gray-200 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
          <h2 className="mb-3 text-2xl font-bold leading-[1.2] text-dark dark:text-black sm:text-4xl md:text-[40px] animate-fadeIn">
            The Future of Legal Tech is Here
          </h2>
          <p className="text-base text-body-color dark:text-dark-6 animate-fadeIn">
            The best is yet to come. Brace yourself for groundbreaking
            innovations that will revolutionize the legal industry. Stay tuned
            for exciting updates and announcements.
          </p>
        </div>
        <Slider {...settings} className="animate-fadeIn font-montserrat">
          {cardsData.map((card) => (
            <div key={card.id} className="px-4">
              <div className="rounded-md bg-white shadow-md p-8 h-[250px] flex flex-col justify-between">
                <div className="text-4xl font-bold text-purple-600 mb-4">
                  {card.id}
                </div>
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Soon;
