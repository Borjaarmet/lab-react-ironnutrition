import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    calories: '',
    image: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const food = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
    };

    this.props.addFood(food);
  };

  render() {
    return (
      <form
        className="flex flex-col justify-center align-center border-2 p-2 bg-gray-200 w-1/2 mt-3 mb-4"
        onSubmit={this.handleSubmit}
      >
        <div className="my-2 mx-2">
          <label className="mx-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </div>
        <div className="my-2 mx-2">
          <label className="mx-2" htmlFor="image">
            Image
          </label>
          <input
            type="text"
            name="image"
            id="image"
            onChange={this.handleChange}
            value={this.state.image}
          />
        </div>
        <div className="my-2 mx-2">
          <label className="mx-2" htmlFor="calories">
            Calories
          </label>
          <input
            type="text"
            name="calories"
            id="calories"
            onChange={this.handleChange}
            value={this.state.calories}
          />
        </div>
        <button className="p-2 border-2 bg-blue-400 text-white w-1/3 text-center">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
