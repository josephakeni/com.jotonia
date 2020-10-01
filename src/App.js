import React from 'react';
import logo from './images/logo.svg';
import './App.css';
// import './resources/css/style.css';

import Home from "./pages/Home"
import Services from './pages/Services'
import Error from './pages/Error'
import SingleService from './pages/SingleService'
import Navbar from './components/Navbar'

import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/services/" component={Services}/>
        <Route exact path="/Services/:slug" component={SingleService}/>
        <Route exact path="/error" component={Error}/>
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
