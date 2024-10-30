export default function Repository() {

  return (
    <div className="container-fluid recordTypeProfile" id="108">
      <div className="card bg-light mb-3">
        <div className="card-body">
          <h4 className="card-title">repository</h4>
          <h6 className="card-subtitle mb-2 text-body-secondary">Record ID 108</h6>
          <p className="card-text">Archival institution</p>
        </div>
      </div>
      <div className="container-fluid ml-1">
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Section</th>
                <th scope="col">Name</th>
                <th scope="col">Field ID</th>
                <th scope="col">Help Text</th>
                <th scope="col">Semantic Reference URL</th>
                <th scope="col">Requirement</th>
                <th scope="col">Data Type</th>
                <th scope="col">Linked Record Types</th>
                <th scope="col">Vocabulary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" rowspan="3">Label Components</th>
                <td>preferred_name</td>
                <td>1244</td>
                <td>Received or primary name by which the entity is known.</td>
                <td />
                <td>
                  <span className="badge bg-success">Required</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
              <tr>
                <td>label_name</td>
                <td>1335</td>
                <td>Shortened name of the entity.</td>
                <td />
                <td>
                  <span className="badge bg-success">Required</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
              <tr>
                <td>city</td>
                <td>1233</td>
                <td>City, town, or municipality in which the organization is located.</td>
                <td />
                <td>
                  <span className="badge bg-success">Required</span>
                </td>
                <td>Foreign key</td>
                <td>Place</td>
                <td />
              </tr>
              <tr>
                <th scope="row" rowspan="5">Description</th>
                <td>alternative_names</td>
                <td>132</td>
                <td>Alternative names or titles, use for simple alternatives where additional metadata is not needed.</td>
                <td />
                <td>
                  <span className="badge bg-secondary">Optional</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
              <tr>
                <td>VIAF</td>
                <td>1234</td>
                <td>The record's permanent identifier in the VIAF database.</td>
                <td />
                <td>
                  <span className="badge bg-primary">Recommended</span>
                </td>
                <td>Float</td>
                <td />
                <td />
              </tr>
              <tr>
                <td>ISNI</td>
                <td>1235</td>
                <td>International Standard Name Identifier.</td>
                <td />
                <td>
                  <span className="badge bg-primary">Recommended</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
              <tr>
                <td>biblissima_identifier</td>
                <td>1236</td>
                <td>Permanent identifier for the record in the Biblissima+ database.</td>
                <td />
                <td>
                  <span className="badge bg-primary">Recommended</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
              <tr>
                <td>website</td>
                <td>1185</td>
                <td>Website of the archival institution according to Archives Portal Europe.</td>
                <td>
                  <a className="link" target="_blank" rel="noreferrer noopener" href="https://www.wikidata.org/wiki/Q22137024">https://www.wikidata.org/wiki/Q22137024</a>
                </td>
                <td>
                  <span className="badge bg-secondary">Optional</span>
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
