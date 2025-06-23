import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { ArrowLeft, Box, DollarSign, Hash, RefreshCw, Ruler, Save } from "lucide-react";
import { toast } from "react-toastify";
import { getCloth, updateCloth } from "../services/clothService";

const initialState = {
   name: "",
   quantity: "",
   price: "",
   size: "",
};

function Edit() {
   const { id } = useParams();
   const [formData, setFormData] = useState(initialState);

   function handleChange(e: any) {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
   }

   async function submitForm() {
      const response = await updateCloth(id, formData);
      if (response) {
         toast.success("Item Salvo");
      }
   }

   function clearFormData() {
      setFormData(initialState);
   }

   async function getData() {
      const response = await getCloth(id);
      setFormData(response);
   }

   useEffect(() => {
      getData();
   }, []);

   return (
      <>
         <div className="w-full py-6 mx-auto bg-gray-800 mb-2 drop-shadow-md">
            <div className="w-[50%] text-base mx-auto space-y-3">
               <Link to={"/home"} className="flex gap-2 items-center text-gray-300 hover:text-white">
                  <ArrowLeft size={20} /> Voltar
               </Link>
               <h1 className="text-gray-100 font-bold text-2xl">Editar peça de vestuario</h1>
            </div>
         </div>
         <div className="container max-w-[900px] bg-white mx-auto mt-4 shadow-md pb-8">
            <div className="w-full bg-gray-700 rounded-t-md py-4 px-4 shadow-md">
               <h1 className="text-white font-semibold text-lg">Informaçoes da Peça - {id}</h1>
            </div>
            <div className=" grid grid-cols-2 grid-rows-3">
               <div className="py-4 px-6 col-span-2">
                  <div className="space-y-2">
                     <label htmlFor="name" className="flex items-center gap-1 text-gray-700 text-sm font-semibold">
                        <Box size={16} /> Nome
                     </label>
                     <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="digite o nome da peça"
                        autoComplete="off"
                        onChange={handleChange}
                        value={formData.name}
                        className="w-full py-2.5 px-4 bg-white rounded-md border border-gray-300 outline-0 focus:ring focus:ring-gray-800 "
                     />
                  </div>
               </div>
               <div className="py-4 pl-6 pr-2">
                  <div className="space-y-2">
                     <label htmlFor="quantity" className="flex items-center gap-1 text-gray-700 text-sm font-semibold">
                        <Hash size={16} /> Quantidade
                     </label>
                     <input
                        id="quantity"
                        name="quantity"
                        type="number"
                        placeholder="0"
                        autoComplete="off"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full py-2.5 px-4 bg-white rounded-md border border-gray-300 outline-0 focus:ring focus:ring-gray-800 "
                     />
                  </div>
               </div>
               <div className="py-4 pr-6 pl-2">
                  <div className="space-y-2">
                     <label htmlFor="price" className="flex items-center gap-1 text-gray-700 text-sm font-semibold">
                        <DollarSign size={16} /> Preço
                     </label>
                     <input
                        id="price"
                        name="price"
                        type="number"
                        placeholder="0.00"
                        autoComplete="off"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full py-2.5 px-4 bg-white rounded-md border border-gray-300 outline-0 focus:ring focus:ring-gray-800 "
                     />
                  </div>
               </div>
               <div className="px-6 py-2 col-span-2">
                  <div className="space-y-2">
                     <label htmlFor="size" className="flex items-center gap-1 text-gray-700 text-sm font-semibold">
                        <Ruler />
                        Tamanho
                     </label>
                     <select
                        name="size"
                        id="size"
                        className="w-full py-2.5 px-4 bg-white rounded-md border border-gray-300 outline-0 focus:ring focus:ring-gray-800 "
                        value={formData.size}
                        onChange={handleChange}>
                        <option value="" defaultChecked>
                           Selecione o tamanho
                        </option>
                        <option value="PP">PP</option>
                        <option value="P">P</option>
                        <option value="M">M</option>
                        <option value="G">G</option>
                        <option value="GG">GG</option>
                        <option value="XG">XG</option>
                        <option value="XGG">XGG</option>
                        <option value="EG">EG</option>
                        <option value="EGG">EGG</option>
                     </select>
                  </div>
               </div>
               <div className="col-span-2 px-6 flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                  <button
                     onClick={submitForm}
                     className="flex-1 flex items-center gap-2 justify-center bg-yellow-500 text-white px-6 py-3 rounded font-semibold transition-all duration-200 cursor-pointer hover:bg-yellow-600">
                     <Save size={22} />
                     Salvar peça
                  </button>
                  <button
                     onClick={clearFormData}
                     className="flex-1 sm:flex-none flex items-center gap-2 justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded font-semibold cursor-pointer hover:bg-gray-50 hover:border-gray-400 transition-all duration-200">
                     <RefreshCw size={22} /> Limpar
                  </button>
               </div>
            </div>
         </div>
      </>
   );
}

export default Edit;
