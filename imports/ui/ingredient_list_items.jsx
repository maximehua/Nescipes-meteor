import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'



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
        <Image src={`./public/images/${this.props.image}`} />
        <Card.Content>
          <Card.Description>
            <p>{this.props.name}</p>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default IngredientListItems;
