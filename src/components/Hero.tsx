import { HiArrowRight } from 'react-icons/hi';
import { FaPaw, FaBone, FaHeart } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between py-16 px-32 bg-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Paw print trail creating a curved path */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10"
            style={{
              top: `${Math.sin(i * 0.8) * 20 + 30}%`,
              right: `${(i * 15)}%`,
              transform: `rotate(${45 + i * 15}deg)`,
              width: '24px',
              height: '24px'
            }}
          >
            <FaPaw className="w-full h-full text-yellow-600" />
          </div>
        ))}

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-[15%] w-8 h-8 text-pink-300 opacity-40 animate-float">
          <FaHeart className="w-full h-full" />
        </div>
        <div className="absolute bottom-32 right-[20%] w-10 h-10 text-yellow-400 opacity-30 animate-float animation-delay-2000">
          <FaBone className="w-full h-full" />
        </div>
        <div className="absolute top-1/3 right-[35%] w-6 h-6 text-blue-300 opacity-40 animate-float animation-delay-1000">
          <FaPaw className="w-full h-full" />
        </div>
        <div className="absolute bottom-20 left-[30%] w-8 h-8 text-yellow-400 opacity-30 animate-float animation-delay-3000">
          <FaBone className="w-full h-full rotate-45" />
        </div>

        {/* Background accent */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-100 rounded-full opacity-50 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-50 rounded-full opacity-50 blur-3xl" />
      </div>

      <div className="max-w-xl lg:max-w-2xl relative z-10 text-center lg:text-left">
        <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full">
          <FaPaw className="w-4 h-4 text-yellow-600" />
          <span className="text-sm font-medium text-yellow-800">Trusted Pet Care Services</span>
        </div>
        <h1 className="text-[64px] lg:text-[96px] leading-tight font-medium mb-8">
          Best Help For{' '}
          <span className="relative">
            <span className="absolute -z-10 w-[131px] h-[77px] bg-[#ffe32d] rounded-[34px] left-0 top-1/2 transform -translate-y-1/2"></span>
            Your
          </span>{' '}
          Lovely Pets
        </h1>
        <p className="text-lg leading-7 mb-8 text-gray-600">
          Professional and reliable pet care services tailored to your furry friend's needs. 
          Experience peace of mind with our trusted pet sitters.
        </p>
        <button className="bg-[#3dbde5] text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-[#2faad2] transition-colors duration-300 shadow-lg hover:shadow-xl">
          Schedule a call
          <HiArrowRight className="w-5 h-5" />
        </button>
      </div>

      <div className="relative w-full lg:w-[726px] h-[400px] lg:h-[709px] mt-8 lg:mt-0">
        <div className="absolute w-full h-full rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Happy pets" 
            className="object-cover w-full h-full"
          />
          {/* Image overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        {/* Decorative elements for the image */}
        <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-100 rounded-full opacity-50 blur-2xl" />
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full opacity-50 blur-2xl" />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-10px) rotate(5deg); 
          }
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
      `}</style>
    </section>
  );
};

export default Hero;
