import * as RecordTypes from '../rty_components'
import rtyArray from '../rty_components/index.json'
import React from 'react';
import { HashLink } from 'react-router-hash-link'

const rtypes = Object.keys(RecordTypes);

const ListItem = ({ obj }) => {
  let href = "#" + obj["id"]
  return <li><HashLink to={href}>{obj["name"]}</HashLink></li>
};

const List = ({ items }) => (
  <ul>
    {
      items.map((item, _) => <ListItem obj={item} />)
    }
  </ul>
);

class RecordTypePage extends React.Component {
  render() {
    return (
      <div id="record-types">
        <div className="container-fluid">
          <h3>Profiles of Record Types</h3>
          <p>For the LostMa project, we created the following record types. The database relies on them as well as the general entities of "Person," "Place," and several bibliographic entities native to Heurist, including "Book" and "Journal article."</p>
        </div>
        <ul id="record-profile-list">
          <List items={rtyArray} />
        </ul>
        {rtypes.map(i => {
          const RTY = RecordTypes[i];
          return <RTY />
        })}
      </div>
    );
  }
}

export default RecordTypePage;
