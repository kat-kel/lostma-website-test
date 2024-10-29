import { HashLink } from 'react-router-hash-link';

export default function DocumentTable() {
    
    return (
<div className="container-fluid" id="106">
  <div className="card bg-light mb-3">
    <div className="card-body">
      <h4 className="card-title">document</h4>
      <h6 className="card-subtitle mb-2 text-body-secondary">Record ID 106</h6>
      <p className="card-text">A physical entity: a book (manuscript, incunabula, fragment, printed copy&#8230;)</p>
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
            <th scope="row" rowspan="4">Label Components</th>
            <td>current_shelfmark</td>
            <td>1307</td>
            <td>If this record is an extant (not hypothetical) document, the shelf mark by which it can be requested or, in the case of unavailable archives, by which it is known.<br/>Query <a target="_blank" rel="noreferrer noopener" href="https://www.wikidata.org/wiki/Q104842294">Q104842294</a>
            </td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>location</td>
            <td>1308</td>
            <td>Location of the object, structure or event, i.e. the Mona Lisa's location is the Louvre Museum.<br/>Property <a target="_blank" rel="noreferrer noopener" href="https://www.wikidata.org/wiki/Property:P276">P276</a>
            </td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Foreign key</td>
            <td>
              <HashLink to="#108">repository</HashLink>
            </td>
            <td/>
          </tr>
          <tr>
            <td>collection</td>
            <td>1309</td>
            <td>A single collection of materials with some unifying characteristic, housed in an archive.<br/>Query <a target="_blank" rel="noreferrer noopener" href="https://www.wikidata.org/wiki/Q9388534">Q9388534</a>
            </td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>invented_label</td>
            <td>1310</td>
            <td>If this record is a hypothetical document, a useful label by which to recognize and refer to the document.</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <th scope="row" rowspan="2">is_hypothetical</th>
            <td>is_hypothetical</td>
            <td>1266</td>
            <td>Whether the entity is attested (True) in a hypothesis or whether it is received as fact that it exists or existed (False).</td>
            <td/>
            <td>
              <span className="badge badge-success">Required</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td>
              <div id="Vocab1266">
                <p>yes/no/maybe vocab</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item list-group-item-light" id="9482">
                    <div className="ms-2 me-auto">
                      <div>Yes</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9483">
                    <div className="ms-2 me-auto">
                      <div>No</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9484">
                    <div className="ms-2 me-auto">
                      <div>Maybe</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9770">
                    <div className="ms-2 me-auto">
                      <div>unknown</div>
                      <small className="text-body-secondary">The information is not ready to be input.</small>
                    </div>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td>claim_freetext</td>
            <td>1294</td>
            <td>
              <b>[Temporary]</b>
              <br/>Brief note about the hypothesis that attests to this record's existence. This information is meant to be a temporary note that will eventually be entered into a Hypothesis entity, which should be linked back to this record.</td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <th scope="row" rowspan="4">collection_of_fragments</th>
            <td>collection_of_fragments</td>
            <td>1312</td>
            <td>Whether or not the document is a collection of fragments, compiled at a date significantly later than when the manuscript components were themselves created, i.e. a 19th-century collection of 12th- and 13th-century fragments.</td>
            <td/>
            <td>
              <span className="badge badge-success">Required</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td>
              <div id="Vocab1312">
                <p>yes/no vocab</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item list-group-item-light" id="9497">
                    <div className="ms-2 me-auto">
                      <div>Yes</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9498">
                    <div className="ms-2 me-auto">
                      <div>No</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9535">
                    <div className="ms-2 me-auto">
                      <div>unknown</div>
                      <small className="text-body-secondary">The information is not ready for input.</small>
                    </div>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td>old_shelfmark</td>
            <td>1311</td>
            <td>Outmoded shelf marks by which the archival object used to be known and referenced.</td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>digitization</td>
            <td>1313</td>
            <td>A digitization of the archival object, preferably in its entirety.</td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Foreign key</td>
            <td>
              <HashLink to="#126">digitization</HashLink>
            </td>
            <td/>
          </tr>
          <tr>
            <td>digitization_freetext</td>
            <td>1326</td>
            <td>
              <b>Placeholder</b>
              <br/>Reference to a digitization that hasn't yet been added to the database, as a means of temporarily storing information that will eventually be linked via an entity to this record.</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <th scope="row" rowspan="6">Production</th>
            <td>date_of_creation</td>
            <td>1285</td>
            <td>Time when the entity begins to exist.</td>
            <td>
              <a className="link" target="_blank" rel="noreferrer noopener" href="https://www.wikidata.org/wiki/Property:P571">https://www.wikidata.org/wiki/Property:P571</a>
            </td>
            <td>
              <span className="badge badge-dark">Outmoded</span>
            </td>
            <td>Date</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>date_freetext</td>
            <td>1094</td>
            <td>Brief, human-readable description of the date given to this record.</td>
            <td/>
            <td>
              <span className="badge badge-dark">Outmoded</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>date_of_creation_source</td>
            <td>1286</td>
            <td>Notes about the source of the creation date information, including a human-readable summary or transcription of the time range. Can include a brief bibliographic citation.</td>
            <td/>
            <td>
              <span className="badge badge-dark">Outmoded</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>place_of_creation</td>
            <td>1290</td>
            <td>Place where the entity was conceived or made.</td>
            <td>
              <a className="link" target="_blank" rel="noreferrer noopener" href="https://www.wikidata.org/wiki/Property:P1071">https://www.wikidata.org/wiki/Property:P1071</a>
            </td>
            <td>
              <span className="badge badge-dark">Outmoded</span>
            </td>
            <td>Foreign key</td>
            <td>Place</td>
            <td/>
          </tr>
          <tr>
            <td>place_of_creation_freetext</td>
            <td>1328</td>
            <td>Placeholder notes about the entity's place of creation, to eventually be converted into a relation to a Place entity.</td>
            <td/>
            <td>
              <span className="badge badge-dark">Outmoded</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>place_of_creation_source</td>
            <td>1291</td>
            <td>Notes along with bibliographic citation about the source of the creation place information.</td>
            <td/>
            <td>
              <span className="badge badge-dark">Outmoded</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <th scope="row" rowspan="5">References</th>
            <td>described_by_source</td>
            <td>1255</td>
            <td>Work where the item is described.<br/>Property <a target="_blank" rel="noreferrer noopener" href="https://www.wikidata.org/wiki/Property:P1343">P1343</a>
              <br/>
Described in source / written about in / described by encyclopedia / described by reference work</td>
            <td>
              <a className="link" target="_blank" rel="noreferrer noopener" href="https://www.wikidata.org/wiki/Property:P1343">https://www.wikidata.org/wiki/Property:P1343</a>
            </td>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Foreign key</td>
            <td>Book chapter, Book, Journal article, Thesis, <HashLink to="#128">footnote</HashLink>
            </td>
            <td/>
          </tr>
          <tr>
            <td>described_at_URL</td>
            <td>1269</td>
            <td>Described at webpage.<br/>Property <a target="_blank" rel="noreferrer noopener" href="https://www.wikidata.org/wiki/Property:P973">P973</a>
            </td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>online_catalogue_URL</td>
            <td>1329</td>
            <td>URL of the page in a library or archive's digital catalogue that serves as the reference for the document.<br/>Property <a target="_blank" rel="noreferrer noopener" href="https://www.wikidata.org/wiki/Property:P8768">P8768</a>
            </td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
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
          <tr>
            <td>reference_notes</td>
            <td>1284</td>
            <td>Brief notes about a reference and/or citation that should eventually be added to the database and linked to this record.</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <th scope="row" rowspan="2">review_status</th>
            <td>review_status</td>
            <td>1183</td>
            <td>Status of record's preparation for public view.</td>
            <td/>
            <td>
              <span className="badge badge-success">Required</span>
            </td>
            <td>Vocabulary</td>
            <td/>
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
