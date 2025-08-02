import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const Table = ({dates}) => {
    return (
        <div className="overflow-auto w-full h-[330px] text-slate-300 bg-white shadow-md rounded-lg bg-clip-border max-h-[400px]">
            <table className="w-full text-left table-auto min-w-max">
                <thead>
                    <tr>
                        <th className="p-4 border-b border-slate-600 bg-slate-800">
                            <p className="text-sm font-normal leading-none text-slate-300">
                                Nombre
                            </p>
                        </th>
                        <th className="p-4 border-b border-slate-600 bg-slate-800">
                            <p className="text-sm font-normal leading-none text-slate-300">
                                Email
                            </p>
                        </th>
                        <th className="p-4 border-b border-slate-600 bg-slate-800">
                            <p className="text-sm font-normal leading-none text-slate-300">
                                Telefono
                            </p>
                        </th>
                        <th className="p-4 border-b border-slate-600 bg-slate-800">
                            <p className="text-sm font-normal leading-none text-slate-300">
                                Acciones
                            </p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                   {dates.map((client, index) => (
                        <tr key={index} className="even:bg-slate-100 hover:bg-slate-200">
                            <td className="p-4 border-b border-slate-200">
                                <p className="text-sm text-slate-800 font-semibold">{client.name}</p>
                            </td>
                            <td className="p-4 border-b border-slate-200">
                                <p className="text-sm text-slate-700">{client.email}</p>
                            </td>
                            <td className="p-4 border-b border-slate-200">
                                <p className="text-sm text-slate-700">{client.telefono}</p>
                            </td>
                            <td className="flex justify-around p-4 border-b border-slate-200">
                                <CiEdit></CiEdit>
                                <MdDelete></MdDelete>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
