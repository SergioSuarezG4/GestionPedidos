import ArrowLeft from "../../components/ArrowLeft";
import FormClient from "../../components/client/FormClient";

const NewClient = () => {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8 ">
      <div className="mb-8">
        <ArrowLeft route="/Clientes"> Volver a Clientes</ArrowLeft>
        <h1 className="text-3xl font-bold text-gray-900">Nuevo Cliente</h1>
      </div>
      <div className="bg-white rounded-lg border border-[#d9d9d9] p-8">
        <FormClient></FormClient>
      </div>
    </div>
  );
};
export default NewClient;
