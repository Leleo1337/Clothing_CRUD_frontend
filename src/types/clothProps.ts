export type clothProps = {
   _id?: string
   id?: string;
   clothID: string; 
   name: string;
   price?: number;
   formattedPrice?: string;
   quantity: number;
   size: "PP" | "P" | "M" | "G" | "GG" | "XG" | "XGG" | "EG" | "EGG";
   deleteCloth: () => void
};