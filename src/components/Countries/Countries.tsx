import { use } from "react";
import Country from "../Country/Country";

type Country = {
  name: { common: string };
  capital?: string[];
  currencies?: Record<string, unknown>;
  cca3: string[];
};

export default function Countries({
  countriesPromise,
}: {
  countriesPromise: Promise<Country[]>;
}) {
  const countries: Country[] = use(countriesPromise);

  return (
    <div>
      <h1 className="text-3xl font-semibold">
        Traveling Countries: {countries.length}
      </h1>

      {countries.map((country) => (
        <Country key={country.cca3} country={country} />
      ))}
    </div>
  );
}
