import { faAddressBook, faDatabase, faFeed } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { HashLink } from 'react-router-hash-link';

import { MainPage } from './components/utils.js';


const FrontMatter = () => {
    return (
        <>
            <h2 className="mb-3">What is LostMa?</h2>
            <p className="lead fs-4 text-secondary mb-3">
                A digital humanities research project that blends AI, complexity science, and philological expertise to unravel the mysteries behind the deviation from pure chance of a text's transmission.
            </p>
            <p className="mb-5">
                We are funded by the European Research Council (ERC) for five years, 2024-2029. Our offices are in the Campus Condorcet's Hôtel à projets and we are hosted by the École nationale des chartes in Paris, France.
            </p>
        </>
    );
};

const Grid = () => {
    return (
        <>
            <div className="row gy-4 gy-md-0 gx-xxl-5X">
                {/* First point */}
                <div className="col-12 col-md-6">
                    <div className="d-flex">
                        <div className="me-4 text-primary">
                            <HashLink to="/people">
                                <FontAwesomeIcon icon={faAddressBook} />
                            </HashLink>
                        </div>
                        <div>
                            <h2 className="h4 mb-3">People</h2>
                            <p className="text-secondary mb-0">We are a small team with collaborators from around Europe, contributing area expertise on various textual traditions.</p>
                        </div>
                    </div>
                </div>
                {/* Second point */}
                <div className="col-12 col-md-6">
                    <div className="d-flex">
                        <div className="me-4 text-primary">
                            <HashLink to="/corpus">
                                <FontAwesomeIcon icon={faDatabase} />
                            </HashLink>
                        </div>
                        <div>
                            <h2 className="h4 mb-3">Corpus</h2>
                            <p className="text-secondary mb-0">We are building a multilingual corpus of Medieval literary traditions, focused on epics and knights' tales.</p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="row gy-4 gy-md-0 gx-xxl-5X">
                {/* Third point */}
                <div className="col-12 col-md-6">
                    <div className="d-flex">
                        <div className="me-4 text-primary">
                            <HashLink to="/news">
                                <FontAwesomeIcon icon={faFeed} />
                            </HashLink>
                        </div>
                        <div>
                            <h2 className="h4 mb-3">News</h2>
                            <p className="text-secondary mb-0">We are committed to open science and the sharing of our results with the scientific community and general public.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const Content = () => {
    return (
        <>
            <FrontMatter />
            <Grid />
        </>
    );
};
class Home extends React.Component {
    render() {
        return (MainPage(Content));
    }
}
export default Home;
