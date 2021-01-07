import React from 'react';
import HomeView from '../../views/HomeView';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NotFoundView from '../../views/NotFoundView';
import LoginView from '../../views/LoginView';
import ProfileView from '../../views/ProfileView';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomeView}/>
          <Route path="/login" exact component={LoginView}/>
          <Route path="/profile" exact component={ProfileView}/>
          <Route component={NotFoundView}/>
        </Switch>
      </BrowserRouter>
    
    </div>
  )
}

export default App