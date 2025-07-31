import { FaBox } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-12 py-4 bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex items-center space-x-2 pl-6">
        <FaBox className="text-blue-300 text-3xl " size={30} />
        <span className="text-xl font-semibold text-black px-2">
          OrderManager
        </span>
      </div>

      <div className="space-x-8">
        <span className="text-gray-700 font-semibold hover:text-blue-400 cursor-pointer">
          Clientes
        </span>
        <span className="text-gray-700 font-semibold hover:text-blue-400 cursor-pointer">
          Platos
        </span>
        <span className="text-gray-700 font-semibold hover:text-blue-400 cursor-pointer">
          Pedidos
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
