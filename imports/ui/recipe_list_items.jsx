import React, { Component } from 'react';
import { Card, Image, Modal, Button, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class RecipeListItems extends Component {
  render() {
    return (
      <Modal trigger={
        <Card>
          <Image src={this.props.recipe.illu} />
          <Card.Content>
            <Card.Header>
              {this.props.recipe.name}
            </Card.Header>
            <Card.Description>
              {this.props.recipe.duree}
            </Card.Description>
          </Card.Content>
        </Card>
        }>
        <Modal.Header>{this.props.recipe.name}</Modal.Header>
        <Modal.Content image>
          <Image src={this.props.recipe.illu} className="popupImage"/>
          <Modal.Description>
            <Header>Ingredients</Header>
            <p>{this.props.recipe.recette}</p>
            <a href src={this.props.recipe.url} >Show me this recipe</a>
          </Modal.Description>
        </Modal.Content>
      </Modal>

    );
  }
}
RecipeListItems.propTypes = {
  // This component gets the recipe to display through a React prop.
  // We can use propTypes to indicate it is required
  recipe: PropTypes.object.isRequired,
};

export default RecipeListItems;
