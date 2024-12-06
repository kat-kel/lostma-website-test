import BuildLinkedOpenData from "./BuildLinkedOpenData"

function TermListItem(term) {
    return (
        <li className="list-group-item borderless">
            <div className="row">
                <div className="col">
                    {term.label}
                </div>
                <div className="col">
                    {BuildLinkedOpenData(term.url)}
                </div>
            </div>
        </li>
    )
};

export default function Vocabulary(terms) {
    if (terms) {
        return (
            <ul className="list-group">
                {Object.values(terms).map(term => TermListItem(term)
                )}
            </ul>

        )
    }
    else {
        return (
            <><div className="invisible-left"></div></>
        )
    }
};