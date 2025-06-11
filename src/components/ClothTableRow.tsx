import { Link } from "react-router";
import type { clothProps } from "../types/clothProps";

export default function ClothTableRow({ id, name, price, quantity, size, deleteCloth }: clothProps) {
   return (
      <>
         <tr className="border-b border-gray-300 transition-colors ease-in duration-100 bg-gray-200 nth-[even]:bg-gray-300">
            <td className="p-2">{id}</td>
            <td className="p-2">{name}</td>
            <td className="p-2">{quantity}</td>
            <td className="p-2">{price}</td>
            <td className="p-2">{size}</td>
            <td className="flex gap-2 p-2">
               <Link
                  to={`/Edit/${id}`}
                  className="bg-amber-500 px-2 py-1 rounded-md text-white font-semibold text-sm cursor-pointer hover:bg-amber-600 transition ease-in duration-100">
                  Editar
               </Link>
               <button
                  onClick={deleteCloth}
                  className="bg-red-500 px-2 py-1 rounded-md text-white font-semibold text-sm cursor-pointer hover:bg-red-600 transition ease-in duration-100">
                  Excluir
               </button>
            </td>
         </tr>
      </>
   );
}
