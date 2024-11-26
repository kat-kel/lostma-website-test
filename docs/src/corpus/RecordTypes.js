import React from 'react'
import recordTypesJSON from "../rty_json/recordTypes.json"
import RecordTypeCard from "../components/recordTypes/recordTypeCard"
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import fieldToggle from '../components/utils';


var sortedItems = Object.values(recordTypesJSON).sort(
  (a, b) => a.metadata.rty_Name.localeCompare(b.metadata.rty_Name)
);

const tableOfContents = () => {
  return (
    <ul className='list-group'>
      {Object.values(sortedItems).map(item => (
        <li className='list-group-item'>
          <HashLink to={`#${item.metadata.rty_ID}`}>{item.metadata.rty_Name}</HashLink>
        </li>
      ))}
    </ul>
  )
}

const RecordTypePage = () => {
  const [openTOC, setOpenTOC] = useState(false);
  const [openProfiles, setOpenProfiles] = useState(true);
  return (
    <div id="record-types" className="container-fluid">
      <h3>Profiles of Record Types</h3>
      <p>For the LostMa project, we created the following record types. The database relies on them as well as the general entities of "Person," "Place," and several bibliographic entities native to Heurist, including "Book" and "Journal article."</p>

      <Button
        onClick={() => setOpenTOC(!openTOC)}
        aria-controls="table-of-contents-collapse"
        aria-expanded={openTOC}
      >
        {fieldToggle(openTOC)} Table of Contents
      </Button>
      <Collapse in={openTOC}>
        <div id="table-of-contents-collapse">
          {tableOfContents()}
        </div>
      </Collapse>

      <br />

      <Button
        onClick={() => setOpenProfiles(!openProfiles)}
        aria-controls="record-profiles-collapse"
        aria-expanded={openProfiles}
      >
        {fieldToggle(openProfiles)} Record Profiles
      </Button>
      <Collapse in={openProfiles}>
        <div id="record-profiles-collapse">
          {
            Object.values(sortedItems).map(item => (RecordTypeCard(item)))
          }
        </div>
      </Collapse>
    </div>
  );
}


export default RecordTypePage;
