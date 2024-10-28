
import { HashLink } from 'react-router-hash-link';
export default function Part() {

    return (
<div className="container-fluid" id="125">
  <div className="card bg-light mb-3">
    <div className="card-body">
      <h4 className="card-title">part</h4>
      <h6 className="card-subtitle mb-2 text-body-secondary">Record ID 125</h6>
      <p className="card-text">A sequence of leafs or pages in a document, on which is inscribed all or part of the witness of a text.</p>
    </div>
  </div>
  <div className="container-fluid ml-1">
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead className="table-light sticky-header">
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
          <tr className="table-light">
            <th scope="row" rowspan="1">Label Components</th>
            <td>is_inscribed_on</td>
            <td>1315</td>
            <td>The physical document on which the signs (letters) of a witness's parts are inscribed.</td>
            <td/>
            <td>
              <span className="badge badge-success">Required</span>
            </td>
            <td>Foreign key</td>
            <td>
              <HashLink to="#106">document</HashLink>
            </td>
            <td/>
          </tr>
          <tr className="table-light">
            <th scope="row" rowspan="4">Locus</th>
            <td>div_order</td>
            <td>1316</td>
            <td>Order of the text subdivision within the witness. Start counting at 1. If the witness is not subdivided, enter 1. <br/>Property <a target="_blank" rel="noreferrer noopener" href="https://www.wikidata.org/wiki/Property:P1545">P1545</a>
            </td>
            <td>
              <a className="link" target="_blank" rel="noreferrer noopener" href="https://www.wikidata.org/wiki/Property:P1545">https://www.wikidata.org/wiki/Property:P1545</a>
            </td>
            <td>
              <span className="badge badge-success">Required</span>
            </td>
            <td>Float</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>number_of_verses</td>
            <td>1317</td>
            <td>To be compared with the "verse length" of the representative text, the number of verses or lines from the text represented on this part of the witness.</td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Float</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>part_of_text</td>
            <td>1318</td>
            <td>A simple description of the portion of the text, i.e. "first third," represented on this part of the witness.</td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>volume_number</td>
            <td>1319</td>
            <td>If the witness is composed of multiple volumes, the integer, roman numeral, or other indicator used by archival or library catalogues to identify the part as a volume of the witness.</td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <th scope="row" rowspan="5">lines_are_incomplete</th>
            <td>physical_description</td>
            <td>1357</td>
            <td>Description of the support, decorations, layout, and script type.</td>
            <td/>
            <td>
              <span className="badge badge-success">Required</span>
            </td>
            <td>Foreign key</td>
            <td>
              <HashLink to="#129">physDesc</HashLink>
            </td>
            <td/>
          </tr>
          <tr className="table-light">
            <td>number_of_lines</td>
            <td>1320</td>
            <td>The length of the text as calculated by the number of lines.</td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Float</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>verses_per_line</td>
            <td>1358</td>
            <td>If the text is in verse, a categorical description of how many verses the scribe fit into a line of text.</td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td>
              <div id="Vocab1358">
                <p>VersesPerLine vocab</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item list-group-item-light" id="9830">
                    <div className="ms-2 me-auto">
                      <div>continuous</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9831">
                    <div className="ms-2 me-auto">
                      <div>one verse per line</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9832">
                    <div className="ms-2 me-auto">
                      <div>other</div>
                    </div>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr className="table-light">
            <td>lines_are_incomplete</td>
            <td>1321</td>
            <td>Whether the text lines have been interrupted, i.e. cut (Yes, incomplete).</td>
            <td/>
            <td>
              <span className="badge badge-success">Required</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td>
              <div id="Vocab1321">
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
          <tr className="table-light">
            <td>page_ranges</td>
            <td>1322</td>
            <td>A formatted string that represents the numbering on the beginning and end of an uninterrupted series of pages. <br/>When a range of pages, separate the two numbers with two colons, i.e. "1r::4v". <br/>When a single page, do not include separator, i.e. "1r".</td>
            <td/>
            <td>
              <span className="badge badge-success">Required</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
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
