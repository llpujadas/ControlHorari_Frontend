import { useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";
import { Chemical } from "~/backend/models/Chemical";

// export default function ChemicalsSelector({
//   removeSelectedChemicals = false,
// }: {
//   removeSelectedChemicals?: boolean;
// }) {
//   // HOOKS =================================================
//   const fetcher = useFetcher<Chemical[]>();

//   // STATES ================================================
//   const [chemicals, setChemicals] = useState<Chemical[]>([]);
//   const [selectedChemicals, setSelectedChemicals] = useState<Chemical[]>([]);

//   // FUNCTIONS =============================================
//   function handleSetSelected(chemicalId: string) {
//     console.log("RETURN");

//     if (!removeSelectedChemicals) {
        
//       return;
//     }

//     const chemical : Chemical = chemicals.find((chem) => chem.id == Number(chemicalId))!;
//     console.log(chemical);

//     setSelectedChemicals((prev) => {
//       return [...prev, chemical];
//     });
//   }

//   // EFFECTS ===============================================
//   useEffect(() => {
//     fetcher.load("/resources/chemicals");
//   }, []);

//   useEffect(() => {
//     if (fetcher.data) {
//       setChemicals(fetcher.data);
//     }
//   }, [fetcher.data]);

//   return (
//     <select className="select select-bordered select-sm w-full" onChange={(e) => handleSetSelected(e.currentTarget.value)}>
//       <option disabled selected>
//         Selecciona una opció
//       </option>
//       {chemicals &&
//         chemicals.length > 0 &&
//         chemicals.map((chemical) => {
//           return (
//             <option
//               key={`${chemical.id}-${chemical.name}`}
//               value={chemical.id}
//             //   onChange={() => handleSetSelected(chemical)}
//             >
//               {chemical.name}
//             </option>
//           );
//         })}
//     </select>
//   );
// }
