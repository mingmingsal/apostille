const ChooseElement = ({ countries, callbackFn, flavorText }) => {
  return (
    <select onChange={(e) => callbackFn(e)}>
      <option>{flavorText}</option>
      {Array.isArray(countries) &&
        countries.map((country, index) => {
          return <option key={country.name} value={index}>{country.name}</option>;
        })}
      {!Array.isArray(countries) &&
        Object.keys(countries).map((country) => {
          return <option key={country}>{country}</option>;
        })}
    </select>
  );
};

export default ChooseElement;
