import './People.css';

import React from 'react';

import Team from './components/Team';
import Collaborators from './components/Collaborators';


export default function People() {
    return (
        <>
            <Team />
            <hr />
            <Collaborators />
        </>
    );
}
