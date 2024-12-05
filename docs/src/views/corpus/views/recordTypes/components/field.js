import buildLinkedOpenData from './buildLinkedOpenData';


const makeHelpText = (item) => {
    return (
        <div
            className="help-text"
            dangerouslySetInnerHTML={{ __html: item.rst_DisplayHelpText }}
        ></div>
    );
};

const Field = (item) => {
    const helpText = makeHelpText(item);
    const refURL = item.dty_SemanticReferenceURL;
    return (
        <>
            <tr className="field-data">
                <td className="field" id={item.dty_ID}>
                    <code>{item.rst_DisplayName}</code>
                </td>
                <td className="field field-block-text">
                    {helpText}
                </td>
                <td className='field'>
                    {item.dty_Type}
                </td>
                <td className='field'>
                    {buildLinkedOpenData(refURL)}
                </td>
                <td className='field'>
                    {item.trm_Label}
                </td>
            </tr>
        </>
    );
};

export default Field;