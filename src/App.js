import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Screens/Login';
import Main from './Screens/Main'
import AddContent from './Screens/AddContent'
import CategoriesScreen from './Screens/CategoriesScreen';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/cat" component={CategoriesScreen} />
          <Route path="/add-content" component={AddContent} />
          <Route path="/home" component={Main} />
          <Route path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
