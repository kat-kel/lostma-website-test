import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import { fieldToggle } from '../../../../components/utils';


function ContentList(items) {
    return (
        <ul className='list-group'>
            {Object.values(items).map(item => (
                <li className='list-group-item'>
                    <HashLink to={`#${item.metadata.rty_ID}`}>{item.metadata.rty_Name}</HashLink>
                </li>
            ))}
        </ul>
    );
}

function TableOfContents(items) {
    const [openTOC, setOpenTOC] = useState(false);
    return (
        <>
            <h3>Profiles of Record Types</h3>
            <p>
            For the LostMa project, we created the following record types.
            The database relies on them as well as the general entities of "Person," "Place,"
            and several bibliographic entities native to Heurist, including "Book" and "Journal article."
            </p>
            
            <Button
                onClick={() => setOpenTOC(!openTOC)}
                aria-controls="table-of-contents-collapse"
                aria-expanded={openTOC}
            >
                {fieldToggle(openTOC)} Table of Contents
            </Button>
            <Collapse in={openTOC}>
                <div id="table-of-contents-collapse">
                    {ContentList(items)}
                </div>
            </Collapse>
            <br />
        </>
    );
}

export default TableOfContents;