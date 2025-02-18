import { FaPaw } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Dog Owner",
      text: "The pet sitting service was amazing! My dog was so happy and well-cared for while I was away.",
      image: "https://i.pravatar.cc/100?img=1",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Cat Owner",
      text: "Professional and reliable service. I can always count on them to take great care of my cats.",
      image: "https://i.pravatar.cc/100?img=2",
      rating: 5
    },
    {
      name: "Emma Wilson",
      role: "Dog Owner",
      text: "The dog walking service is fantastic! My energetic pup gets the exercise they need.",
      image: "https://i.pravatar.cc/100?img=3",
      rating: 5
    }
  ];

  const StarIcon = () => (
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-[#ffe9e9] via-[#fff5f5] to-[#e0f7fa]" id="testimonials">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Paw print trail */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10"
            style={{
              top: `${Math.sin(i * 0.8) * 20 + 50}%`,
              left: `${(i * 15)}%`,
              transform: `rotate(${30 * Math.sin(i * 0.5)}deg)`,
              width: '40px',
              height: '40px'
            }}
          >
            <FaPaw className="w-full h-full text-pink-400" />
          </div>
        ))}
      </div>

      <div className="relative max-w-[1440px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-medium mb-4 bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Card decorative elements */}
              <div className="absolute -top-3 -left-3 w-24 h-24 bg-pink-100 rounded-full opacity-50 blur-xl group-hover:bg-pink-200 transition-colors duration-300" />
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-rose-100 rounded-full opacity-50 blur-xl group-hover:bg-rose-200 transition-colors duration-300" />
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="relative w-16 h-16 rounded-full object-cover border-2 border-white"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-md">
                      <FaPaw className="w-4 h-4 text-pink-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-800">{testimonial.name}</h3>
                    <p className="text-rose-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed relative">
                  <span className="absolute -top-3 -left-2 text-4xl text-pink-200">"</span>
                  {testimonial.text}
                  <span className="absolute -bottom-3 -right-2 text-4xl text-pink-200">"</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
