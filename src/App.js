import { Component } from 'react';
import CountryList from './components/CountryList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryList: [],
    };
  }

  addCountry = () => {
    const countryName = document.getElementById("newCountry").value.trim();
    if (countryName) {
      this.setState((prevState) => ({
        countryList: [...prevState.countryList, { name: countryName, states: [] }],
      }));
      document.getElementById("newCountry").value = "";
    }
  };

  editCountry = (index, newName) => {
    if (newName) {
      const updatedCountries = [...this.state.countryList];
      updatedCountries[index].name = newName;
      this.setState({ countryList: updatedCountries });
    }
  };

  deleteCountry = (index) => {
    if (window.confirm("Do you want to delete this country?")) {
      const updatedCountries = [...this.state.countryList];
      updatedCountries.splice(index, 1);
      this.setState({ countryList: updatedCountries });
    }
  };

  render() {
    return (
      <div>
        <h1>Country Management</h1>
        <input type="text" id="newCountry" placeholder="Enter country name" />
        <button onClick={this.addCountry} className='add-btn'>Add Country</button>
        <CountryList
          countries={this.state.countryList}
          deleteCountry={this.deleteCountry}
          editCountry={this.editCountry}
        />
      </div>
    );
  }
}

export default App;
