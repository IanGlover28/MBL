import React, { useState, useEffect } from "react";

import { Facebook,  Instagram, } from "lucide-react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import ScrollFloat from './ScrollFloat';
import Chatbot from "./Chatbot";

import "tachyons";
import { motion } from "framer-motion";

import image0 from "./images/image0.jpg";
import air from "./images/air.jpg";
import sea from "./images/sea.jpg";
import logo1 from "./images/logo1.png";
import land from "./images/land.jpg";

import intermodal from "./images/intermodal.jpg"


const images = [
  require("./images/image1.jpg"),
  require("./images/image2.jpg"),
  require("./images/image3.jpg"),
  require("./images/image4.jpg"),
];


const NavLink = ({ label }) => {
  return (
    <div>
    <button className="dib white mx-20 bg-blue flex flex-col pa2 ma2 br-pill grow shadow-3">
      <a href={`#${label.toLowerCase()}`} className=" white no-underline ">
        {label}
      </a>
    </button>
  </div>
  
  );
};



const App = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
 
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-column items-center bg-light-gray min-vh-100">
      {/* Navigation Bar */}
     
      <nav
  className="fixed top-0 left-50 translate-x--50 w-90 flex justify-between items-center pa3 glass-transparent"
  style={{
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
    // background: "rgba(255, 255, 255, 0.5)",
  }}
>
  <img src={logo1} alt="Company Logo" className="br3 w3 w4-ns" />
  <div className="dn flex-ns hidden md:flex space-x-6 ">
  {["Home", "Services", "About", "Contact"].map((label, index) => (
    <NavLink key={index} label={label}  />
  ))}
</div>

<div className="db dn-ns">
<button
        className="md:hidden bg-transparent border-none cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-200 px-4 py-2 rounded-lg"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>
       {/* Mobile Dropdown Menu */}
       {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-transparent shadow-lg flex flex-col items-center space-y-4 py-4 transition-all duration-300 rounded-b-xl md:hidden">
          {["Home", "Services", "About", "Contact"].map((label) => (
            <NavLink key={label} label={label} />
          ))}
        </div>
      )}
</div>

</nav>


      {/* Hero Section */}
      <section
  id="home"
  className="w-100 flex flex-column flex-row-l items-center justify-center vh-100 ph3"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image0})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <motion.div 
    className="w-100 w-50-l ph3 tc mt5"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h1 className="f2 f-headline-l f1-l fw7 white font-serif">Marine Broadlink Ghana</h1>
    <p className="f5 f4-l fw5 white-80">Your trusted Ghanaian custom agency to partner for smooth and secure Services.</p>
    <div className="flex justify-center">
      <motion.a
      href="tel:+233542119400"
        className="dib white bg-blue pa3 br-pill grow shadow-3 no-underline"
        
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        📞Call Us
      </motion.a>
    </div>
      {/* Three Features with Spacing */}
      <div className="mt4 flex flex-row items-start gap-4 justify-center">
        <p className="f5 white-70 mb3 ">✔️ High Reliability</p>
        <p className="f5 white-70 mb3 ml3">🌍 Global Coverage</p>
        <p className="f5 white-70 ml3">⚡ Faster Response</p>
      </div>
  </motion.div>

  
