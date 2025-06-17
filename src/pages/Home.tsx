import { useEffect, useState } from "react";
import ClothTableRow from "../components/ClothTableRow";
import type { clothProps } from "../types/clothProps";

import { LoaderCircle, LogOut, Plus } from "lucide-react";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router";
import { deleteCloth, getAllCloths } from "../services/clothService";
import { removeToken } from "../services/authService";

function Home() {
   const [items, setItems] = useState<clothProps[]>([]);
   const [loading, setIsloading] = useState(true);

   async function fetchCloths() {
      try {
         setIsloading(true);
         const items = (await getAllCloths()) || [];
         setItems(items);
         setIsloading(false);
      } catch (error) {
         console.log(error);
      }
   }

   async function handleDeleteCloth(clothID: string | undefined) {
      try {
         await deleteCloth(clothID);
         fetchCloths();
      } catch (error) {
         console.log(error);
      }
   }

   function logOut(){
      removeToken()
   }

   useEffect(() => {
      fetchCloths();
   }, []);

   return (
      <>
         {<ToastContainer limit={3} />}
         <div className="w-full py-10 mx-auto bg-gray-800 mb-6 drop-shadow-md">
            <LogOut className="absolute left-1/2 top-4 text-white cursor-pointer" onClick={logOut}/>
            <h1 className="text-gray-100 font-bold text-center text-4xl">Peças de vestuário</h1>
         </div>
         <div className="container max-w-[1200px] bg-white p-4 mx-auto shadow-md">
            <div className="flex justify-between">
               <div className="flex flex-col">
                  <div className="flex gap-2 items-center">
                     <h1 className="text-gray-700 text-2xl font-semibold">vestuario</h1>
                     {loading && <LoaderCircle className="animate-spin text-blue-500" size={24} />}
                  </div>
                  <p className="text-gray-600">Gerencie suas peças de vestuario!</p>
               </div>
               <div>
                  <Link
                     to={"/Create"}
                     className="flex items-center gap-2 bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600">
                     <Plus size={20} />
                     Adicionar peça
                  </Link>
               </div>
            </div>
            <table className="table-fixed text-left w-full shadow-sm mt-3">
               <thead className="bg-gray-800 text-gray-300 shadow-sm">
                  <tr>
                     <th className="px-4 py-3 rounded-tl-md">ID</th>
                     <th className="px-4 py-3">Nome</th>
                     <th className="px-4 py-3">Quantidade</th>
                     <th className="px-4 py-3">Preço</th>
                     <th className="px-4 py-3">Tamanho</th>
                     <th className="px-4 py-3 rounded-tr-md">Ações</th>
                  </tr>
               </thead>
               <tbody className="relative rounded">
                  {items.length === 0 ? (
                     <tr className="text-center">
                        <td className="text-center py-4" colSpan={6}>
                           Você não tem itens
                        </td>
                     </tr>
                  ) : (
                     items.map((item) => (
                        <ClothTableRow
                           key={item._id}
                           id={item._id}
                           clothID={item.clothID}
                           name={item.name}
                           price={item.price}
                           quantity={item.quantity}
                           size={item.size}
                           deleteCloth={() => handleDeleteCloth(item._id)}
                        />
                     ))
                  )}
               </tbody>
            </table>
         </div>
      </>
   );
}

export default Home;
