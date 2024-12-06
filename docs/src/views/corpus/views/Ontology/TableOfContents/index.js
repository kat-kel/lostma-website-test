import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import ShowHideToggle from '../components/Toggle';
import ListedLinks from './ListedLinks';

export default function TableOfContents() {
    const [openTOC, setOpenTOC] = useState(false);

    return (
        <>
            <Button
                onClick={() => setOpenTOC(!openTOC)}
                aria-controls="table-of-contents-collapse"
                aria-expanded={openTOC}
            >
                {ShowHideToggle(openTOC)} Table of Contents
            </Button>
            <Collapse in={openTOC}>
                <div id="table-of-contents-collapse">
                    <ul className='list-group'>
                        <ListedLinks />
                    </ul>
                </div>
            </Collapse>
            <br />
        </>
    );
};