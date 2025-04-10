import { useEffect } from "react";
import flan from "../../flan.svg";

function Navbar({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: Function }) {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-40 bg-gray-800 backdrop-blur-lg border-b-white-10 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="font-mono text-xl font-bold text-white">
              <img className="inline me-2" src={flan} width={26} height={26} alt="" />
              Flan<span className="text-blue-500">.Dev</span>
            </a>
            <div
              className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-white text-md"
              onClick={() => {
                setMenuOpen((prev: boolean) => !prev);
              }}
            >
              &#9776;
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#contacts" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
