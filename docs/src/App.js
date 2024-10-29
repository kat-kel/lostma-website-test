import NavBar from './components/navbar';
import logo from './images/duck.jpg';
import Home from './views/Home';
import RecordTypePage from './views/RecordTypes';
import About from './views/About';
import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router history={this.history}>
        <div>
          <header>
            <span>
              <img src={logo} width="60px" alt="placeholder duck" className="float-left" />
            </span>
            <h1 id="logo">LostMa</h1>
            <p>LostMa project tag line.</p>
          </header>
          < NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/views/recordtypes" element={<RecordTypePage />} />
            <Route exact path="/views/about" element={<About />} />
          </Routes>
          <ScrollToTop smooth className="scroll-to-top" />
        </div>
      </Router>
    );
  }
}


export default App;
