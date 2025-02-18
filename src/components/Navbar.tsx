// here I am importing the logo
import DogLogo from '../assets/dog-logo.svg';
import { MdLanguage, MdMenu } from 'react-icons/md';
import { IoMdArrowDropdown } from 'react-icons/io';

const Navbar = () => {
  return (
    <nav className="w-full px-8 py-2 border border-[#d9d9d9] rounded-[15px] flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded">
            <img src={DogLogo} alt="Petme Logo" className="w-14 h-14" />                
          </div>
          <span className="text-3xl font-semibold">Petme</span>
        </div>
        <div className="flex items-center gap-8">
          <a href="#about" className="text-xl font-medium">About</a>
          <a href="#services" className="text-xl font-medium">Services</a>
          <a href="#accessories" className="text-xl font-medium">Accessories</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <MdLanguage className="w-6 h-6" />
          <span className="text-xl font-medium">ENG</span>
          <IoMdArrowDropdown className="w-4 h-4" />
        </div>
        <button className="p-2">
          <MdMenu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
