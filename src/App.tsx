import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full font-['IBM Plex Sans']">
      <div className="max-w-[1920px] mx-auto px-4"> {/* Increased from 1440px to 1920px */}
        <Navbar />
      </div>
      <Hero />
      <Services />
      <Testimonials />
      <Features />
      <Footer />
    </div>
  );
}

export default App;