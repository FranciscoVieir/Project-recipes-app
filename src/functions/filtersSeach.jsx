import React, { useState } from 'react';
// import PropTypes from 'prop-types'
import { filterIngredient, filterName, filterFirstLetter } from '../services/api';

function filtersSearch() {
  const [searchInput, setSearchInput] = useState('');
  const [filterSearch, setFilterSearch] = useState('');
  const [dataSearch, setDataSearch] = useState('');

  const verifySearch = () => {
    if (filterSearch === 'ingredient') {
      setDataSearch(filterIngredient(searchInput));
    }
    if (filterSearch === 'name') {
      setDataSearch(filterName(searchInput));
    }
    if (filterSearch === 'first') {
      if (searchInput.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      } else {
        setDataSearch(filterFirstLetter(searchInput));
      }
    }
  };

  return (
    <div className="container-filters">
      <label htmlFor="search-input">
        <input
          type="text"
          data-testid="search-input"
          onChange={ (e) => setSearchInput(e.target.value) }
        />
      </label>
      <label htmlFor="filters-ingredient">
        <input
          type="radio"
          id="filters-ingredient"
          name="filters-search"
          data-testid="ingredient-search-radio"
          value="ingredient"
          onChange={ (e) => setFilterSearch(e.target.value) }
        />
        Ingredient
      </label>
      <label htmlFor="filters-name">
        <input
          type="radio"
          name="filters-search"
          id="filters-name"
          data-testid="name-search-radio"
          value="name"
          onChange={ (e) => setFilterSearch(e.target.value) }
        />
        Name
      </label>
      <label htmlFor="filters-first">
        <input
          id="filters-first"
          type="radio"
          name="filters-search"
          data-testid="first-letter-search-radio"
          value="first"
          onChange={ (e) => setFilterSearch(e.target.value) }
        />
        First letter
      </label>
      <input
        type="button"
        value="Pesquisar"
        data-testid="exec-search-btn"
        onClick={ verifySearch }
      />
    </div>
  );
}

// Header.propTypes = {}

export default filtersSearch;
