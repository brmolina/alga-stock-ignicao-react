import React from 'react';
import HomeView from '../../views/HomeView';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomeView}>
             
          </Route>
        </Switch>
      </BrowserRouter>
    
    </div>
  )
}

export default App