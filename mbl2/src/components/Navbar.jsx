const Navbar = () => {
    return (
      <nav className="fixed top-0 w-full z-50 flex justify-between items-start p-6 bg-black bg-opacity-60 shadow-md backdrop-blur-md">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          SwiftClear
        </div>
  
        {/* Nav Links */}
        <div className="flex flex-row items-end space-x-4">
          <a href="#hero" className="text-gray-200 hover:text-blue-300">Home</a>
          <a href="#services" className="text-gray-200 hover:text-blue-300">Services</a>
          <a href="#about" className="text-gray-200 hover:text-blue-300">About</a>
          <a href="#contact" className="text-gray-200 hover:text-blue-300">Contact</a>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  