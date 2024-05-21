import { useRef, useEffect } from "react";
import ChooseElement from "./ChooseElement";
import RenderList from "./RenderList";
import CheckifValid from "./CheckifValid";
const CountryDisplay = ({ country }) => {
  const goToLGU = useRef([]);
  const goToAgency = useRef([]);

  useEffect(() => {
    if (country.lgu == null) return;
    goToLGU.current = goToLGU.current.slice(0, country.lgu.length);

    if (country.national_agencies == null) return;
    goToAgency.current = goToAgency.current.slice(0, country.national_agencies.length);

  }, [country.lgu, country.national_agencies]);

  function jumpTo(e, goTo) {
    if (goTo.current[e.target.value] === undefined) return;
    goTo.current[e.target.value].scrollIntoView(true);
  }
  
  return (
    <div className="country">
      <h2 className="countryTitle">{country.name}</h2>

      <CheckifValid e={country.national_agencies}>
        <h3>National Agencies</h3>
        <RenderList countryPart={country.national_agencies} country={country} goTo={goToAgency} />
      </CheckifValid>

      <CheckifValid e={country.lgu}>
        <h3>Local Governments</h3>
        <ChooseElement
          countries={country.lgu}
          callbackFn={(e)=>jumpTo(e,goToLGU)}
          flavorText="Choose LGU..."
        />
        <RenderList countryPart={country.lgu} country={country} goTo={goToLGU}/>
      </CheckifValid>
    </div>
  );
};

export default CountryDisplay;
