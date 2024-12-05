// Basic imports
import NavBar from './components/navbar';
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import React from 'react';
import './App.css';

// Route imports
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import People from './views/people';
import TextsDatabaseHome from './views/corpus'
import RecordTypePage from './views/corpus/views/RecordTypes';
import TEIPage from './views/corpus/views/WitnessTEI';
import WorkflowPage from './views/corpus/views/Workflow';
import News from './views/news';


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
