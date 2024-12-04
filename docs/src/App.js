// Basic imports
import NavBar from './components/navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import React from 'react';
import './App.css';
import logo from './images/BNF_Fr95_209v_2.jpg';

// Route imports
import Home from './Home';
import People from './People';
import TextsDatabaseHome from './Corpus'
import RecordTypePage from './corpus/RecordTypes';
import TEIPage from './corpus/WitnessTEI';
import WorkflowPage from './corpus/Workflow';
import Footer from './Footer';
import News from './News';


const Header = () => {
  return (
    <header>
      <span className='background-image-container'>
        <img src={logo} alt="placeholder logo" className="background" />
      </span>
      <div className='container-fluid foreground'>
        <h1>LostMa</h1>
        <p>navigating the currents of culture</p>
      </div>
      <span className='image-citation'>
        Bibliothèque nationale de France, Français 95, folio 209v
      </span>
    </header>
  );
}


class App extends React.Component {
  render() {
    return (
      <>
        <Router history={this.history}>
          < Header />
          < NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/people" element={<People />} />
            <Route exact path="/corpus" element={<TextsDatabaseHome />} />
            <Route exact path='/news' element={<News />} />
            <Route exact path="/corpus/recordtypes" element={<RecordTypePage />} />
            <Route exact path="/corpus/workflow" element={<WorkflowPage />} />
            <Route exact path="/corpus/witnesstei" element={<TEIPage />} />
          </Routes>
          <ScrollToTop smooth className="scroll-to-top" />
        </Router>
        <Footer />
      </>
    );
  }
}


export default App;
