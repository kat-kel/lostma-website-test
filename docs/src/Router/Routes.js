import {
    Route,
    Routes,
} from 'react-router-dom';

import Corpus from '../views/Corpus';
import CorpusData from '../views/Corpus/views/Data';
import CorpusOntology from '../views/Corpus/views/Ontology';
import CorpusWorkflow from '../views/Corpus/views/Workflow';
import Home from '../views/Home';
import News from '../views/News';
import People from '../views/People';

export default function RouteList() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/people" element={<People />} />
            <Route exact path="/corpus" element={<Corpus />} />
            <Route exact path='/news' element={<News />} />
            <Route exact path="/corpus/ontology" element={<CorpusOntology />} />
            <Route exact path="/corpus/workflow" element={<CorpusWorkflow />} />
            <Route exact path="/corpus/data" element={<CorpusData />} />
        </Routes>
    );
};