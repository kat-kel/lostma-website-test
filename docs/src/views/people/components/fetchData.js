import peopleJSON from '../../../data/people.json';

var TeamMemberData = Object.values(peopleJSON.Team).sort(
    (a, b) => a.surname.localeCompare(b.surname)
);


var CollaboratorData = Object.values(peopleJSON.Collaborators).sort(
    (a, b) => a.surname.localeCompare(b.surname)
);

export { TeamMemberData, CollaboratorData };