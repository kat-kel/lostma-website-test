import { HashLink } from 'react-router-hash-link';

export default function PhysDesc() {
    
    return (
<div className="container-fluid" id="129">
  <div className="card bg-light mb-3">
    <div className="card-body">
      <h4 className="card-title">physDesc</h4>
      <h6 className="card-subtitle mb-2 text-body-secondary">Record ID 129</h6>
      <p className="card-text">Physical description of a witness's material support.</p>
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
            <th scope="row" rowspan="6">material</th>
            <td>subject_of_description</td>
            <td>1359</td>
            <td>The document that is the subject of the physical description.</td>
            <td/>
            <td>
              <span className="badge bg-success">Required</span>
            </td>
            <td>Foreign key</td>
            <td>
              <HashLink to="#106">document</HashLink>
            </td>
            <td/>
          </tr>
          <tr>
            <td>material</td>
            <td>1341</td>
            <td>Description of the material of which the object is composed.</td>
            <td/>
            <td>
              <span className="badge bg-success">Required</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td>
              <div id="Vocab1341">
                <p>Material vocab</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item list-group-item-light" id="9782">
                    <div className="ms-2 me-auto">
                      <div>perg</div>
                      <small className="text-body-secondary">Parchment and vellum</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9783">
                    <div className="ms-2 me-auto">
                      <div>chart</div>
                      <small className="text-body-secondary">All kinds of paper</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9785">
                    <div className="ms-2 me-auto">
                      <div>mixed</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9786">
                    <div className="ms-2 me-auto">
                      <div>unknown</div>
                    </div>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td>form</td>
            <td>1342</td>
            <td>"[T]he form of the object in its original state, before any mutilation, rebinding, etc."<br/>
              <a target="_blank" rel="noreferrer noopener" href="https://github.com/msDesc/consolidated-tei-schema">Consolidated TEI Schema</a> objectDesc[@form])</td>
            <td/>
            <td>
              <span className="badge bg-success">Required</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td>
              <div id="Vocab1342">
                <p>PhysicalForm vocab</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item list-group-item-light" id="9788">
                    <div className="ms-2 me-auto">
                      <div>codex</div>
                      <small className="text-body-secondary">"multiple gatherings of leaves, held within a binding of some kind, and used by turning the leaves." <br/>
                        <a target="_blank" rel="noreferrer noopener" href="https://github.com/msDesc/consolidated-tei-schema">Consolidated TEI Schema</a>
                      </small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9789">
                    <div className="ms-2 me-auto">
                      <div>roll</div>
                      <small className="text-body-secondary">"a parchment membrane, or two or more such membranes, either sewn together edge-to-edge to form a continuous surface for writing, or laid together in a pile and sewn together at the head, and used by unrolling the membranes." <br/>
                        <a target="_blank" rel="noreferrer noopener" href="https://github.com/msDesc/consolidated-tei-schema">Consolidated TEI Schema</a>
                      </small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9790">
                    <div className="ms-2 me-auto">
                      <div>sheet</div>
                      <small className="text-body-secondary">"a single sheet of parchment paper, not intended to form part of a codex, either kept flat or folded (rather than rolled) for storage." <br/>
                        <a target="_blank" rel="noreferrer noopener" href="https://github.com/msDesc/consolidated-tei-schema">Consolidated TEI Schema</a>
                      </small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9791">
                    <div className="ms-2 me-auto">
                      <div>unknown</div>
                    </div>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td>estimated_folio_size_height</td>
            <td>1343</td>
            <td>The height in millimeters (a range is permitted) of the folio size in the witness as it would have been before any mutilation, rebinding, etc.</td>
            <td/>
            <td>
              <span className="badge bg-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>estimated_folio_size_width</td>
            <td>1344</td>
            <td>The width in millimeters (a range is permitted) of the folio size in the witness as it would have been before any mutilation, rebinding, etc.</td>
            <td/>
            <td>
              <span className="badge bg-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>estimated_folio_size_reference</td>
            <td>1345</td>
            <td>In-line citation to remind contributors from where the reference for the estimated folio size came.</td>
            <td/>
            <td>
              <span className="badge bg-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <th scope="row" rowspan="2">has_decorations</th>
            <td>has_decorations</td>
            <td>1346</td>
            <td>Decorations present in the witness. Select all that apply.</td>
            <td/>
            <td>
              <span className="badge bg-success">Required</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td>
              <div id="Vocab1346">
                <p>Decorations vocab</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item list-group-item-light" id="9793">
                    <div className="ms-2 me-auto">
                      <div>unknown</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9794">
                    <div className="ms-2 me-auto">
                      <div>
                        <a className="link" target="_blank" rel="noreferrer noopener" href="https://www.wikidata.org/wiki/Q378408">initial</a>
                      </div>
                      <small className="text-body-secondary">"Letter at the beginning of a chapter or paragraph that is larger than the rest of the text."<br/>Property <a target="_blank" rel="noreferrer noopener" href="https://www.wikidata.org/wiki/Q378408">Q378408</a>
                      </small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9795">
                    <div className="ms-2 me-auto">
                      <div>
                        <a className="link" target="_blank" rel="noreferrer noopener" href="https://www.wikidata.org/wiki/Q1365156">rubrication</a>
                      </div>
                      <small className="text-body-secondary">"Red letters added for emphasis in a manuscript."<br/>Property <a target="_blank" rel="noreferrer noopener" href="https://www.wikidata.org/wiki/Q1365156">Q1365156</a>
                      </small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9796">
                    <div className="ms-2 me-auto">
                      <div>incomplete dec.</div>
                      <small className="text-body-secondary">There is evidence that rubrication or one or more illustrations or initials were planned to be included on pages but were not realized.</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9797">
                    <div className="ms-2 me-auto">
                      <div>none of the above</div>
                    </div>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td>amount_of_illustrations</td>
            <td>1347</td>
            <td>A rough representation of how many illustrations are realized in the witness. Select the category that matches the number most specialists agree are in the witness.</td>
            <td/>
            <td>
              <span className="badge bg-success">Required</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td>
              <div id="Vocab1347">
                <p>CountCategories vocab</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item list-group-item-light" id="9799">
                    <div className="ms-2 me-auto">
                      <div>unknown</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9800">
                    <div className="ms-2 me-auto">
                      <div>none</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9801">
                    <div className="ms-2 me-auto">
                      <div>one</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9802">
                    <div className="ms-2 me-auto">
                      <div>more than one</div>
                    </div>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row" rowspan="6">above_top_line</th>
            <td>writing_surface_area_height</td>
            <td>1348</td>
            <td>Height in millimeters (a range is permitted) of the writing area. <br/>Equivalent to dimensions[@type="written"]/height</td>
            <td/>
            <td>
              <span className="badge bg-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>writing_surface_area_width</td>
            <td>1349</td>
            <td>Width in millimeters (a range is permitted) of the writing area. <br/>Equivalent to dimensions[@type="written"]/width</td>
            <td/>
            <td>
              <span className="badge bg-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>writing_surface_area_reference</td>
            <td>1350</td>
            <td>An in-line citation for the source of the information about the dimensions of the witness's writing area.</td>
            <td/>
            <td>
              <span className="badge bg-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>number_of_columns</td>
            <td>1351</td>
            <td>An estimation of the number of columns per page through which the text is presented.</td>
            <td/>
            <td>
              <span className="badge bg-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>written_lines</td>
            <td>1352</td>
            <td>An estimation of the number of lines of text per page or per column.</td>
            <td/>
            <td>
              <span className="badge bg-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>above_top_line</td>
            <td>1353</td>
            <td>The text starts above the top ruled line on the page. If no, then the text starts at the line below the top line.</td>
            <td/>
            <td>
              <span className="badge bg-secondary">Optional</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td>
              <div id="Vocab1353">
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
            <th scope="row" rowspan="2">subscript_type</th>
            <td>script_type</td>
            <td>1354</td>
            <td>Principal script type of the witness.</td>
            <td/>
            <td>
              <span className="badge bg-primary">Recommended</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td>
              <div id="Vocab1354">
                <p>MainScriptType vocab</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item list-group-item-light" id="9804">
                    <div className="ms-2 me-auto">
                      <div>unknown</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9805">
                    <div className="ms-2 me-auto">
                      <div>praegothica</div>
                      <small className="text-body-secondary">protogothic</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9806">
                    <div className="ms-2 me-auto">
                      <div>textualis</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9807">
                    <div className="ms-2 me-auto">
                      <div>cursiva</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9808">
                    <div className="ms-2 me-auto">
                      <div>hybrida</div>
                    </div>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td>subscript_type</td>
            <td>1355</td>
            <td>More refined definition of the main script type.</td>
            <td/>
            <td>
              <span className="badge bg-secondary">Optional</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td>
              <div id="Vocab1355">
                <p>SubScriptType vocab</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item list-group-item-light" id="9810">
                    <div className="ms-2 me-auto">
                      <div>textualisNorthern</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9811">
                    <div className="ms-2 me-auto">
                      <div>textualisSouthern</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9812">
                    <div className="ms-2 me-auto">
                      <div>semitextualis</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9819">
                    <div className="ms-2 me-auto">
                      <div>humanisticaTextualis</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9820">
                    <div className="ms-2 me-auto">
                      <div>humanisticaSemitextualis</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9821">
                    <div className="ms-2 me-auto">
                      <div>humanisticaCursiva</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9823">
                    <div className="ms-2 me-auto">
                      <div>cancelleresca</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9824">
                    <div className="ms-2 me-auto">
                      <div>bastarda</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9825">
                    <div className="ms-2 me-auto">
                      <div>lettre batarde</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9826">
                    <div className="ms-2 me-auto">
                      <div>secretary</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9827">
                    <div className="ms-2 me-auto">
                      <div>anglicana</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9828">
                    <div className="ms-2 me-auto">
                      <div>anglicana formata</div>
                    </div>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
        );
}
