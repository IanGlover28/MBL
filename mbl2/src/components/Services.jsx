import { Link } from "react-router-dom";

const services = [
  {
    title: "Sea Freight Clearing",
    image: "/sea.jpg",
    description: "Efficient sea cargo clearance for hassle-free imports and exports.",
    link: "/services/sea-freight-clearing"
  },
  {
    title: "Air Cargo Clearing",
    image: "/air.jpg",
    description: "Swift handling of air freight with timely delivery and documentation.",
    link: "/services/air-cargo-clearing"
  },
  {
    title: "Customs Documentation",
    image: "/land.jpg",
    description: "Professional handling of all necessary customs paperwork.",
    link: "/services/customs-documentation"
  },
  {
    title: "Vehicle Clearing",
    image: "/land.jpg",
    description: "Clear your imported vehicle quickly and legally at the port.",
    link: "/services/vehicle-clearing"
  },
  {
    title: "Import/Export Consulting",
    image: "/consult.jpg",
    description: "Get expert advice on import/export regulations and logistics.",
    link: "/services/import-export-consulting"
  }
];

const Services = () => (
  <section className="p-10 bg-gray-100 text-center">
    <h2 className="text-3xl font-semibold mb-10">Our Services</h2>
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
      {services.map((service, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="h-48 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <Link
              to={service.link}
              className="text-blue-600 hover:underline font-medium"
            >
              Read more →
            </Link>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
