import { HashLink } from 'react-router-hash-link'

export default function Images() {
  return (
    <div className="container-lg" id="127">
      <div className="card bg-light mb-3" style={{ position: "sticky", top: "0" }}>
        <div className="card-body">
          <h4 className="card-title">images</h4>
          <h6 className="card-subtitle mb-2 text-body-secondary">Record ID 127</h6>
          <p className="card-text">A range of images from a digitization, which correspond to a discrete, uninterrupted series of pages or leafs of a part of a document.</p>
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
                <th scope="row" rowspan="2">Label Components</th>
                <td>represents_pages</td>
                <td>1314</td>
                <td>The portion (pages) of the document represented in the digitized images.</td>
                <td />
                <td>
                  <span className="badge badge-success">Required</span>
                </td>
                <td>Foreign key</td>
                <td>
                  <HashLink to="#125">part</HashLink>
                </td>
                <td />
              </tr>
              <tr className="table-light">
                <td>contained_in</td>
                <td>1323</td>
                <td>The digital object, which has a URL, from which this discrete range of images comes.</td>
                <td />
                <td>
                  <span className="badge badge-success">Required</span>
                </td>
                <td>Foreign key</td>
                <td>
                  <HashLink to="#126">digitization</HashLink>
                </td>
                <td />
              </tr>
              <tr className="table-light">
                <th scope="row" rowspan="2">Description</th>
                <td>file_range</td>
                <td>1324</td>
                <td>A formatted string that represents the index of the first and last image file in the series of images. <br />When multiple files, separate the first and last with two colons, i.e. "4::725". <br />When a single file, do not include the separator, i.e. "725".</td>
                <td />
                <td>
                  <span className="badge badge-success">Required</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>corresponding_page_range</td>
                <td>1322</td>
                <td>A formatted string that represents the numbering on the beginning and end of an uninterrupted series of pages. <br />When a range of pages, separate the two numbers with two colons, i.e. "1r::4v". <br />When a single page, do not include separator, i.e. "1r".</td>
                <td />
                <td>
                  <span className="badge badge-success">Required</span>
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
