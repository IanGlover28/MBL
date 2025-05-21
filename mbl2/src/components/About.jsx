import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // optional, depending on routing

const images = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image6.jpg",
];

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="p-10 text-center min-h-screen"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
     

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto text-left">
        {/* Text Column */}
        <div className="space-y-5 text-gray-700 text-[17px] leading-relaxed">
        <h2 className="text-3xl font-semibold">About Marine Broadlink GH</h2>
          <p>
            Marine Broadlink GH is a trusted name in clearing and forwarding solutions in Ghana. With over a
            decade of hands-on experience, we ensure hassle-free movement of goods across borders and ports.
          </p>
          <p>
            We specialize in customs brokerage, freight forwarding, and end-to-end logistics support for both
            businesses and individuals. Our mission is to simplify trade and logistics while maintaining
            transparency and professionalism.
          </p>
          <p>
            Backed by a dedicated team and strong networks with port authorities and customs officials, we
            provide swift and efficient clearance of imports and exports — no delays, no hidden fees.
          </p>
          <p>
            Marine Broadlink GH continues to grow as a reliable logistics partner by adopting innovative
            technologies and offering personalized services tailored to client needs.{" "}
            <Link to="/about-details" className="text-blue-600 hover:underline font-medium">
              See more
            </Link>
          </p>
        </div>

        {/* Slideshow Column */}
        <div className="rounded-xl overflow-hidden shadow-xl h-[600px]">
          <img
            src={images[currentImage]}
            alt="Marine Broadlink GH operations"
            className="w-full h-full object-cover transition duration-1000"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
