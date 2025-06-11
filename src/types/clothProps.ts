export type clothProps = {
   _id?: string
   id?: string;
   name: string;
   price: number;
   quantity: number;
   size: "PP" | "P" | "M" | "G" | "GG" | "XG" | "XGG" | "EG" | "EGG";
   deleteCloth: () => void
};