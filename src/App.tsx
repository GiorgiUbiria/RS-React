import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

import AppRoutes from './routes/AppRoutes';

import { AppRoutesInterface } from './types/AppRoutesInterface';

import './App.css';

import RSLogo from './assets/logo_rs.svg';

export function App() {
  return (
    <div className="main__app">
      <header className="main_header">
        <nav className="nav__bar">
          <img className="rs-logo" src={RSLogo} alt="logo" />
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
              <Link data-testid="formsLink" to="/forms">
                Forms
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

function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default WrappedApp;
