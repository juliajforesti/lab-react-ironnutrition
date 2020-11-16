import React, { useState } from 'react';

const FoodBox = (props) => {
  const [quantity, setQuantity] = useState(0);

  function handleQuantityChange(){
    setQuantity(quantity + 1)
  }

  const {food} = props
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={food.image} alt='food' />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{food.name}</strong> <br />
              <small>{food.calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input onChange={handleQuantityChange} className="input" type="number" value={quantity} />
            </div>
            <div className="control">
              {quantity === 0 ? (
                <button disabled onClick={()=>props.handlePlusClick(food.name, food.calories, quantity)} className="button is-info">+</button>
              ) : (
                <button onClick={()=>props.handlePlusClick(food.name, food.calories, quantity)} className="button is-info">+</button>
              )}
              
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FoodBox;
