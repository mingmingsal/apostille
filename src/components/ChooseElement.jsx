const ChooseElement = ({ countries, callbackFn }) => {
  return (
    <select onChange={(e) => callbackFn(e)}>
      <option>Choose Country...</option>
      {Array.isArray(countries) &&
        countries.map((country, index) => {
          return <option key={country.name} value={index}>{country.name}</option>;
        })}
      {!Array.isArray(countries) &&
        Object.keys(countries).map((country, index) => {
          return <option key={country} value={index}>{country}</option>;
        })}
    </select>
  );
};

export default ChooseElement;
