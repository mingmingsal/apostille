import { CountryDisplayListItem } from "./CountryDisplayListItem";
import CountryCaptionDisplay from "./CountryCaptionDisplay";
import { useRef, useEffect } from "react";
import ChooseElement from "./ChooseElement";
const CountryDisplay = ({ country }) => {
  const goToLGU = useRef([]);
  // you can access the elements with itemsRef.current[n]

  useEffect(() => {
    goToLGU.current = goToLGU.current.slice(0, country.lgu.length);
  }, [country.lgu]);

  function jumpTo(e) {
    console.log(e.target.value);
    console.log(goToLGU.current);
    goToLGU.current[e.target.value].scrollIntoView(true);
  }
  return (
    <div className="country">
      <h2>{country.name}</h2>
      <h3>National Agencies</h3>
      {country.national_agencies.map((agency) => {
        return (
          <table key={`${country.name}_${agency.name}`}>
            <CountryCaptionDisplay word={agency.name} />
            <tbody>
              {agency.address && (
                <CountryDisplayListItem
                  description={"Address/es"}
                  listItem={agency.address}
                  country={country}
                />
              )}
              {agency.tel && (
                <CountryDisplayListItem
                  description={"Telephone Number/s"}
                  listItem={agency.tel}
                  country={country}
                />
              )}
              {agency.fax && (
                <CountryDisplayListItem
                  description={"Fax Number/s"}
                  listItem={agency.fax}
                  country={country}
                />
              )}
              {agency.email && (
                <CountryDisplayListItem
                  description={"Email/s"}
                  listItem={agency.email}
                  country={country}
                />
              )}
              {agency.website && (
                <CountryDisplayListItem
                  description={"Website/s"}
                  listItem={agency.website}
                  country={country}
                  clickable={true}
                />
              )}
              {agency.contacts && (
                <CountryDisplayListItem
                  description={"Contact/s"}
                  listItem={agency.contacts}
                  country={country}
                />
              )}
            </tbody>
          </table>
        );
      })}

      <h3>Local Governments</h3>
      <ChooseElement countries={country.lgu} callbackFn={jumpTo} />

      {country.lgu.map((lgu, index) => {
        return (
          <table
            key={`${country.name}_${lgu.name}`}
            ref={(el) => (goToLGU.current[index] = el)}
          >
            <CountryCaptionDisplay word={lgu.name} />
            <tbody>
              {lgu.address && (
                <CountryDisplayListItem
                  description={"Address/es"}
                  listItem={lgu.address}
                  country={country}
                />
              )}
              {lgu.tel && (
                <CountryDisplayListItem
                  description={"Telephone Number/s"}
                  listItem={lgu.tel}
                  country={country}
                />
              )}
              {lgu.authority && (
                <CountryDisplayListItem
                  description={"Authority/s"}
                  listItem={lgu.authority}
                  country={country}
                />
              )}
              {lgu.email && (
                <CountryDisplayListItem
                  description={"Email/s"}
                  listItem={lgu.email}
                  country={country}
                />
              )}
              {lgu.website && (
                <CountryDisplayListItem
                  description={"Website/s"}
                  listItem={lgu.website}
                  country={country}
                  clickable={true}
                />
              )}
              {lgu.contacts && (
                <CountryDisplayListItem
                  description={"Contact/s"}
                  listItem={lgu.contacts}
                  country={country}
                />
              )}
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default CountryDisplay;
