import Button from "../../components/ui/button/Button";
import { LuPlus } from "react-icons/lu";
import SearchInput from "../../components/ui/input/SearchInput";
import { NavLink } from "react-router";

const Client = () => {
    return (
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-89">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Gestión de Clientes</h1>
                <NavLink to="/Clientes/nuevo">
                    <Button isPrimary={true} icon={LuPlus}>Agregar Cliente</Button>
                </NavLink>
            </div>
            <div className="mb-6">
            <SearchInput placeholder="Buscar cliente..." />
            </div>
        </div>
    );
};

export default Client;
