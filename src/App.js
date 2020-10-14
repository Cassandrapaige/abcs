import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import './App.css';
import LayoutPage from './pages/layout.page';

const App = () => {
return (
    <BrowserRouter>
      <div className="App">
        {/* Redirect to page layout since I don't currently have a homepage designed */}
        {
          window.location.pathname === '/' && 
            <Redirect to = "layout/a" />
        }
      <Switch>
          <Route path = '/layout/:letter' render = {() => <LayoutPage/>} />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
