export default function DocumentTable() {
    return (
<div className="container-lg" id="106">
  <div className="card bg-light mb-3" style={{position: "sticky", top: "0"}}>
    <div className="card-body">
      <h4 className="card-title">document</h4>
      <h6 className="card-subtitle mb-2 text-body-secondary">Record ID 106</h6>
      <p className="card-text">A physical entity: a book (manuscript, incunabula, fragment, printed copy&#8230;)</p>
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
          <tr className="table-light">
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
              <a className="link" href="#108">repository</a>
            </td>
            <td/>
          </tr>
          <tr className="table-light">
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
          <tr className="table-light">
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
          <tr className="table-light">
            <th scope="row" rowspan="2">Hypothesis</th>
            <td>is_hypothetical</td>
            <td>1266</td>
            <td>Whether the entity is attested (True) in a hypothesis or whether it is received as fact that it exists or existed (False).</td>
            <td/>
            <td>
              <span className="badge badge-success">Required</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
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
          <tr className="table-light">
            <th scope="row" rowspan="4">Description</th>
            <td>collection_of_fragments</td>
            <td>1312</td>
            <td>Whether or not the document is a collection of fragments, compiled at a date significantly later than when the manuscript components were themselves created, i.e. a 19th-century collection of 12th- and 13th-century fragments.</td>
            <td/>
            <td>
              <span className="badge badge-success">Required</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
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
          <tr className="table-light">
            <td>digitization</td>
            <td>1313</td>
            <td>A digitization of the archival object, preferably in its entirety.</td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Foreign key</td>
            <td>
              <a className="link" href="#126">digitization</a>
            </td>
            <td/>
          </tr>
          <tr className="table-light">
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
          <tr className="table-light">
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
          <tr className="table-light">
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
          <tr className="table-light">
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
          <tr className="table-light">
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
          <tr className="table-light">
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
          <tr className="table-light">
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
          <tr className="table-light">
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
            <td>Book chapter, Book, Journal article, Thesis, <a className="link" href="#128">footnote</a>
            </td>
            <td/>
          </tr>
          <tr className="table-light">
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
          <tr className="table-light">
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
          <tr className="table-light">
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
          <tr className="table-light">
            <th scope="row" rowspan="2">Review</th>
            <td>review_status</td>
            <td>1183</td>
            <td>Status of record's preparation for public view.</td>
            <td/>
            <td>
              <span className="badge badge-success">Required</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
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
