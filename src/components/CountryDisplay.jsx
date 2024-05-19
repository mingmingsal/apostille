import { useRef, useEffect } from "react";
import ChooseElement from "./ChooseElement";
import RenderList from "./RenderList";
const CountryDisplay = ({ country }) => {
  const goToLGU = useRef([]);

  useEffect(() => {
    if (country.lgu == null) return null;
    goToLGU.current = goToLGU.current.slice(0, country.lgu.length);
  }, [country.lgu]);

  function jumpTo(e) {
    if (goToLGU.current[e.target.value] === undefined) return;
    goToLGU.current[e.target.value].scrollIntoView(true);
  }
  function CheckifValid({ e, children }) {
    if (e == null) return null;
    return children;
  }
  return (
    <div className="country">
      <h2>{country.name}</h2>

      <CheckifValid e={country.national_agencies}>
        <h3>National Agencies</h3>
        <RenderList countryPart={country.national_agencies} country={country} />
      </CheckifValid>

      <CheckifValid e={country.lgu}>
        <h3>Local Governments</h3>
        <ChooseElement
          countries={country.lgu}
          callbackFn={jumpTo}
          flavorText="Choose LGU..."
        />
        <RenderList countryPart={country.lgu} country={country} />
      </CheckifValid>
    </div>
  );
};

export default CountryDisplay;
