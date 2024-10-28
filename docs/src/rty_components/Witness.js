import { HashLink } from 'react-router-hash-link'

export default function Witness() {
  return (
    <div className="container-lg" id="105">
      <div className="card bg-light mb-3" style={{ position: "sticky", top: "0" }}>
        <div className="card-body">
          <h4 className="card-title">witness</h4>
          <h6 className="card-subtitle mb-2 text-body-secondary">Record ID 105</h6>
          <p className="card-text">a witness of a text, placed in a stemma or otherwise</p>
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
                <td>is_manifestation_of</td>
                <td>1295</td>
                <td>The text of which this item is a physical embodiment and inscription.</td>
                <td>
                  <a className="link" target="_blank" rel="noreferrer noopener" href="https://www.wikidata.org/wiki/Property:P1557">https://www.wikidata.org/wiki/Property:P1557</a>
                </td>
                <td>
                  <span className="badge badge-success">Required</span>
                </td>
                <td>Foreign key</td>
                <td>
                  <HashLink to="#101">text</HashLink>
                </td>
                <td />
              </tr>
              <tr className="table-light">
                <td>observed_on_pages</td>
                <td>1356</td>
                <td>A subdivision of the witness's text in an extant document.<br />
                  <a target="_blank" rel="noreferrer noopener" href="https://tei-c.org/release/doc/tei-p5-doc/en/html/ref-div.html">div</a>
                </td>
                <td />
                <td>
                  <span className="badge badge-primary">Recommended</span>
                </td>
                <td>Foreign key</td>
                <td>
                  <HashLink to="#125">part</HashLink>
                </td>
                <td />
              </tr>
              <tr className="table-light">
                <td>last_observed_in_doc</td>
                <td>1190</td>
                <td>The document in which the witness was last observed.</td>
                <td />
                <td>
                  <span className="badge badge-secondary">Optional</span>
                </td>
                <td>Foreign key</td>
                <td>
                  <HashLink to="#106">document</HashLink>
                </td>
                <td />
              </tr>
              <tr className="table-light">
                <th scope="row" rowspan="4">Hypothesis</th>
                <td>is_unobserved</td>
                <td>1266</td>
                <td>Whether the entity is attested (True) in a hypothesis or whether it is received as fact that it exists or existed (False).</td>
                <td />
                <td>
                  <span className="badge badge-success">Required</span>
                </td>
                <td>Vocabulary</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>claim_freetext</td>
                <td>1294</td>
                <td>
                  <b>[Temporary]</b>
                  <br />Brief note about the hypothesis that attests to this record's existence. This information is meant to be a temporary note that will eventually be entered into a Hypothesis entity, which should be linked back to this record.</td>
                <td />
                <td>
                  <span className="badge badge-primary">Recommended</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>used_to_follow_fragment</td>
                <td>1298</td>
                <td>If the witness is a fragment, another fragment of the same text and from the same codicological unit that represents an earlier part of the text, so that this witness and the linked witness would constitute two sequential parts of a lost witness.</td>
                <td />
                <td>
                  <span className="badge badge-secondary">Optional</span>
                </td>
                <td>Foreign key</td>
                <td>
                  <HashLink to="#105">witness</HashLink>
                </td>
                <td />
              </tr>
              <tr className="table-light">
                <td>used_to_follow_witness</td>
                <td>1300</td>
                <td>If the witness was originally with another witness, especially the witness of a different text, in a now lost or disassembled document, the witness that immediately preceded it in the hypothetical document.</td>
                <td />
                <td>
                  <span className="badge badge-secondary">Optional</span>
                </td>
                <td>Foreign key</td>
                <td>
                  <HashLink to="#105">witness</HashLink>
                </td>
                <td />
              </tr>
              <tr className="table-light">
                <th scope="row" rowspan="4">Tradition</th>
                <td>preferred_siglum</td>
                <td>1296</td>
                <td>An abbreviation, usually a letter or a letter with a numeral, assigned to a source.</td>
                <td />
                <td>
                  <span className="badge badge-success">Required</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>alternative_sigla</td>
                <td>1333</td>
                <td>Other sigla by which the witness is known and which is different than the siglum preferred for making new stemma.</td>
                <td />
                <td>
                  <span className="badge badge-secondary">Optional</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>status_witness</td>
                <td>1301</td>
                <td>Survival status of the witness.</td>
                <td />
                <td>
                  <span className="badge badge-success">Required</span>
                </td>
                <td>Vocabulary</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>status_notes</td>
                <td>1102</td>
                <td>Brief note detailing the entity's survival status.</td>
                <td />
                <td>
                  <span className="badge badge-primary">Recommended</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <th scope="row" rowspan="3">Description</th>
                <td>is_excerpt</td>
                <td>1302</td>
                <td>The witness was never a full manifestation of the text, but offers an excerpt or a citation of the text.</td>
                <td />
                <td>
                  <span className="badge badge-success">Required</span>
                </td>
                <td>Vocabulary</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>regional_writing_style</td>
                <td>1330</td>
                <td>A regional writing style (aka scripta), similar to the written version of a spoken dialect.</td>
                <td />
                <td>
                  <span className="badge badge-primary">Recommended</span>
                </td>
                <td>Foreign key</td>
                <td>
                  <HashLink to="#118">scripta</HashLink>
                </td>
                <td />
              </tr>
              <tr className="table-light">
                <td>scripta_freetext</td>
                <td>1100</td>
                <td>Brief, human-readable description of the writing variant (Scripta) with which this record is associated.</td>
                <td />
                <td>
                  <span className="badge badge-secondary">Optional</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <th scope="row" rowspan="4">Date</th>
                <td>date_of_creation</td>
                <td>1285</td>
                <td>Time when the entity begins to exist.</td>
                <td>
                  <a className="link" target="_blank" rel="noreferrer noopener" href="https://www.wikidata.org/wiki/Property:P571">https://www.wikidata.org/wiki/Property:P571</a>
                </td>
                <td>
                  <span className="badge badge-success">Required</span>
                </td>
                <td>Date</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>date_of_creation_certainty</td>
                <td>1258</td>
                <td>Degree of certainty applied to the claim.</td>
                <td />
                <td>
                  <span className="badge badge-primary">Recommended</span>
                </td>
                <td>Vocabulary</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>date_of_creation_source</td>
                <td>1286</td>
                <td>Notes about the source of the creation date information, including a human-readable summary or transcription of the time range. Can include a brief bibliographic citation.</td>
                <td />
                <td>
                  <span className="badge badge-primary">Recommended</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>date_freetext</td>
                <td>1094</td>
                <td>Brief, human-readable description of the date given to this record.</td>
                <td />
                <td>
                  <span className="badge badge-primary">Recommended</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <th scope="row" rowspan="3">People</th>
                <td>scribe</td>
                <td>1303</td>
                <td>The scribe accredited with composing the witness.</td>
                <td />
                <td>
                  <span className="badge badge-secondary">Optional</span>
                </td>
                <td>Foreign key</td>
                <td>Person</td>
                <td />
              </tr>
              <tr className="table-light">
                <td>number_of_hands</td>
                <td>1336</td>
                <td>Number of hands identified in the witness.</td>
                <td />
                <td>
                  <span className="badge badge-secondary">Optional</span>
                </td>
                <td>Float</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>scribe_note</td>
                <td>1337</td>
                <td>Notes about the source of information for the number of hands or number of scribes.</td>
                <td />
                <td>
                  <span className="badge badge-secondary">Optional</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <th scope="row" rowspan="2">Place</th>
                <td>place_of_creation</td>
                <td>1290</td>
                <td>Place where the entity was conceived or made.</td>
                <td>
                  <a className="link" target="_blank" rel="noreferrer noopener" href="https://www.wikidata.org/wiki/Property:P1071">https://www.wikidata.org/wiki/Property:P1071</a>
                </td>
                <td>
                  <span className="badge badge-primary">Recommended</span>
                </td>
                <td>Foreign key</td>
                <td>Place</td>
                <td />
              </tr>
              <tr className="table-light">
                <td>place_of_creation_source</td>
                <td>1291</td>
                <td>Notes along with bibliographic citation about the source of the creation place information.</td>
                <td />
                <td>
                  <span className="badge badge-primary">Recommended</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
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
                  <span className="badge badge-primary">Recommended</span>
                </td>
                <td>Foreign key</td>
                <td>Book chapter, Book, Journal article, Thesis, <HashLink to="#128">footnote</HashLink>
                </td>
                <td />
              </tr>
              <tr className="table-light">
                <td>described_at_URL</td>
                <td>1269</td>
                <td>Described at webpage.<br />Property <a target="_blank" rel="noreferrer noopener" href="https://www.wikidata.org/wiki/Property:P973">P973</a>
                </td>
                <td />
                <td>
                  <span className="badge badge-primary">Recommended</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>reference_notes</td>
                <td>1284</td>
                <td>Brief notes about a reference and/or citation that should eventually be added to the database and linked to this record.</td>
                <td />
                <td>
                  <span className="badge badge-secondary">Optional</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <th scope="row" rowspan="2">Review</th>
                <td>review_status</td>
                <td>1183</td>
                <td>Status of record's preparation for public view.</td>
                <td />
                <td>
                  <span className="badge badge-success">Required</span>
                </td>
                <td>Vocabulary</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>review_note</td>
                <td>1248</td>
                <td>Information to help with review of this entity.</td>
                <td />
                <td>
                  <span className="badge badge-primary">Recommended</span>
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
