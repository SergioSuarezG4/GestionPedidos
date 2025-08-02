import Button from "../../components/ui/button/Button";
import { LuPlus } from "react-icons/lu";
import SearchInput from "../../components/ui/input/SearchInput";
import { NavLink } from "react-router";
import Table from "../../components/Table";

const Client = () => {

    const clients = [
  { name: "Juan Pérez", email: "juan.perez@example.com", telefono: "3001234567" },
  { name: "Laura Gómez", email: "laura.gomez@example.com", telefono: "3109876543" },
  { name: "Carlos Ruiz", email: "carlos.ruiz@example.com", telefono: "3014567890" },
  { name: "Sofía Martínez", email: "sofia.martinez@example.com", telefono: "3021122334" },
  { name: "Andrés Torres", email: "andres.torres@example.com", telefono: "3204455667" },
  { name: "Valentina Ríos", email: "valentina.rios@example.com", telefono: "3117788990" },
  { name: "Daniel Herrera", email: "daniel.herrera@example.com", telefono: "3009988776" },
  { name: "Mariana López", email: "mariana.lopez@example.com", telefono: "3125566778" },
  { name: "Luis Castro", email: "luis.castro@example.com", telefono: "3191122334" },
  { name: "Camila Ramírez", email: "camila.ramirez@example.com", telefono: "3133344556" }
];

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
            <div>
                <Table dates={clients}></Table>
            </div>
        </div>
    );
};

export default Client;
