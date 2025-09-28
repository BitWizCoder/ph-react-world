import { useState } from "react";

export default function Country({
  country,
  handleVisitedCountries,
  handleVisitedFlags,
}) {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    <div
      className={`border border-amber-500 p-4 rounded-sm ${
        visited && "bg-amber-50"
      }`}
    >
      <h3 className="mb-4">
        <span className="font-semibold">Name:</span> {country.name.common}
      </h3>
      <img src={country.flags.png} alt={country.name.common} />
      <p>Independent: {country.independent ? "Free" : "Not Free"}</p>
      <button
        className="px-4 py-3 rounded-sm mt-4 hover:bg-gray-600 cursor-pointer bg-gray-500 text-white mr-4"
        onClick={handleVisited}
      >
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button
        className="px-4 py-3 rounded-sm mt-4 hover:bg-gray-600 cursor-pointer bg-gray-500 text-white"
        onClick={() => {
          handleVisitedFlags(country.flags.png);
        }}
      >
        Add Visited Flag
      </button>
    </div>
  );
}
