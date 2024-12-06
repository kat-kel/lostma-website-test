export default function MakeHelpText(val) {
    return (
        <div
            className="help-text"
            dangerouslySetInnerHTML={{ __html: val }}
        ></div>
    );
};