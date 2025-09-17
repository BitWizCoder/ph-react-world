export default function Country({ country }) {
  return (
    <div>
      <h3>Name: {country.name.common}</h3>
      <img src={country.flags.png} alt={country.name.common} />
      <p>Independent: {country.independent ? "Free" : "Not Free"}</p>
    </div>
  );
}
