import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import BubblePage from './components/BubblePage'
import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  
   const logoutFunc = localStorage.removeItem('token');

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a onClick={logoutFunc} data-testid="logoutButton" href='/'>logout</a>
        </header> 
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
        <PrivateRoute exact path='/protected' component={BubblePage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.