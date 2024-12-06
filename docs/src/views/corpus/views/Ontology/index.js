import './recordTypes.css';

import React, { useState } from 'react';

import DataContext from './components/contextData';
import Data from './components/fetchData';
import ProfilesCards from './Items';
import TableOfContents from './TableOfContents';


export default function Ontology() {
    const [value] = useState(Data);

    return (
        <>
            <h3>Profiles of Record Types</h3>
            <p>
                For the LostMa project, we created the following record types.
                The database relies on them as well as the general entities of "Person," "Place,"
                and several bibliographic entities native to Heurist, including "Book" and "Journal article."
            </p>
            <DataContext.Provider value={value}>
                <TableOfContents />
                <ProfilesCards />
            </DataContext.Provider>
        </>
    );
};
