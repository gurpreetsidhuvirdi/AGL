import { NavLink } from "react-router-dom";
import AGLLogo from "../assets/logos/AGL_logo.png";

const Navbar = () => {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo + Name */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={AGLLogo}
            alt="AGL Logo"
            className="h-10 w-auto"
          />
          <span className="text-2xl font-bold text-red-700">
            Acura Global Logistics
          </span>
        </NavLink>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-lg">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-semibold text-red-700" : "hover:text-red-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "font-semibold text-red-700" : "hover:text-red-600"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "font-semibold text-red-700" : "hover:text-red-600"
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/why-choose-us"
            className={({ isActive }) =>
              isActive ? "font-semibold text-red-700" : "hover:text-red-600"
            }
          >
            Why Choose Us
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "font-semibold text-red-700" : "hover:text-red-600"
            }
          >
            Contact
          </NavLink>

        </nav>

        {/* CTA Button */}
        <NavLink
          to="/contact"
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition font-semibold shadow-md"
        >
          Get a Quote
        </NavLink>

      </div>
    </header>
  );
};

export default Navbar;