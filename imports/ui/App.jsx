import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import RecipeList from './recipe_list.jsx';
import IngredientList from './ingredient_list.jsx';

// App component - represents the whole app
class App extends Component {
  render() {
      return (
        <Grid>
          <Grid.Column width={11}>
            <IngredientList />
          </Grid.Column>
          <Grid.Column width={5}>
            <RecipeList />
          </Grid.Column>
        </Grid>
      );
    }
  };

export default App;
