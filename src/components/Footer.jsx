import { NavLink } from "react-router-dom";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b1c2d] text-white">

      {/* ================= SOCIAL ICONS ================= */}
      <div className="flex justify-center gap-6 pt-8 pb-6">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:bg-red-600 hover:border-red-600 transition-all duration-300"
        >
          <FaLinkedinIn className="text-sm" />
        </a>

        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:bg-red-600 hover:border-red-600 transition-all duration-300"
        >
          <FaFacebookF className="text-sm" />
        </a>

        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:bg-red-600 hover:border-red-600 transition-all duration-300"
        >
          <FaInstagram className="text-sm" />
        </a>
      </div>

      {/* ================= MAIN FOOTER CONTENT ================= */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 pb-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

        {/* LEFT COLUMN */}
        <div className="md:text-left text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 tracking-wide">
            Acura Global Logistics
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm md:max-w-sm mx-auto md:mx-0">
            Delivering reliable, efficient and scalable logistics solutions
            across domestic and international markets.
          </p>
        </div>

        {/* CENTER COLUMN */}
        <div className="md:text-center text-center">
          <h4 className="text-lg md:text-xl font-semibold mb-4 tracking-wide">
            Quick Links
          </h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>
              <NavLink to="/" className="hover:text-red-500 transition">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-red-500 transition">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-red-500 transition">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-red-500 transition">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* RIGHT COLUMN */}
        <div className="md:text-right text-center">
          <h4 className="text-lg md:text-xl font-semibold mb-4 tracking-wide">
            Location
          </h4>
          <p className="text-gray-400 leading-relaxed text-sm">
            Pune, Maharashtra<br />
            India<br /><br />
            info@agl.com<br />
            +91 98765 43210
          </p>
        </div>

      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="border-t border-gray-800 py-5 text-center text-gray-500 text-xs md:text-sm">
        © {new Date().getFullYear()} Acura Global Logistics. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;