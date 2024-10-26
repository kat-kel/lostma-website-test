export default function TextTable() {
    return (
<div className="container-lg" id="101">
  <div className="card bg-light mb-3" style={{position: "sticky", top: "0"}}>
    <div className="card-body">
      <h4 className="card-title">text</h4>
      <h6 className="card-subtitle mb-2 text-body-secondary">Record ID 101</h6>
      <p className="card-text">Formulation of a work in human language, whose literary form and style can be detected and whose creation can be attributed to one or more individuals.</p>
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
            <td>language</td>
            <td>1090</td>
            <td>Spoken language through which the entity is primarily expressed.</td>
            <td/>
            <td>
              <span className="badge badge-success">Required</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>literary_form</td>
            <td>1265</td>
            <td>Overall form of the literary style (verse, prose, mixed).</td>
            <td/>
            <td>
              <span className="badge badge-success">Required</span>
            </td>
            <td>Vocabulary</td>
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
            <th scope="row" rowspan="8">Description</th>
            <td>alternative_names</td>
            <td>132</td>
            <td>Alternative names or titles, use for simple alternatives where additional metadata is not needed.</td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>is_expression_of</td>
            <td>1097</td>
            <td>Realization of an abstract, creative work through words, sound, image, etc.</td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Foreign key</td>
            <td>
              <a className="link" href="#103">story</a>
            </td>
            <td/>
          </tr>
          <tr className="table-light">
            <td>peripheral</td>
            <td>1331</td>
            <td>Not part of the main corpus's scope.</td>
            <td/>
            <td>
              <span className="badge badge-success">Required</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>specific_genre</td>
            <td>1270</td>
            <td>Specific literary genre or subgenre attributed to the text.</td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Foreign key</td>
            <td>
              <a className="link" href="#117">genre</a>
            </td>
            <td/>
          </tr>
          <tr className="table-light">
            <td>length</td>
            <td>1166</td>
            <td>Length (number of verses, of chapters for prose)</td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Float</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>length_freetext</td>
            <td>1334</td>
            <td>Briefly describe any uncertainties or ambiguities about the length.</td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>verse_type</td>
            <td>1165</td>
            <td>Type of verses</td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>rhyme_type</td>
            <td>1167</td>
            <td>Rhyme or assonance</td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <th scope="row" rowspan="5">Tradition</th>
            <td>is_derived_from</td>
            <td>1267</td>
            <td>Prior text(s) that the entity reworked as an adaptation, translation, versification, etc.</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Foreign key</td>
            <td>
              <a className="link" href="#101">text</a>
            </td>
            <td/>
          </tr>
          <tr className="table-light">
            <td>nature_of_derivations</td>
            <td>1332</td>
            <td>Note about the nature of the text or texts from which this text is derived.</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>tradition_status</td>
            <td>1101</td>
            <td>General evaluation of the overall survival of all the witnesses of a text.</td>
            <td/>
            <td>
              <span className="badge badge-success">Required</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>status_notes</td>
            <td>1102</td>
            <td>Brief note detailing the entity's survival status.</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>in_stemma</td>
            <td>1117</td>
            <td>Reference to the stemma(ta) of the text.</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Foreign key</td>
            <td>
              <a className="link" href="#104">stemma</a>
            </td>
            <td/>
          </tr>
          <tr className="table-light">
            <th scope="row" rowspan="4">Placeholder annotations</th>
            <td>has_lost_older_version</td>
            <td>1103</td>
            <td>Is the text based on a now-lost older version?</td>
            <td/>
            <td>
              <span className="badge badge-success">Required</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>ancient_translations_freetext</td>
            <td>1105</td>
            <td>Free text description of translations and adaptations that were derived from this record.</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>rewritings_freetext</td>
            <td>1107</td>
            <td>Freetext description of rewritings that were derived from this record.</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>note</td>
            <td>1109</td>
            <td>Note(s) concerning the record.</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <th scope="row" rowspan="2">Writing variant</th>
            <td>regional_writing_style</td>
            <td>1330</td>
            <td>A regional writing style (aka scripta), similar to the written version of a spoken dialect.</td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Foreign key</td>
            <td>
              <a className="link" href="#118">scripta</a>
            </td>
            <td/>
          </tr>
          <tr className="table-light">
            <td>scripta_freetext</td>
            <td>1100</td>
            <td>Brief, human-readable description of the writing variant (Scripta) with which this record is associated.</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
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
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>date_of_creation_certainty</td>
            <td>1258</td>
            <td>Degree of certainty applied to the claim.</td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>date_of_creation_source</td>
            <td>1286</td>
            <td>Notes about the source of the creation date information, including a human-readable summary or transcription of the time range. Can include a brief bibliographic citation.</td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>date_freetext</td>
            <td>1094</td>
            <td>Brief, human-readable description of the date given to this record.</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <th scope="row" rowspan="3">People</th>
            <td>is_written_by</td>
            <td>1288</td>
            <td>The individual accredited with formulating an expression of the creative work.</td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Foreign key</td>
            <td>Person</td>
            <td/>
          </tr>
          <tr className="table-light">
            <td>is_adapted_by</td>
            <td>1289</td>
            <td>When the Text is an adaptation or translation of another Text, the individual accredited with creating the adaptation or translation.</td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Foreign key</td>
            <td>Person</td>
            <td/>
          </tr>
          <tr className="table-light">
            <td>author_freetext</td>
            <td>1091</td>
            <td>Human-readable reference to an author, which can include annotations about certainty.</td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
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
            <td/>
          </tr>
          <tr className="table-light">
            <td>place_of_creation_source</td>
            <td>1291</td>
            <td>Notes along with bibliographic citation about the source of the creation place information.</td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <th scope="row" rowspan="3">References</th>
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
