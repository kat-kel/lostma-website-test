import React from 'react'
import recordTypesJSON from "../rty_json/recordTypes.json"
import RecordTypeCard from "../components/recordTypes/recordTypeCard"
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { fieldToggle } from '../components/utils';
import { MainPage } from '../components/utils.js';


var sortedItems = Object.values(recordTypesJSON).sort(
  (a, b) => a.metadata.rty_Name.localeCompare(b.metadata.rty_Name)
);

function tableOfContents() {
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

function TOC() {
  const [openTOC, setOpenTOC] = useState(false);
  return (
    <>
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
    </>
  )
}

function Profiles() {
  return (
    <div id="record-profiles-collapse">
      {
        Object.values(sortedItems).map(item => (RecordTypeCard(item)))
      }
    </div>

  )
}

const FrontMatter = () => {
  return (
    <div id="record-types" className="container-fluid">
      <h3>Profiles of Record Types</h3>
      <p>
        For the LostMa project, we created the following record types.
        The database relies on them as well as the general entities of "Person," "Place,"
        and several bibliographic entities native to Heurist, including "Book" and "Journal article."
      </p>
      <TOC /> <br />
      <Profiles />
    </div>
  )
}

const Content = () => {
  return (
    <>
      <FrontMatter />
      <TOC /> <br />
      <Profiles />
    </>
  )
}
class RecordTypePage extends React.Component {
  render() {
    return (MainPage(Content));
  }
}
export default RecordTypePage;
