export default function Repository() {
    return (
<div className="container-lg" id="108">
  <div className="card bg-light mb-3" style={{position: "sticky", top: "0"}}>
    <div className="card-body">
      <h4 className="card-title">repository</h4>
      <h6 className="card-subtitle mb-2 text-body-secondary">Record ID 108</h6>
      <p className="card-text">Archival institution</p>
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
            <th scope="row" rowspan="3">Label Components</th>
            <td>preferred_name</td>
            <td>1244</td>
            <td>Received or primary name by which the entity is known.</td>
            <td/>
            <td>
              <span className="badge badge-success">Required</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>label_name</td>
            <td>1335</td>
            <td>Shortened name of the entity.</td>
            <td/>
            <td>
              <span className="badge badge-success">Required</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>city</td>
            <td>1233</td>
            <td>City, town, or municipality in which the organization is located.</td>
            <td/>
            <td>
              <span className="badge badge-success">Required</span>
            </td>
            <td>Foreign key</td>
            <td>Place</td>
            <td/>
          </tr>
          <tr className="table-light">
            <th scope="row" rowspan="5">Description</th>
            <td>alternative_names</td>
            <td>132</td>
            <td>Alternative names or titles, use for simple alternatives where additional metadata is not needed.</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>VIAF</td>
            <td>1234</td>
            <td>The record's permanent identifier in the VIAF database.</td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Float</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>ISNI</td>
            <td>1235</td>
            <td>International Standard Name Identifier.</td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>biblissima_identifier</td>
            <td>1236</td>
            <td>Permanent identifier for the record in the Biblissima+ database.</td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>website</td>
            <td>1185</td>
            <td>Website of the archival institution according to Archives Portal Europe.</td>
            <td>
              <a className="link" target="_blank" rel="noreferrer noopener" href="https://www.wikidata.org/wiki/Q22137024">https://www.wikidata.org/wiki/Q22137024</a>
            </td>
            <td>
              <span className="badge badge-secondary">Optional</span>
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
