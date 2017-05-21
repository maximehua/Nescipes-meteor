import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import RecipeList from './recipe_list.jsx';
import IngredientList from './ingredient_list.jsx';

// App component - represents the whole app
class App extends Component {
  render() {
      return (
        <Grid>
          <Grid.Column width={12}>
            <IngredientList />
          </Grid.Column>
          <Grid.Column width={4}>
            <RecipeList />
          </Grid.Column>
        </Grid>
      );
    }
  };

export default App;
