import React from "react";

/* ================= PHILOSOPHY CARD ================= */
const PhilosophyCard = ({ icon, title, tagline }) => (
  <div className="group bg-white p-10 rounded-xl shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-2">
    <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-red-100 text-red-600 text-3xl mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600 text-sm">{tagline}</p>
  </div>
);

const About = () => {
  return (
    <div>

      {/* ================= HERO ================= */}
      <section className="relative h-[calc(75vh-80px)] md:h-[calc(80vh-80px)] flex items-center pt-24">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative max-w-7xl mx-auto px-6 w-full mt-6">

          <div className="relative max-w-4xl bg-white shadow-2xl px-14 pt-8 pb-12">

            {/* About Tab */}
            <div className="absolute -top-12 left-0 bg-red-600 text-white px-12 py-5 text-2xl font-bold shadow-lg">
              About Us
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4 leading-tight mt-4">
              We Are Partners <br /> In Your Progress
            </h1>

            <h2 className="text-lg text-gray-500 mb-6">
              Not Just a Service Provider
            </h2>

            <div className="w-16 h-1 bg-red-600 mb-6"></div>

            {/* Reduced SEO Content */}
            <p className="text-gray-600 leading-relaxed mb-5">
              Acura Global Logistics is a trusted logistics company in India,
              delivering freight forwarding, multimodal transportation,
              warehousing, and supply chain solutions since 1998.
            </p>

            <p className="text-gray-600 leading-relaxed mb-5">
              As an experienced third-party logistics (3PL) provider, we serve
              automotive, engineering, FMCG, retail, and industrial sectors with
              reliable domestic and international logistics services.
            </p>

            <p className="text-gray-600 leading-relaxed">
              With a GPS-enabled fleet, advanced tracking systems, and a strong
              pan-India network, we ensure safe, timely, and cost-effective
              movement of consignments across the country.
            </p>

          </div>
        </div>
      </section>

      {/* ================= OUR PHILOSOPHY ================= */}
      <section className="py-24 pb-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Our Philosophy
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <PhilosophyCard
              icon="🎯"
              title="Vision"
              tagline="Leading the future of logistics"
            />
            <PhilosophyCard
              icon="🚀"
              title="Mission"
              tagline="Delivering accuracy & reliability"
            />
            <PhilosophyCard
              icon="💎"
              title="Values"
              tagline="Service • Speed • Safety"
            />
          </div>
        </div>
      </section>

      {/* ================= VISION / MISSION / VALUES DETAILS ================= */}
      <section className="py-24 pt-12 pb-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-10">

          <div className="grid md:grid-cols-4 gap-5 items-start">
            <h3 className="text-3xl font-bold text-red-600 md:col-span-1">
              Vision
            </h3>
            <p className="md:col-span-3 text-gray-700 leading-relaxed">
              We aim to emerge as the torchbearer in the logistics industry.
              Our vision is to establish Acura Global Logistics as the largest
              third-party logistics and transportation company, implement
              innovative solutions, and become the ultimate choice for customers.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-5 items-start">
            <h3 className="text-3xl font-bold text-red-600 md:col-span-1">
              Mission
            </h3>
            <p className="md:col-span-3 text-gray-700 leading-relaxed">
              To provide highly efficient, cost-effective, and global logistics
              solutions through committed professionals, delivering consignments
              safely and on time while promoting teamwork and operational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-5 items-start">
            <h3 className="text-3xl font-bold text-red-600 md:col-span-1">
              Values
            </h3>
            <ul className="md:col-span-3 space-y-3 text-gray-700">
              <li>• Ensure quality while providing services</li>
              <li>• Meet customer deadlines consistently</li>
              <li>• Understand and fulfill client requirements</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= WHAT MAKES US DIFFERENT ================= */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12 text-center">
            What Makes Us Different
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">

            <ul className="grid md:grid-cols-2 gap-6">
              {[
                "Competitive Rates",
                "Industry Experts",
                "GPS-enabled Tracking",
                "On-Time Delivery",
                "Door-to-Door Solutions",
                "Complete Visibility",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-red-600 text-white rounded-full text-sm">
                    ✓
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <img
              src="https://images.unsplash.com/photo-1581091012184-5c4d61f2b4ef?auto=format&fit=crop&w=1000&q=80"
              alt="AGL Fleet"
              className="rounded-xl shadow-2xl"
            />

          </div>
        </div>
      </section>

      {/* ================= OPERATIONAL NETWORK ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10">
            Our Operational Network
          </h2>

          <div className="bg-gray-200 rounded-xl h-[400px] flex items-center justify-center shadow-lg">
            <p className="text-gray-600 px-6">
              Map showing: Aurangabad, Gurgaon, Goa, Kolkata,
              Kolhapur, Mumbai, Surat, Pune, Jamshedpur
            </p>
          </div>
        </div>
      </section>

      {/* ================= MD DESK ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <span className="text-red-600 uppercase tracking-wider font-semibold">
              Leadership Message
            </span>

            <h2 className="text-4xl font-bold mt-3 mb-6">
              From the MD's Desk
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Since our humble beginnings, Acura Global Logistics has grown into
              a trusted logistics partner across industries. Our journey reflects
              transparency, reliability, and long-term partnerships built on trust.
            </p>

            <p className="font-semibold text-gray-800">
              — Managing Director
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=800&q=80"
              alt="Managing Director"
              className="rounded-xl shadow-2xl"
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;