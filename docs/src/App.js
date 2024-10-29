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
import React from 'react';
import './styles/reduction.scss';


class App extends React.Component {
  render() {
    return (
      <Router history={this.history}>
        <div>
          <header>
            <span>
              <img src={logo} width="60px" alt="placeholder duck" className="rounded float-left" />
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
        </div>
      </Router>
    );
  }
}


export default App;
