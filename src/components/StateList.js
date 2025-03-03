import { Component } from 'react';
import CityList from './CityList';
import './statelist.css'

class StateList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      states: [],
      editIndex: null,
      editedName: "",
    };
  }

  addNewState = () => {
    const stateName = document.getElementById(`stateInput-${this.props.country.name}`).value.trim();
    if (stateName) {
      this.setState((prevState) => ({
        states: [...prevState.states, { name: stateName, cities: [] }],
      }));
      document.getElementById(`stateInput-${this.props.country.name}`).value = "";
    }
  };

  handleEdit = (index, name) => {
    this.setState({ editIndex: index, editedName: name });
  };

  handleInputChange = (event) => {
    this.setState({ editedName: event.target.value });
  };

  saveEdit = (index) => {
    const updatedStates = [...this.state.states];
    updatedStates[index].name = this.state.editedName;
    this.setState({ states: updatedStates, editIndex: null, editedName: "" });
  };

  deleteState = (index) => {
    if (window.confirm("Do you want to delete this state?")) {
      const updatedStates = [...this.state.states];
      updatedStates.splice(index, 1);
      this.setState({ states: updatedStates });
    }
  };

  render() {
    return (
      <div>
        <h2>States in {this.props.country.name}</h2>
        <input type="text" id={`stateInput-${this.props.country.name}`} placeholder="Enter state name" />
        <button onClick={this.addNewState} className='add-btn'>Add State</button>
        <ul className='state-container'>
          {this.state.states.map((state, index) => (
            <li key={index}>
              {this.state.editIndex === index ? (
                <>
                  <input type="text" value={this.state.editedName} onChange={this.handleInputChange} />
                  <button onClick={() => this.saveEdit(index)} className='edit-btn'>Save</button>
                  <button onClick={() => this.setState({ editIndex: null })} className='delete-btn'>Cancel</button>
                </>
              ) : (
                <>
                  <h2>{state.name}</h2>
                  <button onClick={() => this.handleEdit(index, state.name)} className='edit-btn'>Edit</button>
                  <button onClick={() => this.deleteState(index)} className='delete-btn'>Delete</button>
                </>
              )}
              <div className='citylists'>
              <CityList state={state} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default StateList;
