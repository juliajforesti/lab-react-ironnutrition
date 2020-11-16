import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';
import FoodSearch from './components/FoodSearch';
import FoodOfTheDay from './components/FoodOfTheDay';

function App() {
  const [state, setState] = useState({
    foodList: [...foods.sort((a, b) => a.name.localeCompare(b.name))],
    filteredFoodList: [...foods.sort((a, b) => a.name.localeCompare(b.name))],
    isSearching: false,
    toggleForm: true,
    todaysList: [],
    totalCal: 0,
  });
  function handleToggle() {
    setState({ ...state, toggleForm: !state.toggleForm });
  }
  function filterFood(input) {
    const filtered = state.foodList.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    console.log(filtered);
    setState({ ...state, filteredFoodList: [...filtered] });
  }
  function handlePlusClick(name, cal, quantity) {
    let currentToday = [...state.todaysList];
    currentToday.push({ name: name, calories: cal, quantity: quantity });
    setState({ ...state, todaysList: currentToday });
  }
  return (
    <div className="App">
      <h1 className="title m-5">Iron-nutrition</h1>

      <FoodSearch state={state} setState={setState} filterFood={filterFood} />
      
      <div className="d-flex flex-column align-items-center mx-3">
        {state.toggleForm ? (
          <button onClick={handleToggle} className="button is-info my-3 w-50">
            Add new Food
          </button>
        ) : (
          <>
            <button onClick={handleToggle} className="button is-info my-3 w-50">
              Cancel
            </button>
            <FoodForm state={state} setState={setState} />
          </>
        )}
      </div>
      <div className="d-flex align-items-start justify-content-around p-2">
        <div>
          {state.isSearching ? (
            state.filteredFoodList.map((food, i) => (
              <FoodBox food={food} key={i} handlePlusClick={handlePlusClick} />
            ))
          ) : (
            state.foodList.map((food, i) => (
              <FoodBox food={food} key={i} handlePlusClick={handlePlusClick} />
            ))
          )}
        </div>
        <FoodOfTheDay state={state} setState={setState} />
      </div>
    </div>
  );
}

export default App;
