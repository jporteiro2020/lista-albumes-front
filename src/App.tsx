import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Login from './paginas/Login';
import Buscador from './paginas/Buscador';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/buscador/:stringBusqueda?" children={<Buscador />} />
        </Switch>
      </Router>
  );
}

export default App;
