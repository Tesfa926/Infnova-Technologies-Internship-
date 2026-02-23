import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-8 h-[80px] flex items-center justify-between">
        
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Infnova Logo"
          className="h-8 object-contain"
        />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-[32px] text-[16px] font-normal text-gray-700">
          <a href="#" className="hover:text-black transition cursor-pointer">
            Courses
          </a>
          <a href="#" className="hover:text-black transition cursor-pointer">
            About
          </a>
          <a href="#" className="hover:text-black transition cursor-pointer">
            Contact
          </a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-[16px]">
          <button className="text-[#F54900] text-[16px] font-normal h-[40px] cursor-pointer hover:opacity-80 transition">
            Sign In
          </button>

          <button className="bg-[#F54900] text-white text-[16px] font-medium h-[40px] px-6 rounded-[10px] cursor-pointer hover:brightness-95 transition">
            Enroll Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden cursor-pointer text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-8 py-8">
          <div className="flex flex-col items-center gap-6 text-[16px] text-gray-700">
            <a href="#" className="cursor-pointer">
              Courses
            </a>
            <a href="#" className="cursor-pointer">
              About
            </a>
            <a href="#" className="cursor-pointer">
              Contact
            </a>

            <div className="w-full flex flex-col items-center gap-4 pt-6 border-t border-gray-200">
              <button className="text-[#F54900] h-[40px] font-normal cursor-pointer">
                Sign In
              </button>

              <button className="bg-[#F54900] text-white h-[40px] px-6 rounded-[10px] font-medium cursor-pointer">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;