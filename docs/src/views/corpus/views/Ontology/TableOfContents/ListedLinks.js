import { HashLink } from 'react-router-hash-link';
import React, { useContext } from 'react';

import DataContext from '../components/contextData';

export default function ListedLinks() {
    const data = useContext(DataContext);

    return (
        <>
            {Object.values(data).map(item => (
                <li className='list-group-item'>
                    <HashLink to={`#${item.metadata.rty_ID}`}>{item.metadata.rty_Name}</HashLink>
                </li>
            ))}
        </>
    )
};