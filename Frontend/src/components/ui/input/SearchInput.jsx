import { FiSearch } from "react-icons/fi";

const SearchInput = (props) => {
    return (
        <div className="relative max-w-md">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              {...props}
              className="w-full pl-10 pr-4 py-2 border border-[#d9d9d9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4da6ff] focus:border-transparent"
            />
        </div>
    )
}
export default SearchInput;