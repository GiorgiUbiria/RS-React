/* eslint-disable max-classes-per-file */
/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/404';

import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="main__app">
        <header>
          <nav className="nav__bar">
            <ul className="nav__list">
              <li className="list__item">
                <Link data-testid="homeLink" to="/">
                  Home
                </Link>
              </li>
              <li className="list__item">
                <Link data-testid="aboutUsLink" to="/about-us">
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}

export class WrappedApp extends Component {
  render() {
    return (
      <Router>
        <App />
      </Router>
    );
  }
}
