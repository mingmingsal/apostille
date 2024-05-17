import { CountryDisplayListItem } from "./CountryDisplayListItem";
import CountryCaptionDisplay from "./CountryCaptionDisplay";
const CountryDisplay = ({country}) => {
  return (
    <div className="country">
            <h2>{country.name}</h2>
            <h3>National Agencies</h3>
            {country.national_agencies.map((agency) => {
              return (
                <table key={`${country.name}_${agency.name}`}>
                  <CountryCaptionDisplay word={agency.name} />
                  <tbody>
                    {agency.address && <CountryDisplayListItem description={'Address/es'} listItem={agency.address} country={country}/>}
                    {agency.tel && <CountryDisplayListItem description={'Telephone Number/s'} listItem={agency.tel} country={country}/>}
                    {agency.fax && <CountryDisplayListItem description={'Fax Number/s'} listItem={agency.fax} country={country}/>}
                    {agency.email && <CountryDisplayListItem description={'Email/s'} listItem={agency.email} country={country}/>}
                    {agency.website && <CountryDisplayListItem description={'Website/s'} listItem={agency.website} country={country} clickable={true}/>}
                  </tbody>
                </table>
              );
            })}
            <h3>Local Governments</h3>
            {country.lgu.map((lgu) => {
              return (
                <table key={`${country.name}_${lgu.name}`}>
                  <CountryCaptionDisplay word={lgu.name} />
                  <tbody>
                  {lgu.address && <CountryDisplayListItem description={'Address/es'} listItem={lgu.address} country={country}/>}
                    {lgu.tel && <CountryDisplayListItem description={'Telephone Number/s'} listItem={lgu.tel} country={country}/>}
                    {lgu.authority && <CountryDisplayListItem description={'Authority/s'} listItem={lgu.authority} country={country}/>}
                    {lgu.email && <CountryDisplayListItem description={'Email/s'} listItem={lgu.email} country={country}/>}
                    {lgu.website && <CountryDisplayListItem description={'Website/s'} listItem={lgu.website} country={country} clickable={true}/>}
                  </tbody>
                </table>
              );
            })}
          </div>
  )
}

export default CountryDisplay