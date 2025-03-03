import { Component } from 'react';
import './citylist.css'

class CityList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
    };
  }

  addCity = () => {
    const cityName = document.getElementById(`cityInput-${this.props.state.name}`).value.trim();
    if (cityName) {
      this.setState((prevState) => ({
        cities: [...prevState.cities, cityName],
      }));
      document.getElementById(`cityInput-${this.props.state.name}`).value = "";
    }
  };

  deleteCity = (index) => {
    if (window.confirm("Are you sure you want to delete this city?")) {
      const updatedCities = [...this.state.cities];
      updatedCities.splice(index, 1);
      this.setState({ cities: updatedCities });
    }
  };

  render() {
    return (
      <div className='city-container'>
        <h4>Cities in {this.props.state.name}</h4>
        <input type="text" id={`cityInput-${this.props.state.name}`} placeholder="Enter city name" />
        <button onClick={this.addCity} className='add-btn'>Add City</button>
        <ul>
          {this.state.cities.map((city, index) => (
            <li key={index}>
              <h3>{city}</h3>
              <button onClick={() => this.deleteCity(index)} className='delete-btn'>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CityList;
