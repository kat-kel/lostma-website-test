import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import { fieldToggle } from '../../../components/utils';
import buildLinkedOpenData from './buildLinkedOpenData';
import Section from './sections';


function DataFields(item) {
    const [openAll, setOpenAll] = useState(true);
    return (
        <div>
            <Button
                onClick={() => setOpenAll(!openAll)}
                aria-controls="collapse-all-sections"
                aria-expanded={openAll}
            >
                {fieldToggle(openAll)} Fields
            </Button>
            <ul className="list-group">
                {
                    Object.values(item.sections).map(section => Section(section, openAll))
                }
            </ul>
        </div>
    );
}

const RecordTypeCard = (item) => {
    const refURL = item.metadata.rty_ReferenceURL;
    return (
        <div className="card rty" id={item.metadata.rty_ID}>
            <div className="card-header d-flex justify-content-between">
                <div>{buildLinkedOpenData(refURL)}</div>
                <div>{item.metadata.rty_ID}</div>
            </div>
            <div className="card-body">
                <h4 className="card-title">
                    {item.metadata.rty_Name}
                </h4>
                <p className="card-text">{item.metadata.rty_Description}</p>
                {DataFields(item)}
            </div>
        </div>
    );
};


export default RecordTypeCard;