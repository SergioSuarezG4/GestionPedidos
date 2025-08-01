import { IoLogoDropbox } from "react-icons/io5";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <IoLogoDropbox className="h-8 w-8 text-[#4da6ff]" />
              <span className="ml-2 text-xl font-semibold text-gray-900">
                OrderManager
              </span>
            </NavLink>
          </div>
          <div className="flex items-center space-x-8">
            <NavLink
              to="/Clientes"
              className="text-gray-700 font-medium hover:text-blue-400"
            >
              Clientes
            </NavLink>
            <NavLink
              to="/Platos"
              className="text-gray-700 font-medium hover:text-blue-400"
            >
              Platos
            </NavLink>
            <NavLink
              to="/Pedidos"
              className="text-gray-700 font-medium hover:text-blue-400"
            >
              Pedidos
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
