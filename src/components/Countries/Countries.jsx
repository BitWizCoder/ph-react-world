import { use, useState } from "react";
import Country from "../Country/Country";

export default function Countries({ countriesPromise }) {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const countries = use(countriesPromise);

  const handleVisitedCountries = (country) => {
    console.log("country visited clicked", country);
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold">
        Traveling Countries: {countries.length}
      </h1>
      <h2>Traveld so far: </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {countries.map((country, index) => (
          <Country
            key={index}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          />
        ))}
      </div>
    </div>
  );
}
