import { Suspense } from "react";
import Countries from "./components/Countries/Countries";

const countriesPromise = fetch(
  "https://restcountries.com/v3.1/all?fields=name,capital,currencies"
).then((res) => res.json());

function App() {
  return (
    <div>
      <Suspense fallback={<h3>Countries List</h3>}>
        <Countries countriesPromise={countriesPromise} />
      </Suspense>
    </div>
  );
}

export default App;
