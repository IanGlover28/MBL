const Hero = () => (
  <section
    className="h-screen bg-[url('/image0.jpg')] bg-cover bg-center flex flex-col justify-center items-center text-white text-center p-10"
  >
    <h1 className="text-5xl font-bold animate-fade-in">
      Welcome to <span className="text-yellow-400">SwiftClear Logistics</span>
    </h1>
    <p className="mt-4 text-xl animate-fade-in-delay">
      Fast, reliable, and secure clearing services at the port.
    </p>
    <button className="mt-6 px-6 py-3 bg-yellow-400 text-blue-900 font-semibold rounded hover:bg-yellow-300 transition duration-300">
      Call Us Now
    </button>
  </section>
);

export default Hero;
