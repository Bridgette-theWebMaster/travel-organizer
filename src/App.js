import "./App.css";
import React from "react";
import Select from "react-select";
import Country from "./components/countries/country/Country";
import options from "./options";
import "dotenv";

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
      headers.append("x-rapidapi-key", `x-rapidapi-key`);
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
          <h1>Travel Organizer</h1>
          <button>Login</button>
          <button>Register</button>
        </header>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
          className="Select"
          isOptionDisabled={(option) => option.isdisabled}
        />
        <button onClick={this.getCountry}>Search</button>
        <Country country={country} />
      </div>
    );
  }
}

export default App;
