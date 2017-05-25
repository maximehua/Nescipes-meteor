import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types';

class IngredientListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {isToogleOn: true};

    //This binding is necessary to make 'this' work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    const ingredientClassName = this.state.isToggleOn ? 'green' : 'grey'
    return (
      <Card onClick={this.handleClick} color={ ingredientClassName }>
        <Image src={this.props.ingredient.illu} />
        <Card.Content>
          <Card.Description>
            <p>{this.props.ingredient.name}</p>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

IngredientListItems.propTypes = {
  // This component gets the recipe to display through a React prop.
  // We can use propTypes to indicate it is required
  ingredient: PropTypes.object.isRequired,
};

export default IngredientListItems;
