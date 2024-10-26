import * as RecordTypes from './components'

const rtypes = Object.keys(RecordTypes);

function App() {
  return (
    <div>
      <h1>LostMa Record Types</h1>
      {rtypes.map(i => {
        const RT = RecordTypes[i];
        return <RT />
      })}
  </div>
  );
}

export default App;
