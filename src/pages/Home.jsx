import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation, FreeMode } from "swiper/modules";
import { useState, useEffect, useRef } from "react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

/* ================= LOGO IMPORTS ================= */

import cie from "../assets/logos/CIE_logo.png";
import cummins from "../assets/logos/Cummins_logo.png";
import johnDeere from "../assets/logos/john_deere_logo.png";
import kirloskar from "../assets/logos/kirloskar_logo.png";
import lear from "../assets/logos/Lear_Corporation_logo.png";
import tataMotors from "../assets/logos/tata_motors_logo.png";
import thermax from "../assets/logos/Thermax_logo.png";

/* ================= CTA BACKGROUND ================= */

import ctaBg from "../assets/images/agl-cta-background.png";

/* ================= HOME ================= */

const Home = () => {
  const clientLogos = [
    { name: "Tata Motors", url: tataMotors },
    { name: "Cummins", url: cummins },
    { name: "Lear Corporation", url: lear },
    { name: "Thermax", url: thermax },
    { name: "Kirloskar", url: kirloskar },
    { name: "John Deere", url: johnDeere },
    { name: "Mahindra CIE", url: cie },
  ];

  return (
    <div>

      {/* ================= HERO ================= */}
      <section className="relative h-[65vh] md:h-[70vh]">        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="h-full pb-16 [&_.swiper-pagination]:bottom-6"
        >
          {[
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80",
            "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1920&q=80",
            "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1920&q=80",
          ].map((img, i) => (
            <SwiperSlide key={i}>
              <HeroSlide image={img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="pt-12 pb-12 bg-gray-100">        <div className="max-w-[1500px] mx-auto px-6 lg:px-20 relative">

          <div className="text-center mb-5">
            <h2 className="text-4xl font-bold mb-6">
              Our Core Logistics Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We provide comprehensive freight forwarding, industrial transport,
              project logistics and supply chain solutions tailored for
              domestic and international markets.
            </p>
          </div>

          <div className="relative">

            {/* LEFT ARROW */}
            <div className="service-prev hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 cursor-pointer">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 hover:scale-110 transition duration-300">
                <span className="text-white text-2xl">&#10094;</span>
              </div>
            </div>

            {/* RIGHT ARROW */}
            <div className="service-next hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 cursor-pointer">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 hover:scale-110 transition duration-300">
                <span className="text-white text-2xl">&#10095;</span>
              </div>
            </div>

            <Swiper
              modules={[Autoplay, Navigation]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              navigation={{
                nextEl: ".service-next",
                prevEl: ".service-prev",
              }}
              loop
              spaceBetween={40}
              slidesPerView={1}
              className="px-6"
            >

              {/* SLIDE 1 */}
              <SwiperSlide>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-10">

                  <ServiceCard
                    title="Freight Forwarding Services"
                    image="https://images.unsplash.com/photo-1601582585289-9b7e5e86b4e4?auto=format&fit=crop&w=800&q=80"
                    description="Comprehensive air freight, ocean freight and road transportation services with customs clearance and global supply chain coordination."
                  />

                  <ServiceCard
                    title="Over Dimensional Cargo (ODC)"
                    image="https://images.unsplash.com/photo-1592833159059-d6f1b6cfc1d7?auto=format&fit=crop&w=800&q=80"
                    description="Heavy haul transportation and oversized cargo handling including route surveys and turnkey project execution."
                  />

                  <ServiceCard
                    title="Express Time-Bound Deliveries"
                    image="https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80"
                    description="Time-critical logistics with dedicated fleet management and real-time shipment tracking."
                  />

                </div>
              </SwiperSlide>

              {/* SLIDE 2 */}
              <SwiperSlide>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-10">

                  <ServiceCard
                    title="FTL & PTL Transport Solutions"
                    image="https://images.unsplash.com/photo-1605902711622-cfb43c44367f?auto=format&fit=crop&w=800&q=80"
                    description="Reliable Full Truck Load and Part Truck Load services with optimized routing and nationwide coverage."
                  />

                  <ServiceCard
                    title="Industrial & Project Logistics"
                    image="https://images.unsplash.com/photo-1586521995568-39d7a8f4bba4?auto=format&fit=crop&w=800&q=80"
                    description="Complete industrial logistics management including warehousing and multimodal transport integration."
                  />

                  <ServiceCard
                    title="GPS & Telematics Tracking"
                    image="https://images.unsplash.com/photo-1581090700227-1e8d0b04cdb1?auto=format&fit=crop&w=800&q=80"
                    description="Advanced fleet monitoring, route optimization and shipment visibility using cutting-edge telematics technology."
                  />

                </div>
              </SwiperSlide>

            </Swiper>

            {/* SERVICES BUTTON */}
            <div className="text-center mt-6">
              <NavLink
                to="/services"
                className="inline-block bg-red-600 text-white px-10 py-4 rounded-lg font-semibold shadow-md hover:bg-red-700 hover:scale-105 transition duration-300"
              >
                Our Services
              </NavLink>
            </div>

          </div>
        </div>
      </section>

      {/* ================= COUNTER ================= */}
      <section className="pt-6 pb-12 bg-white">        <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <CounterCard number={15} suffix="+" label="Years of Experience" />
            <CounterCard number={12000} suffix="+" label="Successful Deliveries" />
            <CounterCard number={350} suffix="+" label="Fleet Vehicles" />
            <CounterCard number={2500} suffix="+" label="Satisfied Clients" />
          </div>
        </div>
      </section>

      {/* ================= CLIENT LOGOS ================= */}
      <section className="pt-8 pb-10 bg-blue-50">
  <div className="max-w-[1400px] mx-auto px-20">

    <div className="w-20 h-1 bg-[#0b1c2d] mx-auto mb-6 rounded-full"></div>

    <h2 className="text-3xl font-bold text-center mb-8">
      Trusted By Industry Leaders
    </h2>
          <Swiper
            modules={[Autoplay, FreeMode]}
            slidesPerView={5}
            spaceBetween={40}
            loop
            speed={3000}
            autoplay={{ delay: 1, disableOnInteraction: false }}
            freeMode
            freeModeMomentum={false}
            breakpoints={{
              0: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
          >
            {clientLogos.map((logo, i) => (
              <SwiperSlide key={i}>
                <div className="flex items-center justify-center h-20">
                  <img
                    src={logo.url}
                    alt={logo.name}
                    loading="lazy"
                    className="h-12 object-contain hover:scale-110 transition"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section
        className="relative py-28 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaBg})` }}
      >
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative text-center text-white max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Think Logistics. Think AGL.
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            Acura Global Logistics delivers reliable, scalable and efficient
            supply chain solutions across industries and global markets.
          </p>
          <NavLink
            to="/contact"
            className="bg-red-600 px-10 py-4 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Request a Quote
          </NavLink>
        </div>
      </section>

    </div>
  );
};

/* ================= HERO ================= */

const HeroSlide = ({ image }) => (
  <div
    className="relative h-full bg-cover bg-center flex items-center"
    style={{ backgroundImage: `url(${image})` }}
  >
    <div className="absolute inset-0 bg-black/65" />
    <div className="relative max-w-7xl mx-auto px-6 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Acura Global Logisctics
      </h1>
      <h2 className="text-3xl md:text-3xl font-semibold text-white mb-8">
        Whatever Be Your Logistics Need, We Have You Covered!
      </h2>
    </div>
  </div>
);

/* ================= SERVICE CARD ================= */

/* ================= SERVICE CARD ================= */

const ServiceCard = ({ title, image, description }) => (
  <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-10 flex flex-col h-full transform hover:-translate-y-3">

    {/* Title */}
    <h3 className="text-lg font-bold uppercase tracking-wide text-gray-900 mb-6 group-hover:text-red-600 transition duration-300">
      {title}
    </h3>

    {/* Image */}
    <div className="overflow-hidden rounded-xl mb-6">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transition duration-500 group-hover:scale-105"
      />
    </div>

    {/* Description */}
    <p className="text-gray-600 leading-relaxed text-base flex-grow">
      {description}
    </p>

    {/* 🔥 Animated Red Line */}
    <div className="h-1 w-0 bg-red-600 mt-6 transition-all duration-500 group-hover:w-full"></div>

  </div>
);

/* ================= COUNTER CARD ================= */

const CounterCard = ({ number, suffix, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    let current = 0;
    const duration = 1500;
    const increment = number / (duration / 16);

    const counter = setInterval(() => {
      current += increment;
      if (current >= number) {
        setCount(number);
        clearInterval(counter);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [visible, number]);

  return (
    <div ref={ref}>
      <h3 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
        {count.toLocaleString()}
        {suffix}
      </h3>
      <p className="text-gray-600 uppercase tracking-wide text-sm">
        {label}
      </p>
    </div>
  );
};

export default Home;
