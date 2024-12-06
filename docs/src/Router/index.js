import React from 'react';
import { HashRouter } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';

import NavBar from './Navbar';
import Routes from './Routes';
import StartAtTop from './StartAtTop';

export default function Router() {
    return (
        <HashRouter>
            < StartAtTop />
            < NavBar />
            <section className="py-3 py-md-5">
                <div className="container">
                    <div className="row justify-content-xl-center">
                        <div className="col-12 col-xl-11">
                            <div id="body">
                                <Routes />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ScrollToTop smooth className="scroll-to-top" />
        </HashRouter>
    );
};