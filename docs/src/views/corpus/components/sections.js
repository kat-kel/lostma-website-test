import Collapse from 'react-bootstrap/Collapse';

import Field from './field';


const Section = (item, openAll) => {
    return (
        <li className='list-group-item'>
            <span className='section-header'>{item.sectionName}</span>
            <Collapse in={openAll}>
                <div id="section-collapse-fields" className='table-responsive'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>Name</th>
                                <th scope='col'>Description</th>
                                <th scope='col'>Type</th>
                                <th scope='col'>Linked Open Data</th>
                                <th scope='col'>Vocabulary</th>
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
    );
};

export default Section;