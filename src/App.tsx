/* eslint-disable max-classes-per-file */
/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

import AppRoutes from './routes/AppRoutes';

import { AppRoutesInterface } from './types/AppRoutesInterface';

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
              <li className="list__item">
                <Link data-testid="formsLink" to="/add-form">
                  Add Form
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          {AppRoutes.map((route: AppRoutesInterface) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
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
