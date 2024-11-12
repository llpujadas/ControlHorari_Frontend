import { useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";
import { Chemical } from "~/backend/models/Chemical";

export default function ChemicalsSelector({
  onChemicalChange,
}: {
  onChemicalChange: (
    selectedChemicals: { chemical: Chemical; quantity: number }[]
  ) => void;
}) {
  // HOOKS =================================================
  const fetcher = useFetcher<Chemical[]>();

  // STATES ================================================
  const [chemicals, setChemicals] = useState<Chemical[]>([]);
  const [selectedChemicals, setSelectedChemicals] = useState<
    { chemical: Chemical; quantity: number }[]
  >([]);
  const [selectedChemicalId, setSelectedChemicalId] = useState<string | null>(
    null
  );
  const [quantity, setQuantity] = useState<number | "">("");

  // FUNCTIONS =============================================
  function handleAddChemical() {
    if (!selectedChemicalId || quantity === "") {
      return;
    }

    const selectedChemical = chemicals.find(
      (chem) => chem.id === Number(selectedChemicalId)
    );

    if (selectedChemical) {
      const newSelection = [
        ...selectedChemicals,
        { chemical: selectedChemical, quantity: Number(quantity) },
      ];

      setSelectedChemicals(newSelection);
      onChemicalChange(newSelection);
      setChemicals((prev) =>
        prev.filter((chem) => chem.id !== selectedChemical.id)
      );
      setSelectedChemicalId(null);
      setQuantity("");
    }
  }

  function handleRemoveChemical(chemicalId: number) {
    const removedChemical = selectedChemicals.find(
      (chem) => chem.chemical.id === chemicalId
    );

    setSelectedChemicals((prev) =>
      prev.filter((chem) => chem.chemical.id !== chemicalId)
    );

    if (removedChemical) {
      setChemicals((prev) => [...prev, removedChemical.chemical]);
      onChemicalChange(
        selectedChemicals.filter((chem) => chem.chemical.id !== chemicalId)
      );
    }
  }

  // EFFECTS ===============================================
  useEffect(() => {
    fetcher.load("/resources/chemicals");
  }, []);

  useEffect(() => {
    if (fetcher.data) {
      setChemicals(fetcher.data);
    }
  }, [fetcher.data]);

  const availableChemicals = chemicals.filter(
    (chemical) =>
      !selectedChemicals.some(
        (selected) => selected.chemical.id === chemical.id
      )
  );

  return (
    <div className="space-y-4">
      {availableChemicals.length > 0 && (
        <div className="flex items-center space-x-4">
          <select
            className="select select-bordered select-sm w-full"
            value={selectedChemicalId || ""}
            onChange={(e) => setSelectedChemicalId(e.currentTarget.value)}
          >
            <option disabled value="">
              Selecciona un producte químic
            </option>
            {availableChemicals.map((chemical) => (
              <option key={chemical.id} value={chemical.id}>
                {chemical.name}
              </option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Quantitat"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="input input-sm block w-full rounded-md border-gray-300 shadow-sm"
            required={selectedChemicalId ? true : false}
          />
          <button
            type="button"
            onClick={handleAddChemical}
            className="btn btn-outline btn-sm"
          >
            Afegir
          </button>
        </div>
      )}

      {/* Lista de productos seleccionados */}
      <div className="space-y-2">
        {selectedChemicals.map(({ chemical, quantity }) => (
          <div
            key={chemical.id}
            className="flex items-center justify-between p-2 bg-gray-200 rounded"
          >
            <span className="flex flex-col">
              <span>
                <b>Producte: </b> {chemical.name}
              </span>
              <span>
                <b>Quantitat: </b> {quantity} {quantity == 1 ? "gram" : "grams"}
              </span>
            </span>
            <button
              type="button"
              onClick={() => handleRemoveChemical(chemical.id)}
              className="btn btn-sm btn-circle btn-ghost"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
