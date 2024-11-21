const Field = (item) => {
    return (
        <tr>
            <td>{item.rst_DisplayName}</td>
            <td>{item.rst_DisplayHelpText}</td>
            <td>{item.dty_Type}</td>
        </tr>
    )
};

export default Field;