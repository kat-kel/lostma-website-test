import Section from "./sections";
import { HashLink } from 'react-router-hash-link';


function buildLink (val) {
        if (val) {
            return (
                <a 
                    className="badge badge-primary link"
                    target="_blank" 
                    rel="noreferrer noopener" 
                    href={val}>
                        Linked Open Data
                </a>
            )
        }
        else {
            return (
                <span className="badge badge-secondary">Linked Open Data</span>
        )
        }
}

const RecordTypeCard = (item) => {
    const refURL = item.metadata.rty_ReferenceURL;
    return (
        <div className="card rty" id={item.metadata.rty_ID}>
            <div className="card-header d-flex justify-content-between">
                <div>{buildLink(refURL)}</div>
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
                    <h5>Data Field Sections:</h5>
                    <ul className="list-group">
                    {
                        Object.values(item.sections).map(section => Section(section))
                    }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RecordTypeCard