import Navbar from "../../components/layout/NavBar";
import { LuUtensilsCrossed } from "react-icons/lu";
import { LuClipboardList } from "react-icons/lu";
import { LuUserCog } from "react-icons/lu";

import Card from "../../components/Card"
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-20 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sistema de Gestión de Pedidos
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Administra tus clientes, platos y pedidos de manera eficiente con nuestra plataforma moderna y fácil de usar.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <Card 
        title="Clientes"
        description="Gestiona la información de tus clientes y mantén un registro actualizado."
        icon={LuUserCog}
        />
        <Card 
        title="Platos"
        description="Administra tu menú, precios y disponibilidad de platos."
        icon={LuUtensilsCrossed}
        />
        <Card 
        title="Pedidos"
        description="Crea, gestiona y da seguimiento a todos los pedidos."
        icon={LuClipboardList}
        />
      </div>
    </>
  );
};

export default Home;
