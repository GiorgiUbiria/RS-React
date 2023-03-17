import { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/404";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main__app">
          <header>
            <nav className="nav__bar">
              <ul className="nav__list">
                <li className="list__item">
                  <Link to="/">Home</Link>
                </li>
                <li className="list__item">
                  <Link to="/about-us">About Us</Link>
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
      </Router>
    );
  }
}

export default App;
