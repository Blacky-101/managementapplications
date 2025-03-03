import { Component } from 'react';
import StateList from './StateList';
import  './countrylist.css'

class CountryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editIndex: null,
      editedName: "",
    };
  }

  handleEdit = (index, name) => {
    this.setState({ editIndex: index, editedName: name });
  };

  handleInputChange = (event) => {
    this.setState({ editedName: event.target.value });
  };

  saveEdit = (index) => {
    this.props.editCountry(index, this.state.editedName);
    this.setState({ editIndex: null, editedName: "" });
  };

  render() {
    const { countries, deleteCountry } = this.props;
    const { editIndex, editedName } = this.state;

    return (
      <div className='country-container'>
        <h1>Countries</h1>
        <ul>
          {countries.map((country, index) => (
            <li key={index}>
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editedName}
                    onChange={this.handleInputChange}
                  />
                  <button onClick={() => this.saveEdit(index)}>Save</button>
                  <button onClick={() => this.setState({ editIndex: null })}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  {country.name}
                  <button onClick={() => this.handleEdit(index, country.name)} className='edit-btn'>Edit</button>
                  <button onClick={() => deleteCountry(index)} className='delete-btn'>Delete</button>
                </>
              )}
              <div >
              <StateList country={country} /></div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CountryList;
