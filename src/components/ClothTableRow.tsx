import type { clothProps } from "../types/clothProps";

export default function ClothTableRow({ id, name, price, quantity, size }: clothProps) {
   return (
      <>
         <tr className="hover:bg-gray-100 border-b border-gray-300 transition-colors ease-in duration-100">
            <td className="p-2">{id}</td>
            <td className="p-2">{name}</td>
            <td className="p-2">{price}</td>
            <td className="p-2">{quantity}</td>
            <td className="p-2">{size}</td>
            <td className="flex gap-2 p-2">
               <button className="bg-amber-500 px-2 py-1 rounded-md text-white font-semibold text-sm cursor-pointer">
                  Editar
               </button>
               <button className="bg-red-500 px-2 py-1 rounded-md text-white font-semibold text-sm cursor-pointer">
                  Excluir
               </button>
            </td>
         </tr>
      </>
   );
}
