import { FiArrowLeft } from "react-icons/fi";
import { NavLink } from "react-router";

const ArrowLeft = ({children, route}) => {
    return (
        <NavLink
          to={route}
          className="inline-flex items-center text-[#4da6ff] hover:text-blue-600 mb-4 font-medium"
        >
        <FiArrowLeft className="h-5 w-5 mr-2" />
          {children}
        </NavLink>
    )
}
export default ArrowLeft;