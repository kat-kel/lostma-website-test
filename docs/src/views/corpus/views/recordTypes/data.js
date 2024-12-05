import recordTypesJSON from '../../../../data/recordTypes.json';


var SortedProfiles = Object.values(recordTypesJSON).sort(
    (a, b) => a.metadata.rty_Name.localeCompare(b.metadata.rty_Name)
);

export default SortedProfiles;