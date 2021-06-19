import React, { Component } from 'react';

class FoodBox extends Component {
  state = {
    quantity: 1,
  };

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      quantity: event.target.value,
    });
  };
  handleClick = () => {
    console.log('cliiiiiick');

    const selectedFood = {
      quantity: Number(this.state.quantity),
    };
    this.props.handleSelect(selectedFood);
  };

  render() {
    return (
      <div className="flex flex-col justify-center align-center w-full">
        <div className="flex justify-between mt-2 border-2 p-2 rounded-md w-1/2">
          <div className="media-left">
            <figure className="w-32 h-24">
              <img src={this.props.food.image} alt="" />
            </figure>
          </div>
          <div className="media-content">
            <div className="text-xl">
              <p>
                <strong>{this.props.food.name}</strong> <br />
                <small>{this.props.food.calories} cal</small>
              </p>
            </div>
          </div>

          <div className="media-right">
            <div className="flex justify-between">
              <div className="">
                <input
                  className="p-2 border-2"
                  type="number"
                  value={this.state.quantity}
                  onChange={this.handleChange}
                />
              </div>
              <div className="">
                <button onClick={this.handleClick} className="p-4 bg-blue-400 ">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FoodBox;
