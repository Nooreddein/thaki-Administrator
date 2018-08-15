import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Screens/Login';
import Main from './Screens/Main'
import AddAdmin from './Screens/AddAdmin'
import AddContent from './Screens/AddContent'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
      <Route path="/add-content" component={AddContent} />
        <Route path="/add-admin" component={AddAdmin} />
        <Route path="/home" component={Main} />
        <Route path="/" component={Login}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
