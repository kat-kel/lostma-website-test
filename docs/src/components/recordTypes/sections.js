import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Field from './field'


const Section = (item) => {
    const [open, setOpen] = useState(false);
    return (
        <li className='list-group-item'>
        <Button
            onClick={() => setOpen(!open)}
            aria-controls="section-collapse-fields"
            aria-expanded={open}
        >
            {item.sectionName}
        </Button>
        <Collapse in={open}>
            <div id="section-collapse-fields">
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Name</th>
                            <th scope='col'>Description</th>
                            <th scope='col'>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.values(item.fields).map(field => (
                                Field(field)
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Collapse>
        </li>
    )
}

export default Section;