import { Link } from "react-router";
import type { clothProps } from "../types/clothProps";

export default function ClothTableRow({ id, clothID, name, price, quantity, size, deleteCloth }: clothProps) {
   return (
      <>
         <tr className="border-b border-gray-300 transition-colors ease-in duration-100 bg-white nth-[even]:bg-gray-700/10">
            <td className="px-4 py-2.5">{clothID}</td>
            <td className="px-4 py-2.5">{name}</td>
            <td className="px-4 py-2.5">{price}</td>
            <td className="px-4 py-2.5">{quantity}</td>
            <td className="px-4 py-2.5">{size}</td>
            <td className="flex gap-2 p-2">
               <Link
                  to={`/Edit/${id}`}
                  className="bg-yellow-500 px-2 py-1 rounded-sm text-white font-semibold text-sm cursor-pointer hover:bg-yellow-600 transition ease-in duration-100">
                  Editar
               </Link>
               <button
                  onClick={deleteCloth}
                  className="bg-red-500 px-2 py-1 rounded-sm text-white font-semibold text-sm cursor-pointer hover:bg-red-600 transition ease-in duration-100">
                  Excluir
               </button>
            </td>
         </tr>
      </>
   );
}
