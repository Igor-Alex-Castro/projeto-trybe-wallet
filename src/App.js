import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/login/Login';
import Wallet from './pages/Wallet/Wallet';
import './App.css';

function App() {
  return (
    <div className="all-container">

      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/carteira" component={ Wallet } />
      </Switch>
    </div>);
}

export default App;
