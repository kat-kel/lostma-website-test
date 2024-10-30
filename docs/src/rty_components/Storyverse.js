import { HashLink } from 'react-router-hash-link';

export default function Storyverse() {

  return (
    <div className="container-fluid recordTypeProfile" id="102">
      <div className="card bg-light mb-3">
        <div className="card-body">
          <h4 className="card-title">storyverse</h4>
          <h6 className="card-subtitle mb-2 text-body-secondary">Record ID 102</h6>
          <p className="card-text">A grouping of literary works with a shared cast of characters; e.g. the cycle des Lorrains, represented as texts by the songs of Garin, Hervis,&#8230; Or the Avengers, if you like comic books.</p>
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
                <th scope="row" rowspan="1">Label Components</th>
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
                <th scope="row" rowspan="2">Description</th>
                <td>member_of_cycle</td>
                <td>1246</td>
                <td>The cycle of which this record is a part.</td>
                <td />
                <td>
                  <span className="badge bg-secondary">Optional</span>
                </td>
                <td>Foreign key</td>
                <td>
                  <HashLink to="#102">storyverse</HashLink>
                </td>
                <td />
              </tr>
              <tr>
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
                <th scope="row" rowspan="3">References</th>
                <td>described_by_source</td>
                <td>1255</td>
                <td>Work where the item is described.<br />Property <a target="_blank" rel="noreferrer noopener" href="https://www.wikidata.org/wiki/Property:P1343">P1343</a>
                  <br />
                  Described in source / written about in / described by encyclopedia / described by reference work</td>
                <td>
                  <a className="link" target="_blank" rel="noreferrer noopener" href="https://www.wikidata.org/wiki/Property:P1343">https://www.wikidata.org/wiki/Property:P1343</a>
                </td>
                <td>
                  <span className="badge bg-primary">Recommended</span>
                </td>
                <td>Foreign key</td>
                <td>Book chapter, Book, Journal article, Thesis, <HashLink to="#128">footnote</HashLink>
                </td>
                <td />
              </tr>
              <tr>
                <td>described_at_URL</td>
                <td>1269</td>
                <td>Described at webpage.<br />Property <a target="_blank" rel="noreferrer noopener" href="https://www.wikidata.org/wiki/Property:P973">P973</a>
                </td>
                <td />
                <td>
                  <span className="badge bg-primary">Recommended</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
              <tr>
                <td>reference_notes</td>
                <td>1284</td>
                <td>Brief notes about a reference and/or citation that should eventually be added to the database and linked to this record.</td>
                <td />
                <td>
                  <span className="badge bg-secondary">Optional</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
              <tr>
                <th scope="row" rowspan="2">review_status</th>
                <td>review_status</td>
                <td>1183</td>
                <td>Status of record's preparation for public view.</td>
                <td />
                <td>
                  <span className="badge bg-success">Required</span>
                </td>
                <td>Vocabulary</td>
                <td />
                <td>
                  <div id="Vocab1183">
                    <p>_record review vocab</p>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item list-group-item-light" id="9697">
                        <div className="ms-2 me-auto">
                          <div>Action required</div>
                          <small className="text-body-secondary">The record contains information that requires a review.</small>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-light" id="9698">
                        <div className="ms-2 me-auto">
                          <div>Open</div>
                          <small className="text-body-secondary">The record is newly created and/or in process.</small>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-light" id="9699">
                        <div className="ms-2 me-auto">
                          <div>Publish</div>
                          <small className="text-body-secondary">The record has been approved for publication. It's accuracy has been verified.</small>
                        </div>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>review_note</td>
                <td>1248</td>
                <td>Information to help with review of this entity.</td>
                <td />
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
