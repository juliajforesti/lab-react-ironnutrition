import React, { useEffect, useState } from 'react';

const FoodSearch = (props) => {
  const { filterFood } = props;
  const [searchInput, setSearchInput] = useState('');

  function handleChange(e) {
    const { value } = e.target;
    setSearchInput(value);
    props.setState({ ...props.state, isSearching: true });
  }

  useEffect(() => {
    filterFood(searchInput);
  }, [searchInput]);

  return (
    <div className="d-flex flex-column align-items-center mx-3">
      <input
        className="w-50 p-2"
        onChange={handleChange}
        type="text"
        placeholder="Search your food"
        name="searchInput"
        value={searchInput}
      />
    </div>
  );
};

export default FoodSearch;
