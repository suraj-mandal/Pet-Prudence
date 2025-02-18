import { MdPets, MdDirectionsWalk, MdContentCut } from 'react-icons/md';

const Services = () => {
  const serviceCards = [
    {
      title: "Pet Sitting",
      description: "Professional pet sitters who will treat your pet like family",
      icon: <MdPets className="w-12 h-12 text-yellow-700" />
    },
    {
      title: "Dog Walking",
      description: "Regular walks to keep your dog healthy and happy",
      icon: <MdDirectionsWalk className="w-12 h-12 text-yellow-700" />
    },
    {
      title: "Pet Grooming",
      description: "Professional grooming services for all breeds",
      icon: <MdContentCut className="w-12 h-12 text-yellow-700" />
    }
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-white via-pink-50/30 to-[#ffe9e9]" id="services">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Paw Prints */}
        <div className="absolute top-10 left-10 w-16 h-16 text-pink-200 opacity-50 animate-float">
          <MdPets className="w-full h-full" />
        </div>
        <div className="absolute bottom-10 right-10 w-16 h-16 text-pink-200 opacity-50 animate-float animation-delay-2000">
          <MdDirectionsWalk className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 text-pink-200 opacity-50 animate-float animation-delay-4000">
          <MdContentCut className="w-full h-full" />
        </div>
      </div>

      {/* Add subtle mesh gradient */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-100/20 via-transparent to-rose-100/20"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-pink-100/10 to-transparent"></div>
      </div>

      <div className="relative max-w-[1920px] mx-auto px-4"> {/* Increased from 1440px */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-medium mb-4 bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We offer professional pet care services customized to your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-32">
          {serviceCards.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-50 to-rose-50 rounded-bl-[100px] rounded-tr-2xl -z-10 group-hover:scale-110 transition-transform duration-300"></div>
              
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-medium mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-rose-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      ` as unknown as React.ReactNode}</style>
    </section>
  );
};

export default Services;
