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
import logo from './images/BNF_Fr12558_f58v.jpg';

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
              <img src={logo} alt="placeholder logo" className="background" />
            </span>
            <div className='container-fluid foreground'>
              <h1>LostMa</h1>
              <p>navigating the currents of culture</p>
            </div>
            <span className='image-citation'>
              Bibliothèque nationale de France, Français 12558, folio 58v
            </span>
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
