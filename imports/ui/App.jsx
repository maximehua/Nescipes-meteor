import React, { Component } from 'react';
import { Button, Header, Icon, Modal, Grid } from 'semantic-ui-react'

import RecipeList from './recipe_list.jsx';
import IngredientList from './ingredient_list.jsx';

// App component - represents the whole app
class App extends Component {
  state = { modalOpen: true }

  handleOpen = (e) => this.setState({
    modalOpen: true,
  })

  handleClose = (e) => this.setState({
    modalOpen: false,
  })

  render() {
    return (
      <Modal trigger={
          <Grid>
            <Grid.Column width={11}>
              <IngredientList />
            </Grid.Column>
            <Grid.Column width={5}>
              <RecipeList />
            </Grid.Column>
          </Grid>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon='shopping cart' content='Welcome to Nescipes' />
        <Modal.Content>
          <p>Be ready to get into a new experience of food inspiration!</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
};

export default App;
