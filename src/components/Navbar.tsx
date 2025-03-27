
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 shadow-sm" : "bg-transparent"}`}>
      <div className="container-padding mx-auto">
        <nav className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center">
            <h1 className={`text-2xl font-serif font-bold ${scrolled ? "text-califblack" : "text-white"}`}>
              Calif<span className="text-califgreen">Bites</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`${scrolled ? "text-califblack hover:text-califgreen" : "nav-link"} ${isActive("/") ? (scrolled ? "text-califgreen" : "nav-link-active") : ""}`}>Home</Link>
            <Link to="/about" className={`${scrolled ? "text-califblack hover:text-califgreen" : "nav-link"} ${isActive("/about") ? (scrolled ? "text-califgreen" : "nav-link-active") : ""}`}>About</Link>
            <Link to="/services" className={`${scrolled ? "text-califblack hover:text-califgreen" : "nav-link"} ${isActive("/services") ? (scrolled ? "text-califgreen" : "nav-link-active") : ""}`}>Services</Link>
            <Link to="/menu" className={`${scrolled ? "text-califblack hover:text-califgreen" : "nav-link"} ${isActive("/menu") ? (scrolled ? "text-califgreen" : "nav-link-active") : ""}`}>Menu</Link>
            <Link to="/contact" className={`${scrolled ? "text-califblack hover:text-califgreen" : "nav-link"} ${isActive("/contact") ? (scrolled ? "text-califgreen" : "nav-link-active") : ""}`}>Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`md:hidden p-2 focus:outline-none ${scrolled ? "text-califblack" : "text-white"}`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 glass-effect pt-20 animate-fade-in">
          <nav className="flex flex-col items-center space-y-6 py-8">
            <Link to="/" onClick={closeMenu} className={`text-xl ${isActive("/") ? "text-califgreen font-medium" : "text-white"}`}>Home</Link>
            <Link to="/about" onClick={closeMenu} className={`text-xl ${isActive("/about") ? "text-califgreen font-medium" : "text-white"}`}>About</Link>
            <Link to="/services" onClick={closeMenu} className={`text-xl ${isActive("/services") ? "text-califgreen font-medium" : "text-white"}`}>Services</Link>
            <Link to="/menu" onClick={closeMenu} className={`text-xl ${isActive("/menu") ? "text-califgreen font-medium" : "text-white"}`}>Menu</Link>
            <Link to="/contact" onClick={closeMenu} className={`text-xl ${isActive("/contact") ? "text-califgreen font-medium" : "text-white"}`}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