</section>




      {/* Services Section */}
      <section id="services" className=" flex flex-column items-center justify-center ph3 pv5">
  <h2 className="f2 mb4">Our Services</h2>
  <div className="flex flex-wrap justify-center w-100">
    {[
      
      { name: "Customs Clearance", desc: " Our Customs Clearing service ensures a smooth and hassle-free process for importing and exporting goods. We handle all documentation, duty payments, and compliance with Ghana Revenue Authority (GRA) regulations, ensuring your shipments are cleared efficiently without delays." },
      { name: "Freight Forwarding", desc: "We offer various freight forwarding options for efficient logistics." },
      { name: "Product Registration", desc: "Getting your products registered can be a complex and time-consuming process, but we make it fast, hassle-free, and fully compliant with all regulatory requirements." },
      { name: "Business Registration", desc: "Assisting entrepreneurs in registering their businesses with the Registrar General's Department." },
      { name: "Consultation", desc: "Expert advice on clearing, forwarding, and logistics strategies.📞 Contact us now for a free consultation! " }
    ].map((service, index) => (
      <motion.div
        key={index}
        className={`pa3 ${service.name === "Freight Forwarding" ? "w-100 w-60-l" : "w-100 w-30-l"}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        <div className="pa4 br3 shadow-3 tc bg-white" style={{ borderRadius: "15px" }}>
          <h3 className="f4 black-80">{service.name}</h3>
          {service.name === "Freight Forwarding" ? (
            <div>
              <p className="f6 black-60">{service.desc}</p>
              <div 
                className="grid-container"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                  gap: "15px",
                  marginTop: "15px"
                }}
              >
                {[
                  { type: "Sea Freight", img: sea },
                  { type: "Air Freight", img: air },
                  { type: "Land Freight", img: land },
                  { type: "Intermodal", img: intermodal }
                ].map((freight, i) => (
                  <motion.div 
                    key={i} 
                    className="tc freight-card"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={freight.img} 
                      alt={freight.type} 
                      className="br3 w-100 h4 shadow-5" 
                      style={{ borderRadius: "10px" }}
                    />
                    <p className="f5 mt2 fw6">{freight.type}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <p className="f6 black-60">{service.desc}</p>
          )}
        </div>
      </motion.div>
    ))}
  </div>
</section>





      {/* About Section */}
      <section id="about" className="flex flex-column flex-row-ns items-center justify-center w-100 ph3 pv5 bg-washed-yellow">
  {/* Left: Company Summary */}
  <div className="w-100 w-50-ns ph3">
  <h2 className="f2 fw7 mb3">About Us</h2>
  <p className="f4 black-80 lh-copy">
    Marine Broadlink Logistics Ghana is a trusted clearing company established in 2023. We specialize in providing comprehensive logistics solutions, including:
  </p>
  

  <h3 className="f3 fw6 mt4">Why Choose Us?</h3>
  <ul className="f4 black-80 lh-copy pl3">
    <li className="mb2"><strong>Expertise & Efficiency:</strong> A skilled team ensuring fast and hassle-free logistics.</li>
    <li className="mb2"><strong>Compliance & Transparency:</strong> Adherence to all regulatory requirements.</li>
    <li className="mb2"><strong>Customer-Centric Approach:</strong> Tailored services to meet unique business needs.</li>
    <li className="mb2"><strong>Reliable Network:</strong> Strong partnerships for seamless global freight forwarding.</li>
  </ul>
</div>


  {/* Right: Image Slideshow */}
  <div className="w-100 w-50-ns flex justify-center mt4 mt0-ns">
    <motion.img
      key={currentImage}
      src={images[currentImage]}
      alt="About Slideshow"
      className="br3 shadow-3 w-100 w-75-m w-50-l"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    />
  </div>
</section>



{/* Newsletter Section */}
<section
  className="w-100 flex justify-center items-center pv5 ph3"
  style={{
    background: "linear-gradient(135deg, #1E3A8A, #3B82F6)",
  }}
>
  <div className="flex flex-column flex-row-ns items-center w-100 mw8">
    {/* Left Content (Text + Button) */}
    <div className="w-100 w-50-ns white tc tl-ns">
      <h2 className="f2 fw7 mb3">Get Logistics Insights by Email</h2>
      <p className="f5 mb4">
        Subscribe to our monthly market updates and get invited to exclusive webinars where our 
        Freight Forwarding Experts answer all your questions on global trade.
      </p>
      <button className="bg-blue white pv3 ph4 br-pill f5 b dim pointer">
        Subscribe
      </button>
      
    </div>

    {/* Right Image */}
    {/* <div className="w-100 w-50-ns flex justify-center">
      <img
        src={emailIcon} 
        alt="Logistics Insights"
        className="w-80 br3 shadow-4"
      />
    </div> */}
  </div>
</section>

<ScrollFloat
  animationDuration={1}
  ease='back.inOut(2)'
  scrollStart='center bottom+=50%'
  scrollEnd='bottom bottom-=40%'
  stagger={0.03}
>
  <span className="f5 f4-l">
    Fast, Reliable, and Hassle-Free Customs Clearing – Your Cargo, Our Priority!
  </span>
</ScrollFloat>


      {/* Contact Section */}
      <section id="contact" className="vh-100 bg-washed-yellow flex flex-column flex-row-l items-center justify-center w-100 ph3">
  <div className="w-100 w-50-l ph3 tc tl-l">
    <h2 className="f3 f2-l">Contact Us</h2>
    <p className="f5 f4-l black-80">Reach out to Us for any inquiries or assistance.</p>
    <p className="f6 black-70">📍 Marine Broadlink Logistics, Orgle Road, Accra, Ghana</p>
    <p className="f6 black-70">
  📞 <a href="tel:+233542119400" className="link black-70 dim">+233 542 119 400</a>
</p>
    <p className="f6 black-70">
  ✉️ <a href="mailto:marinebroadlink@gmail.com" className="link black-70 dim">marinebroadlink@gmail.com</a>
</p>
  </div>

  <div className="w-100 w-50-l flex justify-center mt4 mt0-l">
    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8352.008634987656!2d-0.23510581965621116!3d5.5782096193882555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf99f1c717d1fd%3A0x817443204d637a5d!2sOrgle%20Rd%2C%20Accra!5e0!3m2!1sen!2sgh!4v1743423402071!5m2!1sen!2sgh"
      width="100%"
      height="250"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>
</section>

<footer className=" w-100 white pv4 ph3 ph5-l"
style={{
    background: "linear-gradient(135deg, #1E3A8A, #3B82F6)",
  }}
>
      <div className="flex flex-column flex-row-l items-center justify-between">
        {/* Logo */}
        <div className="w-100 w-30-l flex justify-center justify-start-l mb3 mb0-l">
          <img src={logo1} alt="Company Logo" className="w4" />
        </div>

        {/* Social Icons */}
        <div className="w-100 w-40-l flex justify-center">
          <a href="https://facebook.com" className="mh2 grow">
            <Facebook size={24} color="#1877F2"/>
          </a>
          <a href="https://tiktok.com" className="mh2 grow">
            <FaTiktok size={24} color="#000000" />
          </a>
          <a href="https://whatsapp.com" className="mh2 grow">
            <FaWhatsapp size={24} color="#25D366" />
          </a>
          <a href="https://instagram.com" className="mh2 grow">
            <Instagram size={24}  color="#E4405F" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="tc mt4 f6 black-70">
        &copy; 2023 Marine Broadlink Logistics. All Rights Reserved.
      </div>
    </footer>

    <Chatbot />
    </div>
    
  );
};

export default App;


