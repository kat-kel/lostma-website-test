import '../Items.css';

import BuildLinkedOpenData from './BuildLinkedOpenData';
import MakeHelpText from './HelpText';
import Vocabulary from './Vocabulary';

function FieldHeader() {
    return (
        <thead className='data-field-header'>
            <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Description</th>
                <th scope='col'>Type</th>
                <th scope='col'>Semantic Reference URL</th>
                <th scope='col' colSpan={2}>Vocabulary</th>
            </tr>
        </thead>
    );
};

function FieldBody(item) {
    const helpText = MakeHelpText(item.rst_DisplayHelpText);

    return (
        <>
            <tr>
                <td id={item.dty_ID}>
                    <code>{item.rst_DisplayName}</code>
                </td>
                <td>
                    {helpText}
                </td>
                <td>
                    {item.dty_Type}
                </td>
                <td>
                    {BuildLinkedOpenData(item.dty_SemanticReferenceURL)}
                </td>
                <td>
                    <code>{item.trm_Label}</code>
                </td>
                <td>
                    {Vocabulary(item.vocabTerms)}
                </td>
            </tr>
        </>
    );
};

export { FieldBody, FieldHeader };