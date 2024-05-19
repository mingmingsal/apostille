import { countries } from "./countries";
import "./App.css";
import CountryDisplay from "./components/CountryDisplay";
import { useState, useRef } from "react";
import ChooseElement from "./components/ChooseElement";
function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const top = useRef(null);
  function chooseCountry(e) {
    if (!Object.hasOwn(countries, e.target.value)) setSelectedCountry(null);
    else setSelectedCountry(e.target.value);
  }
  function scrollTo(ref){
    ref.current.scrollIntoView();
  }
  return (
    <>
      <header>
        <h2 ref={top}>Apostille Finder</h2>
        {!selectedCountry && <p><i>Find Competent Authorities for Apostille Certifications.</i></p>}
        
      </header>
      <ChooseElement countries={countries} callbackFn={chooseCountry} flavorText='Choose Country...'/>

      {selectedCountry && (
        <>
        <div className="countryList">
          <CountryDisplay
            key={countries[selectedCountry]}
            country={countries[selectedCountry]}
          />
          
        </div>
        <button className="return" onClick={()=>scrollTo(top)}>Back to Top</button>
        </>
      )}
    </>
  );
}

export default App;
