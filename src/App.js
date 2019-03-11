import React, { Component } from 'react';
import List from './List.js';
import './App.css';
import { toUnicode } from 'punycode';

class App extends Component {

  state = {
    groceries: [
      { id: 1, name: "Milk", complete: false, },
      { id: 2, name: "Protein", complete: false, },
      { id: 3, name: "Eggs", complete: false, },
      { id: 4, name: "Water", complete: false, },
      { id: 5, name: "Cereal", complete: false, },

    ]
  };

  getId = () => {
    return (Math.floor((1+Math.random()) * 0x10000)
      .toString(16)
      .substring(1))
  }

  addItem = (name) => {
    const grocery = {id: this.getId(), name, complete: false}
    this.setState({ groceries: [grocery, ...this.state.todos] })
  }

  handleClick = (id) => {
    this.setState({
      groceries: this.state.groceries.map( grocery => {
        if (grocery.id === id) {
          return { ...grocery, complete: !grocery.complete}
        }
        return grocery;
      })
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Grocery List</h1>
        <List name="Grocery-List" items={this.state.groceries} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
