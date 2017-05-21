import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { PropTypes } from 'prop-types';

import { Recipes } from '../api/recipes.js';

import RecipeListItems from './recipe_list_items.jsx';


class RecipeList extends Component {
  renderRecipes() {
    return this.props.recipes.map((recipe) => (
      <RecipeListItems key={recipe._id} recipe={recipe} />
    ));
  }
  render() {
    return(
      <div className="recipes">
        <header>
          <h1>Suggested Recipes</h1>
        </header>
        <ul>
          {this.renderRecipes()}
        </ul>
      </div>
    )
  }
}

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    recipes: Recipes.find({}).fetch(),
  };
}, RecipeList);
