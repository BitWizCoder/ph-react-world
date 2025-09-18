import type { CountryType } from "../../types/Country";

export default function Country({ country }: { country: CountryType }) {
  const handleVisited = () => {
    console.log("Visited Clicked");
  };

  return (
    <div className="border border-amber-500 p-4 rounded-sm">
      <h3 className="mb-4">
        <span className="font-semibold">Name:</span> {country.name.common}
      </h3>
      <img src={country.flags.png} alt={country.name.common} />
      <p>Independent: {country.independent ? "Free" : "Not Free"}</p>
      <button
        className="px-4 py-3 rounded-sm mt-4 hover:bg-gray-600 cursor-pointer bg-gray-500 text-white"
        onClick={handleVisited}
      >
        Visited
      </button>
    </div>
  );
}
