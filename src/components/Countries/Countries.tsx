import { use } from "react";

export default function Countries({ countriesPromise }) {
  const countries = use(countriesPromise);

  console.log(countries);

  return (
    <div>
      <h1>Traveling Countries</h1>
    </div>
  );
}
