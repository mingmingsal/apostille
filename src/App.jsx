import { countries } from "./countries";
import "./App.css";
import CountryDisplay from "./components/CountryDisplay";
import { useState } from "react";
function App() {
  const [selectedCountry,setSelectedCountry] = useState(null);
  function chooseCountry(e){
    if(!Object.hasOwn(countries,e.target.value)) setSelectedCountry(null);
    else setSelectedCountry(e.target.value);
  }
  return (
    <>
      <select onChange={(e)=>chooseCountry(e)}>
        <option>Choose Country...</option>
      {
      Object.keys(countries).map((country) => {
        console.log(country);
          return <option key={country}>{country}</option>;
        })
        }
      </select>

      {selectedCountry && <div className="countryList">
      <CountryDisplay key={countries[selectedCountry]} country={countries[selectedCountry]} />;
      </div>}
    </>
  );
}

export default App;
