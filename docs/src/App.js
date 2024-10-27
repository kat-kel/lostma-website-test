import NavBar from './components/navbar';
import logo from './images/duck.jpg';
import Home from './views/Home';
import RecordTypePage from './views/RecordTypes';
import About from './views/About';
import {
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
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
        <Route path="" element={<Home />} />
        <Route path="/views/recordtypes" element={<RecordTypePage />} />
        <Route path="/views/about" element={<About />} />
      </Routes>
    </div>
  );
}


export default App;
