import React, { useContext } from 'react';

import RecordTypeCard from './RecordTypeCard';
import DataContext from '../components/contextData';


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