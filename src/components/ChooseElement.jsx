const ChooseElement = ({ countries, callbackFn, flavorText }) => {
  function compare( a, b ) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }
  function OrderArray({countries}) {
    const ordered = [...countries].sort(compare);
    console.log(ordered);
    return ordered.map((country, index) => {
      return (
        <option key={country.name} value={index}>
          {country.name}
        </option>
      );
    });
  }
  function OrderObject({countries}) {
    const ordered = Object.keys(countries)
      .sort()
      .reduce((obj, key) => {
        obj[key] = countries[key];
        return obj;
      }, {});
      return Object.keys(ordered).map((country) => {
        return <option key={country}>{country}</option>;
      })
  }
  return (
    <select onChange={(e) => callbackFn(e)}>
      <option>{flavorText}</option>
      {Array.isArray(countries)&& <OrderArray countries={countries}></OrderArray>}
      {!Array.isArray(countries)&& <OrderObject countries={countries}></OrderObject>}
    </select>
  );
};

export default ChooseElement;
