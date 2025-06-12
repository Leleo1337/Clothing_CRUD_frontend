import { useEffect, useState } from "react";
import ClothTableRow from "../components/ClothTableRow";
import type { clothProps } from "../types/clothProps";

import { LoaderCircle } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router";
import { deleteCloth, getAllCloths } from "../utils/apiService";

function Home() {
   const [items, setItems] = useState<clothProps[]>([]);
   const [loading, setIsloading] = useState(true);

   async function fetchCloths() {
      try {
         setIsloading(true);
         const items = await getAllCloths();
         setItems(items);
         setIsloading(false);
      } catch (error) {
         console.log(error);
         toast.error("something went wrong while fetching data");
      }
   }

   async function handleDeleteCloth(clothID: string | undefined) {
      try {
         await deleteCloth(clothID);
         fetchCloths();
      } catch (error) {
         console.log(error);
         toast.error("something went wrong while deleting data");
      }
   }

   useEffect(() => {
      fetchCloths();
   }, []);

   return (
      <>
         {<ToastContainer />}
         <div className="w-[90%] mx-auto py-8">
            <div>
               <div className="bg-gray-900 py-8 rounded-md mb-2">
                  <h1 className="text-gray-300 font-bold text-center text-3xl">Peças de vestuário</h1>
               </div>
               <Link
                  to={"/Create"}
                  className="py-1 px-2 text-white rounded-md bg-green-500 font-semibold cursor-pointer hover:bg-green-600 transition ease-in duration-100">
                  + nova peça
               </Link>
            </div>
            <div className="pt-4">
               {loading && (
                  <LoaderCircle className="absolute right-1/2 top-[35%] animate-spin text-blue-500" size={45} />
               )}
               <table className="table-fixed text-left w-full shadow-sm">
                  <thead className="bg-gray-800 text-gray-300 shadow-sm">
                     <tr>
                        <th className="p-2">ID</th>
                        <th className="p-2">Nome</th>
                        <th className="p-2">Quantidade</th>
                        <th className="p-2">Preço</th>
                        <th className="p-2">Tamanho</th>
                        <th className="p-2">Ações</th>
                     </tr>
                  </thead>
                  <tbody className="relative rounded">
                     {items.length === 0 ? (
                        <tr className="text-center">
                           <td className="py-2 font-semibold text-gray-700" colSpan={6}>
                              Você não tem items{" "}
                           </td>
                        </tr>
                     ) : (
                        items.map((item) => (
                           <ClothTableRow
                              key={item._id}
                              id={item._id}
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
         </div>
      </>
   );
}

export default Home;
