import Collapse from 'react-bootstrap/Collapse';

import { FieldBody, FieldHeader } from './Field';

function Section(item, openAll) {
    return (
        <li className='list-group-item'>
            <span className='section-header'>{item.sectionName}</span>
            <Collapse in={openAll}>
                <div id="section-collapse-fields">
                    <table className='table table-responsive table-bordered'>
                        <FieldHeader />
                        <tbody>
                            {
                                Object.values(item.fields).map(field => (
                                    FieldBody(field)
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </Collapse>
        </li>
    );
};

export default Section;