import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Toggle from '../components/Toggle';
import BuildLinkedOpenData from './BuildLinkedOpenData';
import Section from './Sections';


export default function RecordTypeCard(item) {
    const refURL = item.metadata.rty_ReferenceURL;
    const [openAll, setOpenAll] = useState(true);
    return (
        <div className="card rty" id={item.metadata.rty_ID}>
            <div className="card-header d-flex justify-content-between">
                <div>{BuildLinkedOpenData(refURL)}</div>
                <div>{item.metadata.rty_ID}</div>
            </div>
            <div className="card-body">
                <h4 className="card-title">
                    {item.metadata.rty_Name}
                </h4>
                <p className="card-text">{item.metadata.rty_Description}</p>
                <div>
                    <Button
                        onClick={() => setOpenAll(!openAll)}
                        aria-controls="collapse-all-sections"
                        aria-expanded={openAll}
                    >
                        {Toggle(openAll)} Fields
                    </Button>
                    <ul className="list-group">
                        {
                            Object.values(item.sections).map(section => Section(section, openAll))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};