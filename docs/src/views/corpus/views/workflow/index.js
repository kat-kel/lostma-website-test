import React from 'react';
import { HashLink } from 'react-router-hash-link';

import ManualWorkflow from './components/ManualWorkflow';
import References from './components/References';


export default function WorkflowPage() {
    return (
        <>
            <h4>Entering data</h4>
            <p>There are 2 ways to input data:</p>
            <ul>
                <li><HashLink to='#ManualWorkflow'>Graphic User Interface</HashLink></li>
                <li><HashLink to='#CSVWorkflow'>CSV Batch Import</HashLink></li>
            </ul>
            <p>Heurist offers a graphic user interface that lets uers input data one by one. This method is the easiest to learn and best for avoiding accidents.</p>
            <p>Users can also input multiple examples of 1 record type by preparing and importing a CSV file. The CSV must conform to the record type's data fields and contain the Heurist IDs (not merely the name or label) of any related record types.</p>
            <References />
            <ManualWorkflow />
        </>
    );
};

