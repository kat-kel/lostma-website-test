// Basic imports
import NavBar from './components/navbar';
import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import React from 'react';
import './App.css';
import logo from './images/duck.jpg';

// Route imports
import Home from './Home';
import About from './About';
import TextsDatabaseHome from './Corpus'
import RecordTypePage from './corpus/RecordTypes';
import TEIPage from './corpus/WitnessTEI';
import WorkflowPage from './corpus/Workflow';


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
            <Route exact path="/about" element={<About />} />
            <Route exact path="/corpus" element={<TextsDatabaseHome />} />
            <Route exact path="/corpus/recordtypes" element={<RecordTypePage />} />
            <Route exact path="/corpus/workflow" element={<WorkflowPage />} />
            <Route exact path="/corpus/witnesstei" element={<TEIPage />} />
          </Routes>
          <ScrollToTop smooth className="scroll-to-top" />
        </div>
      </Router>
    );
  }
}


export default App;
