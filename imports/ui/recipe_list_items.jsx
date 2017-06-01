import React, { Component } from 'react';
import { Card, Image, Modal, Button, Header, Icon, Divider } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class RecipeListItems extends Component {
  state = { modalOpen: false }

  handleOpen = (e) => this.setState({
    modalOpen: true,
  })

  handleClose = (e) => this.setState({
    modalOpen: false,
  })

  handleClick() {
    //function to send to the Arduino
  }

  render() {
    return (
      <Modal trigger={
        <Card onClick={this.handleOpen} >
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
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>{this.props.recipe.name}</Modal.Header>
        <Modal.Content image>
          <Image src={this.props.recipe.illu} className="popupImage"/>
          <Modal.Description>
            <Header>Ingredients</Header>
            <p>{this.props.recipe.recette}</p>
          </Modal.Description>
          <Modal.Actions>
            <Button color='red' inverted onClick={this.handleClose} >
              <Icon name='undo' /> Look for another
            </Button>
            <Divider />
            <Button color='green' inverted>
              <Icon name='checkmark' /> Validate
            </Button>
          </Modal.Actions>
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
