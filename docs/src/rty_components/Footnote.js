import { HashLink } from 'react-router-hash-link'

export default function Footnote() {
  return (
    <div className="container-lg" id="128">
      <div className="card bg-light mb-3" style={{ position: "sticky", top: "0" }}>
        <div className="card-body">
          <h4 className="card-title">footnote</h4>
          <h6 className="card-subtitle mb-2 text-body-secondary">Record ID 128</h6>
          <p className="card-text">Annotation connecting an item to an external source of information / reference, including page numbers and/or quoted text.</p>
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
                <th scope="row" rowspan="4">General Info</th>
                <td>stated_in</td>
                <td>1339</td>
                <td>Source in which the information is stated.<br />
                  <a target="_blank" rel="noreferrer noopener" href="https://www.wikidata.org/wiki/Property:P248">P248</a>
                </td>
                <td>
                  <a className="link" target="_blank" rel="noreferrer noopener" href="https://www.wikidata.org/wiki/Property:P248">https://www.wikidata.org/wiki/Property:P248</a>
                </td>
                <td>
                  <span className="badge badge-success">Required</span>
                </td>
                <td>Foreign key</td>
                <td>Book chapter, Book, Conference, Journal article, Thesis</td>
                <td />
              </tr>
              <tr className="table-light">
                <td>pages</td>
                <td>1340</td>
                <td>Page number(s) of the source in which the information is stated.<br />
                  <a target="_blank" rel="noreferrer noopener" href="https://www.wikidata.org/wiki/Property:P304">P304</a>
                </td>
                <td>
                  <a className="link" target="_blank" rel="noreferrer noopener" href="https://www.wikidata.org/wiki/Property:P304">https://www.wikidata.org/wiki/Property:P304</a>
                </td>
                <td>
                  <span className="badge badge-success">Required</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>reference_prefix</td>
                <td>1278</td>
                <td>Prefix or other key used in a dictionary or encyclopedia to refer to an entry, i.e. "AnsMetz."</td>
                <td />
                <td>
                  <span className="badge badge-primary">Recommended</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>quotation</td>
                <td>1277</td>
                <td>Quotation from the source of information.</td>
                <td />
                <td>
                  <span className="badge badge-secondary">Optional</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
