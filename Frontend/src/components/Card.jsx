import { NavLink } from "react-router";
const Card = ({title, description, icon:Icon }) => {
    return(
    <NavLink
    to={`/${title}`}>
<div className="bg-white w-full h-full p-8 rounded-lg border border-[#d9d9d9] hover:border-[#4da6ff] transition-all duration-200 hover:shadow-lg cursor-pointer text-center">
            <div className="mx-auto h-16 w-16 bg-[#4da6ff]/10 rounded-full flex items-center justify-center mb-4">
                <Icon className="text-[#4da6ff] text-3xl"/>
            </div>
            <h3 className="text-gray-900 text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </NavLink>
    )    
}

export default Card;