export default function Hypothesis() {
    return (
<div className="container-lg" id="116">
  <div className="card bg-light mb-3" style={{position: "sticky", top: "0"}}>
    <div className="card-body">
      <h4 className="card-title">hypothesis</h4>
      <h6 className="card-subtitle mb-2 text-body-secondary">Record ID 116</h6>
      <p className="card-text">A claim that attests to the existence of an entity, which is lost or suffers from a dearth of archival evidence.</p>
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
            <th scope="row" rowspan="1">Label Components</th>
            <td>attested_object</td>
            <td>1256</td>
            <td>The entity whose existence is attested in the hypothesis.</td>
            <td/>
            <td>
              <span className="badge badge-success">Required</span>
            </td>
            <td>Foreign key</td>
            <td>
              <a className="link" href="#101">text</a>, <a className="link" href="#105">witness</a>, <a className="link" href="#106">document</a>
            </td>
            <td/>
          </tr>
          <tr className="table-light">
            <th scope="row" rowspan="2">Description</th>
            <td>claim</td>
            <td>1257</td>
            <td>Brief summary of the hypothesis.</td>
            <td/>
            <td>
              <span className="badge badge-success">Required</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>certainty</td>
            <td>1258</td>
            <td>Degree of certainty applied to the claim.</td>
            <td/>
            <td>
              <span className="badge badge-success">Required</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <th scope="row" rowspan="1">References</th>
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
