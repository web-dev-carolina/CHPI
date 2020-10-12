import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Component/Navbar.js';
import Home from './Component/Home.js';
import About from './Component/About.js';
import Homelessness from './Component/Homelessness.js';
import Testimonials from './Component/Testimonials.js';
import Contact from './Component/Contact.js';
import Footer from './Component/Footer.js';

function App() {
  return (

    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/About-Homelessness" component={Homelessness} />
        <Route path="/Testimonials" component={Testimonials} />
        <Route path="/Contact" component={Contact} />
      </Switch>

      <Footer />
      
    </Router>

  );
}

export default App;
