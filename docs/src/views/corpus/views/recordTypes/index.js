import './recordTypes.css';

import React from 'react';

import { MainPage } from '../../../../components/utils';
import RecordTypeCard from './components/recordTypeCard';
import TableOfContents from './tableOfcontents';
import SortedProfiles from './data';


function ProfilesCards() {
    return (
        <div>
            {
                Object.values(SortedProfiles).map(item => (RecordTypeCard(item)))
            }
        </div>

    );
}

const Content = () => {
    return (
        <>
            {TableOfContents(SortedProfiles)}
            <ProfilesCards />
        </>
    );
};
class RecordTypePage extends React.Component {
    render() {
        return (MainPage(Content));
    }
}
export default RecordTypePage;
