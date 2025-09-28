import { use, useState } from "react";
import Country from "../Country/Country";

export default function Countries({ countriesPromise }) {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const countries = use(countriesPromise);

  const handleVisitedFlags = (flags) => {
    const newVisitedFlags = [...visitedFlags, flags];
    setVisitedFlags(newVisitedFlags);
    console.log("flag is added", flags);
  };

  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold">
        Traveling Countries: {countries.length}
      </h1>
      <h2 className="my-3 text-lg">
        Traveld so far:
        <span className="font-semibold">
          {" "}
          {visitedCountries.length} Countries
        </span>
      </h2>

      <div className="w-36">
        {visitedFlags.map((flag, index) => (
          <img key={index} src={flag}></img>
        ))}
      </div>

      <ol className="list-decimal list-inside">
        {visitedCountries.map((country, index) => (
          <li key={index}>{country.name.common}</li>
        ))}
      </ol>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {countries.map((country, index) => (
          <Country
            key={index}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
          />
        ))}
      </div>
    </div>
  );
}
