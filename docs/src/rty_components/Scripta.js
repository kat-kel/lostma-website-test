import { HashLink } from 'react-router-hash-link'

export default function Scripta() {
  return (
    <div className="container-lg" id="118">
      <div className="card bg-light mb-3" style={{ position: "sticky", top: "0" }}>
        <div className="card-body">
          <h4 className="card-title">scripta</h4>
          <h6 className="card-subtitle mb-2 text-body-secondary">Record ID 118</h6>
          <p className="card-text">he regional writing style, similar to the written version of a spoken dialect, as defined by <a className="link" target="_blank" rel="noreferrer noopener" href="https://doi.org/10.4000/books.pulg.347">Louis Remacle</a>.</p>
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
                <td>preferred_name</td>
                <td>1244</td>
                <td>Received or primary name by which the entity is known.</td>
                <td />
                <td>
                  <span className="badge badge-success">Required</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <th scope="row" rowspan="4">Description</th>
                <td>description</td>
                <td>4</td>
                <td>An extended description, use this for free-format description up to 64K latin or 32K UTF characters</td>
                <td />
                <td>
                  <span className="badge badge-success">Required</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>language</td>
                <td>1090</td>
                <td>Spoken language through which the entity is primarily expressed.</td>
                <td />
                <td>
                  <span className="badge badge-success">Required</span>
                </td>
                <td>Vocabulary</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>region</td>
                <td>1261</td>
                <td>Region in which the entity is primarily located.</td>
                <td />
                <td>
                  <span className="badge badge-primary">Recommended</span>
                </td>
                <td>Foreign key</td>
                <td>Place</td>
                <td />
              </tr>
              <tr className="table-light">
                <td>region_note</td>
                <td>1262</td>
                <td>Brief note about the region in which the entity is primarily located.</td>
                <td />
                <td>
                  <span className="badge badge-secondary">Optional</span>
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