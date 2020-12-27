import "./App.css";
import React from "react";
import Select from "react-select";
import Country from "./components/countries/country/Country";

const options = [
  { label: "---AFRICA---", isdisabled: true },
  { value: "DZ", label: "Algeria" },
  { value: "AO", label: "Angola" },
  { value: "BJ", label: "Benin" },
  { value: "BW", label: "Botswana" },
  { value: "BF", label: "Burkina Faso" },
  { value: "BI", label: "Burundi" },
  { value: "CM", label: "Cameroon" },
  { value: "CV", label: "Cape Verde" },
  { value: "CF", label: "Central African Republic" },
  { value: "TD", label: "Chad" },
  { value: "KM", label: "Comoros" },
  { value: "CG", label: "Congo" },
  { value: "CD", label: "Congo, Democratic Republic of" },
  { value: "CI", label: "Côte d'Ivoire" },
  { value: "DJ", label: "Djibouti" },
  { value: "EG", label: "Egypt" },
  { value: "GQ", label: "Equatorial Guinea" },
  { value: "ER", label: "Eritrea" },
  { value: "ET", label: "Ethiopia" },
  { value: "GA", label: "Gabon" },
  { value: "GM", label: "Gambia" },
  { value: "GH", label: "Ghana" },
  { value: "GN", label: "Guinea" },
  { value: "GW", label: "Guinea-Bissau" },
  { value: "KE", label: "Kenya" },
  { value: "LS", label: "Lesotho" },
  { value: "LR", label: "Liberia" },
  { value: "LY", label: "Libyan Arab Jamahiriya" },
  { value: "MG", label: "Madagascar" },
  { value: "MW", label: "Malawi" },
  { value: "ML", label: "Mali" },
  { value: "MR", label: "Mauritania" },
  { value: "MU", label: "Mauritius" },
  { value: "YT", label: "Mayotte" },
  { value: "MA", label: "Morocco" },
  { value: "MZ", label: "Mozambique" },
  { value: "NA", label: "Namibia" },
  { value: "NE", label: "Niger" },
  { value: "NG", label: "Nigeria" },
  { value: "RE", label: "Reunion" },
  { value: "RW", label: "Rwanda" },
  { value: "SH", label: "Saint Helena" },
  { value: "ST", label: "Sao Tome and Principe" },
  { value: "SN", label: "Senegal" },
  { value: "SC", label: "Seychelles" },
  { value: "SL", label: "Sierra Leone" },
  { value: "SO", label: "Somalia" },
  { value: "ZA", label: "South Africa" },
  { value: "SS", label: "South Sudan" },
  { value: "SD", label: "Sudan" },
  { value: "SZ", label: "Eswatini" },
  { value: "TZ", label: "Tanzania" },
  { value: "TG", label: "Togo" },
  { value: "TN", label: "Tunisia" },
  { value: "UG", label: "Uganda" },
  { value: "EH", label: "Western Sahara" },
  { value: "ZM", label: "Zambia" },
  { value: "ZW", label: "Zimbabwe" },
  { label: "---Antarctica---", isdisabled: true },
  { value: "AQ", label: "Antarctica" },
  { value: "BV", label: "Bouvet Island" },
  { value: "TF", label: "French Southern Territories" },
  { value: "HM", label: "Heard Island and McDonald Islands" },
  { value: "GS", label: "South Georgia and the South Sandwich Islands" },
  { label: "---Australia/Oceania---", isdisabled: true },
  { value: "AS", label: "American Samoa" },
  { value: "AU", label: "Australia" },
  { value: "CK", label: "Cook Island" },
  { value: "FJ", label: "Fiji" },
  { value: "PF", label: "French Polynesia" },
  { value: "GU", label: "Guam" },
  { value: "KI", label: "Kiribati" },
  { value: "MH", label: "Marshal Islands" },
  { value: "FM", label: "Micronesia" },
  { value: "NR", label: "Nauru" },
  { value: "NC", label: "New Caledonia" },
  { value: "NZ", label: "New Zealand" },
  { value: "NU", label: "Niue" },
  { value: "NF", label: "Norfolk Island" },
  { value: "MP", label: "Northern Mariana Islands" },
  { value: "PW", label: "Palau" },
  { value: "PG", label: "Papua New Guinea" },
  { value: "PN", label: "Pitcairn Islands" },
  { value: "WS", label: "Samoa" },
  { value: "SB", label: "Solomon Islands" },
  { value: "TK", label: "Tokelau" },
  { value: "TO", label: "Tonga, Kingdom of" },
  { value: "TV", label: "Tuvalu" },
  { value: "UM", label: "United States Minor Outlying Islands" },
  { value: "VU", label: "Vanuatu" },
  { value: "WF", label: "Wallis and Futuna" },
  { label: "---Asia---", isdisabled: true },
  { value: "AF", label: "Afghanistan" },
  { value: "AZ", label: "Azerbaijan" },
  { value: "BH", label: "Bahrain" },
  { value: "BD", label: "Bangladesh" },
  { value: "BT", label: "Bhutan" },
  { value: "IO", label: "British Indian Ocean Territory" },
  { value: "BN", label: "Brunei Darussalam" },
  { value: "KH", label: "Cambodia" },
  { value: "CN", label: "China, People's Republic of" },
  { value: "CX", label: "Christmas Island" },
  { value: "CC", label: "Cocos Islands" },
  { value: "CY", label: "Cyprus" },
  { value: "GE", label: "Georgia" },
  { value: "HK", label: "Hong Kong" },
  { value: "IN", label: "India" },
  { value: "ID", label: "Indonesia" },
  { value: "IR", label: "Iran, Islamic Republic of" },
  { value: "IQ", label: "Iraq" },
  { value: "IL", label: "Israel" },
  { value: "JP", label: "Japan" },
  { value: "JO", label: "Jordan" },
  { value: "KZ", label: "Kazakhstan" },
  { value: "KP", label: "North Korea" },
  { value: "KR", label: "South Korea" },
  { value: "KW", label: "Kuwait" },
  { value: "KG", label: "Kyrgyzstan" },
  { value: "LA", label: "Laos" },
  { value: "LB", label: "Lebanon" },
  { value: "MO", label: "Macao" },
  { value: "MY", label: "Malaysia" },
  { value: "MV", label: "Maldives" },
  { value: "MN", label: "Mongolia" },
  { value: "MM", label: "Myanmar" },
  { value: "NP", label: "Nepal" },
  { value: "OM", label: "Oman" },
  { value: "PK", label: "Pakistan" },
  { value: "PS", label: "Palestinian Territory" },
  { value: "PH", label: "Philippines" },
  { value: "QA", label: "Qatar" },
  { value: "SA", label: "Saudi Arabia" },
  { value: "SG", label: "Singapore" },
  { value: "LK", label: "Sri Lanka" },
  { value: "SY", label: "Syrian Arab Republic" },
  { value: "TW", label: "Taiwan" },
  { value: "TJ", label: "Tajikistan" },
  { value: "TH", label: "Thailand" },
  { value: "TL", label: "Timor-Leste" },
  { value: "TR", label: "Turkey" },
  { value: "TM", label: "Turkmenistan" },
  { value: "AE", label: "United Arab Emirates" },
  { value: "UZ", label: "Uzbekistan" },
  { value: "VN", label: "Vietnam" },
  { value: "YE", label: "Yemen" },
  { label: "---Europe---", isdisabled: true },
  { value: "AX", label: "Aland Islands" },
  { value: "AL", label: "Albania" },
  { value: "AD", label: "Andorra" },
  { value: "AM", label: "Armenia" },
  { value: "AT", label: "Austria" },
  { value: "BE", label: "Belgium" },
  { value: "BA", label: "Bosnia and Herzegovina" },
  { value: "BG", label: "Buglaria, Republic of" },
  { value: "HR", label: "Croatia" },
  { value: "CZ", label: "Czech Republic" },
  { value: "DK", label: "Denmark" },
  { value: "EE", label: "Estonia" },
  { value: "FO", label: "Faroe Islands" },
  { value: "FI", label: "Finland" },
  { value: "FR", label: "France" },
  { value: "DE", label: "Germany" },
  { value: "GI", label: "Gibraltar" },
  { value: "GR", label: "Greece" },
  { value: "GG", label: "Guernsey" },
  { value: "VA", label: "Vatican City State" },
  { value: "HU", label: "Hungary" },
  { value: "IS", label: "Iceland" },
  { value: "IE", label: "Ireland" },
  { value: "IM", label: "Isle of Man" },
  { value: "IT", label: "Italy" },
  { value: "JE", label: "Jersey" },
  { value: "LV", label: "Latvia" },
  { value: "LT", label: "Lithuania" },
  { value: "LU", label: "Luxembourg" },
  { value: "MK", label: "Republic of North Macedonia" },
  { value: "MT", label: "Malta" },
  { value: "MD", label: "Moldova" },
  { value: "MC", label: "Monaco" },
  { value: "ME", label: "Montenegro" },
  { value: "NL", label: "Netherlands" },
  { value: "NO", label: "Norway" },
  { value: "PL", label: "Poland" },
  { value: "PT", label: "Portugal" },
  { value: "RO", label: "Romania" },
  { value: "RU", label: "Russian Federation" },
  { value: "SM", label: "San Marino" },
  { value: "RS", label: "Serbia" },
  { value: "SK", label: "Slovakia" },
  { value: "SI", label: "Slovenia" },
  { value: "ES", label: "Spain" },
  { value: "SJ", label: "Svalbard & Jan Mayen Islands" },
  { value: "SE", label: "Sweden" },
  { value: "CH", label: "Switzerland" },
  { value: "UA", label: "Ukraine" },
  { value: "GB", label: "United Kingdom" },
  { label: "---North America---", isdisabled: true },
  { value: "AI", label: "Anguilla" },
  { value: "AW", label: "Aruba" },
  { value: "BQ", label: "Bonaire, Sint Eustatius and Saba" },
  { value: "CA", label: "Canada" },
  { value: "CU", label: "Cuba" },
  { value: "CW", label: "Curaçao" },
  { value: "DM", label: "Dominica" },
  { value: "DO", label: "Dominican Republic" },
  { value: "SV", label: "El Salvador" },
  { value: "GL", label: "Greenland" },
  { value: "GD", label: "Grenada" },
  { value: "GP", label: "Guadeloupe" },
  { value: "GT", label: "Guatemala" },
  { value: "HT", label: "Haiti" },
  { value: "HN", label: "Honduras" },
  { value: "JM", label: "Jamaica" },
  { value: "MQ", label: "Martinique" },
  { value: "MX", label: "Mexico" },
  { value: "MS", label: "Montserrat" },
  { value: "AN", label: "Netherlands Antilles" },
  { value: "NI", label: "Nicaragua" },
  { value: "PA", label: "Panama" },
  { value: "PR", label: "Puerto Rico" },
  { value: "BL", label: "Saint Barthelemy" },
  { value: "KN", label: "Saint Kitts and Nevis" },
  { value: "LC", label: "Saint Lucia" },
  { value: "MF", label: "Saint Martin" },
  { value: "PM", label: "Saint Pierre and Miquelon" },
  { value: "VC", label: "Saint Vincent and the Grenadines" },
  { value: "SX", label: "Sint Maarten" },
  { value: "TT", label: "Trinidad and Tobago" },
  { value: "TC", label: "Turks and Caicos Islands" },
  { value: "UM", label: "United States Minor Outlying Islands" },
  { value: "US", label: "United States of America" },
  { value: "VI", label: "US Virgin Islands" },
  { label: "---South America---", isdisabled: true },
  { value: "AR", label: "Argentina" },
  { value: "BO", label: "Bolivia" },
  { value: "BR", label: "Brazil" },
  { value: "CL", label: "Chile" },
  { value: "CO", label: "Colombia" },
  { value: "EC", label: "Ecuador" },
  { value: "FK", label: "Falkland Islands" },
  { value: "GF", label: "French Guiana" },
  { value: "GY", label: "Guyana" },
  { value: "PY", label: "Paraguay" },
  { value: "PE", label: "Peru" },
  { value: "SR", label: "Suriname" },
  { value: "UY", label: "Uruguay" },
  { value: "VE", label: "Venezuela" },
];

class App extends React.Component {
  state = {
    selectedOption: null,
    country: "",
  };
  handleChange = (selectedOption) => {
    selectedOption = selectedOption.value;
    this.setState({ selectedOption: selectedOption });
    console.log("option selected:", selectedOption);
  };

  getCountry = async () => {
    //e.preventDefault();
    try {
      const headers = new Headers();
      headers.append(
        "x-rapidapi-key",
        `dba4d5eba8msh8d67d69720a9160p1af3fbjsn01d7a5767d31`
      );
      headers.append("x-rapidapi-host", "countries-cities.p.rapidapi.com");
      headers.append("useQueryString", true);
      const url =
        `https://countries-cities.p.rapidapi.com/location/country/` +
        this.state.selectedOption;

      const res = await fetch(url, {
        method: "GET",
        headers: headers,
      });
      const country = await res.json();
      console.log(country);
      this.setState({ country: country });
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    const { selectedOption, country } = this.state;
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          Hello World
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
            className="Select"
            isOptionDisabled={(option) => option.isdisabled}
          />
          <button onClick={this.getCountry}>Search</button>
        </header>
        <Country country={country} />
      </div>
    );
  }
}

export default App;
