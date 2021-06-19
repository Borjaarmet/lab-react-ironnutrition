import React, { Component } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import Form from './components/Form';
import Searchinput from './components/Searchinput';

class App extends Component {
  state = {
    foods: foods,
    searchValue: '',
    todaysFood: [],
  };

  handleForm = () => {
    const foodForm = document.getElementById('foodForm');
    foodForm.classList.toggle('hidden');
  };

  handleAddFood = (food) => {
    this.setState({
      foods: [food, ...this.state.foods],
    });

    this.handleForm();
  };

  handleSearchValue = (searchValue) => {
    this.setState({
      searchValue: searchValue,
    });
  };

  handleSelectFood = (food) => {
    const todaysFoodCopy = [...this.state.todaysFood];

    let foundFood = todaysFoodCopy.find((el) => el.name === food.name);

    food.calories *= food.quantity;

    todaysFoodCopy.push(food);
    this.setState({
      todaysFood: [foundFood, todaysFoodCopy],
    });
  };
  render() {
    const filteredFoods = this.state.foods.filter((food) => {
      return food.name.toLowerCase().includes(this.state.searchValue);
    });
    const totalCalories = this.state.todaysFood.reduce(
      (accumulator, currentFood) => {
        return (accumulator += currentFood.calories);
      },
      0
    );

    return (
      <div className="App">
        <h1 className="text-4xl underline mb-4">Iron Nutrition</h1>
        <Searchinput
          value={this.state.searchValue}
          onSearchValue={this.handleSearchValue}
        />
        <div>
          <button
            className="border-2 p-2 rounded-md bg-blue-400 flex flex-start"
            onClick={this.handleForm}
          >
            Add New Food
          </button>
          <div id="foodForm" className="flex flex-start">
            <Form addFood={this.handleAddFood} />
          </div>
          <div id="todaysfood" className="border-2 p-4 float-right mr-6 w-1/4">
            <h1 className="text-2xl">Today´s food</h1>
            <ul>
              {this.state.todaysFood.map((food, index) => (
                <li key={index}>
                  {food.quantity} {food.name} = {food.calories} cal
                </li>
              ))}
              <strong>Total: {totalCalories} </strong>
            </ul>
          </div>
        </div>

        {filteredFoods.map((food, index) => {
          return (
            <FoodBox
              food={food}
              key={index}
              handleSelect={this.handleSelectFood}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
