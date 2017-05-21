import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class RecipeListItems extends Component {
  render() {
    return (
      <Card>
        <Image src={this.props.recipe.illu} />
        <Card.Content>
          <Card.Header>
            {this.props.recipe.name}
          </Card.Header>
          <Card.Description>
            {this.props.recipe.ingredients}
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}
RecipeListItems.propTypes = {
  // This component gets the recipe to display through a React prop.
  // We can use propTypes to indicate it is required
  recipe: PropTypes.object.isRequired,
};

export default RecipeListItems;
