import { HashLink } from 'react-router-hash-link'

export default function Digitization() {
    return (
<div className="container-lg" id="126">
  <div className="card bg-light mb-3" style={{position: "sticky", top: "0"}}>
    <div className="card-body">
      <h4 className="card-title">digitization</h4>
      <h6 className="card-subtitle mb-2 text-body-secondary">Record ID 126</h6>
      <p className="card-text">Digital document visually representing a physical document or archival item.</p>
    </div>
  </div>
  <div className="container-fluid ml-1">
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead className="table-light sticky-header">
          <tr>
            <th scope="col" data-field="sec">Section</th>
            <th scope="col" data-field="rst_DisplayName">Name</th>
            <th scope="col" data-field="rst_DetailTypeID">Field ID</th>
            <th scope="col" data-field="dty_HelpText">Help Text</th>
            <th scope="col" data-field="dty_SemanticReferenceURL">Semantic Reference URL</th>
            <th scope="col" data-field="rst_RequirementType">Requirement</th>
            <th scope="col" data-field="dty_Type">Data Type</th>
            <th scope="col" data-field="dty_PtrTargetRectypeIDs">Linked Record Types</th>
            <th scope="col" data-field="dty_TermIDTreeNonSelectableIDs">Vocabulary</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-light">
            <th scope="row" rowspan="2">Label Components</th>
            <td>URI</td>
            <td>1304</td>
            <td>Unique Resource Identifier (aka URL) for the digital document, which must contain a series of digital images.</td>
            <td/>
            <td>
              <span className="badge badge-success">Required</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>digitization_of</td>
            <td>1338</td>
            <td>Document.</td>
            <td/>
            <td>
              <span className="badge badge-success">Required</span>
            </td>
            <td>Foreign key</td>
            <td>
              <HashLink to="#106">document</HashLink>
            </td>
            <td/>
          </tr>
          <tr className="table-light">
            <th scope="row" rowspan="2">Description</th>
            <td>IIIF</td>
            <td>1306</td>
            <td>If encoded according to IIIF standards, a URI linking to the file of a IIIF manifest.</td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>ARK</td>
            <td>1271</td>
            <td>Archival Resource Key for the item or notice in the archival institution's catalogue / system.<br/>
              <a target="_blank" rel="noreferrer noopener" href="https://www.wikidata.org/wiki/Property:P8091">P8091</a>
            </td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
        );
}
