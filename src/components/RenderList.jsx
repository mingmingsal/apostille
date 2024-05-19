import CountryCaptionDisplay from "./CountryCaptionDisplay";
import { CountryDisplayListItem } from "./CountryDisplayListItem";
function RenderList({ countryPart, country, goTo }) {
    if (countryPart == null) return null;
    return (
      <>
        {countryPart.map((agency, index) => {
          return (
            <table  ref={(el) => (goTo.current[index] = el)} key={`${country.name}_${agency.name}`}>
              <CountryCaptionDisplay word={agency.name} />
              <tbody>
                {agency.address && (
                  <CountryDisplayListItem
                    description={"Address/es"}
                    listItem={agency.address}
                    country={country}
                  />
                )}
                {agency.authority && (
                  <CountryDisplayListItem
                    description={"Authority/s"}
                    listItem={agency.authority}
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
      </>
    );
  }

export default RenderList