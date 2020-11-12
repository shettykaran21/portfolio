import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
