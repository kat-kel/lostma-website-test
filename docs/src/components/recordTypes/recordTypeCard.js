import Section from "./sections";
import { HashLink } from 'react-router-hash-link';
import buildLinkedOpenData from './buildLinkedOpenData'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import fieldToggle from '../utils';


const RecordTypeCard = (item) => {
    const refURL = item.metadata.rty_ReferenceURL;
    const [openAll, setOpenAll] = useState(true);
    return (
        <div className="card rty" id={item.metadata.rty_ID}>
            <div className="card-header d-flex justify-content-between">
                <div>{buildLinkedOpenData(refURL)}</div>
                <div>{item.metadata.rty_ID}</div>
            </div>
            <div className="card-body">
                <h4 className="card-title">
                    <HashLink to={`#${item.metadata.rty_ID}`}>
                        {item.metadata.rty_Name}
                    </HashLink>
                </h4>
                <p className="card-text">{item.metadata.rty_Description}</p>
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
            </div>
        </div>
    )
}

export default RecordTypeCard