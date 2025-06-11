import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Edit() {
   const { id } = useParams();
   const [item, setItem] = useState(null)
   useEffect(() => {
      console.log(id);
   }, []);

   return (
      <>
         <div className="h-40 w-full bg-red-600"></div>
      </>
   );
}

export default Edit;
