import { use } from "react";
import Country from "../Country/Country";
import type { CountryType } from "../../types/Country";

export default function Countries({
  countriesPromise,
}: {
  countriesPromise: Promise<CountryType[]>;
}) {
  const countries: CountryType[] = use(countriesPromise);


  return (
    <div>
      <h1 className="text-3xl font-semibold">
        Traveling Countries: {countries.length}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {countries.map((country, index) => (
          <Country key={index} country={country} />
        ))}
      </div>
    </div>
  );
}
