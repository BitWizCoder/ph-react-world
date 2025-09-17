import { Suspense } from "react";
import Countries from "./components/Countries/Countries";

const countriesPromise = fetch(
  "https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,independent,cca3"
).then((res) => res.json());

function App() {
  return (
    <div className="max-w-7xl m-auto px-12 mt-16">
      <Suspense fallback={<h3>Countries List</h3>}>
        <Countries countriesPromise={countriesPromise} />
      </Suspense>
    </div>
  );
}

export default App;
