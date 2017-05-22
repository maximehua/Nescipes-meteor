import React, { Component } from 'react';
import { Card, Header } from 'semantic-ui-react';
import IngredientListItems from './ingredient_list_items';

class IngredientList extends Component {
  renderRecipes() {
    return this.props.recipes.map((recipe) => (
      <RecipeListItems key={recipe._id} recipe={recipe} />
    ));
  }
  render() {
    return (
      <div className="ingredients">
        <header>
          <h1> Pick an ingredient !</h1>
        </header>
        <Card.Group itemsPerRow={7}>
          <IngredientListItems image="poulet.png" name="Chicken" />
          <IngredientListItems image="beef.png" name="Ground Beef" />
          <IngredientListItems image="lardons.png" name="Herta Lardons" />
          <IngredientListItems image="salmon.png" name="Salmon" />
          <IngredientListItems image="tendre-noix.png" name="Herta Tendre Noix" />
          <IngredientListItems image="bacon.png" name="Herta Bacon" />
          <IngredientListItems image="eggs.png" name="Eggs" />
          <IngredientListItems image="rice.png" name="Rice" />
          <IngredientListItems image="potatoes.png" name="Potatoes" />
          <IngredientListItems image="pizza.png" name="Herta Pizza Dough" />
          <IngredientListItems image="quiche.png" name="Herta Quiche Dough" />
          <IngredientListItems image="pasta.png" name="Herta Pasta Dough" />
          <IngredientListItems image="kubor.png" name="Kub Or" />
        </Card.Group>
      </div>
    );
  }
}

export default IngredientList;
