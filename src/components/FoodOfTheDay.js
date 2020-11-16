import React from 'react';

const FoodOfTheDay = (props) => {
  function handleRemove(itemIdx) {
    let newList = [...props.state.todaysList];
    newList.splice(itemIdx, 1);
    props.setState({ ...props.state, todaysList: [...newList] });
  }

  return (
    <div className="m-3 p-5 box" style={{position: "sticky", top: "8rem"}}>
      <h1 className="h2 border-bottom my-2">Today's foods</h1>
      <ul>
        {props.state.todaysList.map((item, i) => (
          <li className="list-group-item h6 d-flex justify-content-between" key={i}>
            {item.quantity} {item.name}{' '}
            <i
              onClick={() => handleRemove(i)}
              style={{ cursor: 'pointer' }}
              className="fa fa-times"
              aria-hidden="true"
            ></i>{' '}
          </li>
        ))}
      </ul>
      <p className="h4 mt-5">
        Total:{' '}
        {props.state.todaysList.reduce(
          (acc, cv) => acc + cv.quantity * cv.calories,
          0
        )}
        cal
      </p>
    </div>
  );
};

export default FoodOfTheDay;
