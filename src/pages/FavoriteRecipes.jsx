import React from 'react';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const test = require('clipboard-copy');

function linkShare(id, type) {
  if (type === 'bebida') {
    test(`/drinks/${id}`);
  } else {
    test(`/meals/${id}`);
  }
}

const mockRecipe = [
  {
    id: '52771',
    type: 'meal',
    nationality: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
  },
  {
    id: '178319',
    type: 'drink',
    nationality: '',
    category: 'Cocktail',
    alcoholicOrNot: 'Alcoholic',
    name: 'Aquamarine',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
  }];

function FavoriteRecipes() {
  return (
    <div>
      <Header title="Favorite Recipes" />
      <button type="button" data-testid="filter-by-all-btn">
        All
      </button>
      <button type="button" data-testid="filter-by-meal-btn">
        Meals
      </button>
      <button type="button" data-testid="filter-by-drink-btn">
        Drinks
      </button>
      {mockRecipe.map((recipe, index) => (
        <div key={ recipe.id }>
          <img
            src={ recipe.image }
            alt={ recipe.name }
            data-testid={ `${index}-horizontal-image` }
          />
          <p
            data-testid={ `${index}-horizontal-name` }
            id={ recipe.id }
          >
            {recipe.name}
          </p>
          {recipe.alcoholicOrNot && (
            <p data-testid={ `${index}-horizontal-top-text` }>
              {recipe.alcoholicOrNot}
              {' '}
              -
              {' '}
              {recipe.category}
            </p>
          )}
          {recipe.area && (
            <p data-testid={ `${index}-horizontal-top-text` }>
              {recipe.area}
              {' '}
              -
              {' '}
              {recipe.category}
            </p>
          )}
          {recipe.nationality && (
            <p data-testid={ `${index}-horizontal-top-text` }>
              {recipe.nationality}
              {' '}
              -
              {' '}
              {recipe.category}
            </p>
          )}
          <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
          <button
            type="button"
            data-testid={ `${index}-horizontal-favorite-btn` }
            src={ blackHeartIcon }
          >
            <img
              src={ blackHeartIcon }
              alt="Icone de Favorito"
            />
          </button>
          <button
            type="button"
            data-testid={ `${index}-horizontal-share-btn` }
            onClick={ () => (linkShare(recipe.id, recipe.type)) }
            src={ shareIcon }
          >
            <img
              src={ shareIcon }
              alt="Icone para Compartilhar link"
            />
          </button>
        </div>
      ))}
    </div>
  );
}

export default FavoriteRecipes;
