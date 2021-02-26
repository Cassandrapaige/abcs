import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles
import "./App.css";

// components
import LayoutPage from "./pages/layout.page";

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        {/* Redirect to page layout since I don't currently have a homepage designed */}
        {window.location.pathname === "/" && <Redirect to='layout/a' />}
        <Switch>
          <Route path='/layout/:letter' component={LayoutPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
