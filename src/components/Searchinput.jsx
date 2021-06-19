import React, { Component } from 'react';

class Searchinput extends Component {
  handleChange = (event) => {
    this.props.onSearchValue(event.target.value);
  };

  render() {
    return (
      <input
        className="p-2 border-2 w-1/2 flex flex-start mb-4"
        name="search"
        value={this.props.value}
        onChange={this.handleChange}
        placeholder="Search for a food"
      />
    );
  }
}

export default Searchinput;
