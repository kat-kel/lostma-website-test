// Basic imports
import './App.css';

import React, {useEffect} from 'react';
import {
    HashRouter as Router,
    Route,
    Routes,
    useLocation
} from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';

import NavBar from './components/navbar';
import Footer from './Footer';
import Header from './Header';
import TextsDatabaseHome from './views/corpus';
import RecordTypePage from './views/corpus/views/RecordTypes';
import TEIPage from './views/corpus/views/WitnessTEI';
import WorkflowPage from './views/corpus/views/Workflow';
import Home from './views/home';
import News from './views/news';
import People from './views/people';


function StartAtTop() {
    const location = useLocation();

    useEffect(() => {
    // Scroll to the top of the page whenever the route changes
        window.scrollTo(0, 0);
    }, [location]);
}

class App extends React.Component {
    render() {
        return (
            <>
                <Router history={this.history}>
                    < StartAtTop />
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
