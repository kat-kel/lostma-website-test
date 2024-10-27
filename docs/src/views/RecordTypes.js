import * as RecordTypes from '../rty_components'
import rtyArray from '../rty_components/index.json'

const rtypes = Object.keys(RecordTypes);

const ListItem = ({ obj }) => (
  <li><a href={obj["id"]}>{obj["name"]}</a></li>
);

const List = ({ items }) => (
  <ul>
    {
      items.map((item, _) => <ListItem obj={item} />)
    }
  </ul>
);

function RecordTypePage() {
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
        const RT = RecordTypes[i];
        return <RT />
      })}
    </div>
  );
}

export default RecordTypePage;
