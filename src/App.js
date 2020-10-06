import React from 'react';
import logo from './images/logo.svg';
import './App.css';
// import './resources/css/style.css';

import Home from "./pages/Home"
import Solutions from './pages/Solutions'
import Error from './pages/Error'
import SingleSolution from './pages/SingleSolution'
import Navbar from './components/Navbar'

import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/solutions/" component={Solutions}/>
        <Route exact path="/solutions/:slug" component={SingleSolution}/>
        <Route exact path="/error" component={Error}/>
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
