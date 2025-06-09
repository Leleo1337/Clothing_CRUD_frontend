import { useEffect, useState } from "react";
import ClothTableRow from "./components/ClothTableRow";
import type { clothProps } from "./types/clothProps";
import axios from "axios";


function App() {
   const [items, setItems] = useState<clothProps[]>([]);
   const apiUrl = import.meta.env.API_URL

   useEffect(() => {
      axios.get(`${apiUrl}/v1/`).then(function () {
         setItems([]);
      }).catch(e => console.log(e));
   });
   return (
      <>
         <div className="w-[90%] mx-auto py-8">
            <div>
               <div className="bg-gray-400 py-6">
                  <h1 className="text-slate-700 font-bold text-center text-3xl">Peças de vestuário</h1>
               </div>
               <button className="py-1 px-2 mt-1 text-white rounded-md bg-green-500 font-semibold cursor-pointer">
                  + nova peça
               </button>
            </div>
            <div className="pt-4">
               <table className="table-fixed text-left w-full shadow-sm">
                  <thead className="bg-zinc-500">
                     <tr>
                        <th className="p-2">ID</th>
                        <th className="p-2">Nome</th>
                        <th className="p-2">Quantidade</th>
                        <th className="p-2">Preço</th>
                        <th className="p-2">Tamanho</th>
                        <th className="p-2">Ações</th>
                     </tr>
                  </thead>
                  <tbody>
                     {items.map((item) => (
                        <ClothTableRow
                           key={item.id}
                           id={item.id}
                           name={item.name}
                           price={item.price}
                           quantity={item.quantity}
                           size={item.size}
                        />
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </>
   );
}

export default App;
