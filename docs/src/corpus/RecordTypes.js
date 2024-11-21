import React from 'react'
import recordTypesJSON from "../rty_json/recordTypes.json"
import RecordTypeCard from "../components/recordTypes/recordTypeCard"
import { HashLink } from 'react-router-hash-link';


var sortedItems = Object.values(recordTypesJSON).sort(
  (a, b) => a.metadata.rty_Name.localeCompare(b.metadata.rty_Name)
);

const tableOfContents = () => {
  return (
    <ul className='table-of-contents'>
    {Object.values(sortedItems).map(item => (
      <li className='list-group-item'>
        <HashLink to={`#${item.metadata.rty_ID}`}>{item.metadata.rty_Name}</HashLink>
      </li>
    ))}
    </ul>
  )
}

const RecordTypePage = () => {
    return (
      <div id="record-types" className="container-fluid">
          <h3>Profiles of Record Types</h3>
          <p>For the LostMa project, we created the following record types. The database relies on them as well as the general entities of "Person," "Place," and several bibliographic entities native to Heurist, including "Book" and "Journal article."</p>
          {tableOfContents()}
          {
            Object.values(sortedItems).map(item => (RecordTypeCard(item)))
          }
      </div>
    );
  }

  
export default RecordTypePage;
