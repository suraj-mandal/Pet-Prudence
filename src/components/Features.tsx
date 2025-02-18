import { BiSupport } from 'react-icons/bi';
import { FaUserShield, FaPaw, FaHandsHelping, FaBone, FaHeart } from 'react-icons/fa';
import { RiMoneyDollarCircleLine, RiHeart2Line } from 'react-icons/ri';

const Features = () => {
  const features = [
    {
      title: "24/7 Support",
      description: "Our team is available around the clock to assist you with any needs.",
      icon: <BiSupport className="w-12 h-12" />
    },
    {
      title: "Trusted Professionals",
      description: "All our staff are trained and certified to provide the best care.",
      icon: <FaUserShield className="w-12 h-12" />
    },
    {
      title: "Affordable Pricing",
      description: "We offer competitive pricing without compromising on quality.",
      icon: <RiMoneyDollarCircleLine className="w-12 h-12" />
    },
    {
      title: "Personalized Care",
      description: "Tailored services to meet the unique needs of your pet.",
      icon: <RiHeart2Line className="w-12 h-12" />
    },
    {
      title: "Pet Safety",
      description: "Ensuring the safety and well-being of your pet is our top priority.",
      icon: <FaPaw className="w-12 h-12" />
    },
    {
      title: "Community Engagement",
      description: "We actively participate in community events and support local shelters.",
      icon: <FaHandsHelping className="w-12 h-12" />
    }
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden" id="features">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e0f7fa] via-blue-50/30 to-cyan-50/20 pointer-events-none"></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Paw Prints */}
        <div className="absolute top-0 left-0 w-24 h-24 text-blue-200/40 opacity-70 animate-paw">
          <FaPaw className="w-full h-full" />
        </div>
        <div className="absolute top-0 right-0 w-24 h-24 text-cyan-200/40 opacity-70 animate-paw animation-delay-2000">
          <FaPaw className="w-full h-full" />
        </div>
        <div className="absolute -bottom-8 left-20 w-24 h-24 text-sky-200/40 opacity-70 animate-paw animation-delay-4000">
          <FaPaw className="w-full h-full" />
        </div>

        {/* Floating Bones */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 text-pink-100 opacity-50 animate-float">
          <FaBone className="w-full h-full" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 text-purple-100 opacity-40 animate-float animation-delay-2000">
          <FaBone className="w-full h-full" />
        </div>

        {/* Floating Hearts */}
        <div className="absolute top-1/3 left-1/4 w-10 h-10 text-red-100 opacity-40 animate-float animation-delay-3000">
          <FaHeart className="w-full h-full" />
        </div>
        <div className="absolute bottom-1/3 right-1/3 w-8 h-8 text-red-100 opacity-30 animate-float animation-delay-1000">
          <FaHeart className="w-full h-full" />
        </div>
      </div>

      {/* Add subtle mesh gradient */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/20 via-transparent to-cyan-100/20"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-sky-100/10 to-transparent"></div>
      </div>

      <div className="relative max-w-[1920px] mx-auto px-4"> {/* Increased from 1440px */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-medium mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Our Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the unique features that set us apart from the rest
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-32">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-bl-[100px] rounded-tr-2xl -z-10 group-hover:scale-110 transition-transform duration-300"></div>
              
              {/* Paw print background accent */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 text-gray-50 opacity-30 transform rotate-12">
                <FaPaw className="w-full h-full" />
              </div>
              
              <div className="relative">
                <div className="text-[#3dbde5] mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-medium mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes paw {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes float {
          0% { transform: translate(0px, 0px) rotate(0deg); }
          33% { transform: translate(10px, -15px) rotate(10deg); }
          66% { transform: translate(-5px, 10px) rotate(-5deg); }
          100% { transform: translate(0px, 0px) rotate(0deg); }
        }
        .animate-paw {
          animation: paw 7s infinite;
        }
        .animate-float {
          animation: float 6s infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      ` as unknown as React.ReactNode}</style>
    </section>
  );
};

export default Features;
