import React, { useState } from 'react';
import foods from '../foods.json';

const FoodForm = (props) => {
  const { state, setState } = props;
  const [input, setInput] = useState({
    name: '',
    calories: '',
    image: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    foods.push({
      name: input.name[0].toUpperCase() + input.name.slice(1).toLowerCase(),
      calories: input.calories,
      image:
        'https://www.comidaereceitas.com.br/wp-content/uploads/2017/11/burrito_atum.jpg',
      quantity: 0,
    });
    setState({ ...state, foodList: [...foods] });
    setInput({ name: '', calories: '', image: '' });
  }
  return (
    <div className="d-flex flex-column align-items-center w-100">
      <form className="d-flex flex-column w-50" action="">
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={input.name}
          placeholder="Pizza"
        />
        <input
          onChange={handleChange}
          type="number"
          name="calories"
          value={input.calories}
          placeholder="200"
        />

        <button onClick={handleSubmit} className="button is-info my-3">
          Add
        </button>
      </form>
    </div>
  );
};

export default FoodForm;
