import React, { Component } from 'react';
import { Card, Header } from 'semantic-ui-react';
import { createContainer } from 'meteor/react-meteor-data';
import { PropTypes } from 'prop-types';

import { Ingredients } from '../api/ingredients.js';

import IngredientListItems from './ingredient_list_items';

class IngredientList extends Component {
  renderIngredient() {
    return this.props.ingredients.map((ingredient) => (
      <IngredientListItems key={ingredient._id} ingredient={ingredient} />
    ));
  }
  render() {
    return (
      <div>
        <header>
          <h1> Pick an ingredient !</h1>
        </header>
        <div className="ingredients">
          <Card.Group itemsPerRow={5} >
            {this.renderIngredient()}
          </Card.Group>
        </div>
      </div>
    );
  }
}

IngredientList.propTypes = {
  ingredients: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    ingredients: Ingredients.find().fetch(),
  };
}, IngredientList);
