import React, { useContext } from 'react';

import DataContext from '../components/contextData';
import RecordTypeCard from './components/RecordTypeCard';


export default function ProfilesCards() {
    const data = useContext(DataContext);
    return (
        <div>
            {
                Object.values(data).map(item => (RecordTypeCard(item)))
            }
        </div>

    );
};