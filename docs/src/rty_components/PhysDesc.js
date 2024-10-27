export default function PhysDesc() {
    return (
<div className="container-lg" id="129">
  <div className="card bg-light mb-3" style={{position: "sticky", top: "0"}}>
    <div className="card-body">
      <h4 className="card-title">physDesc</h4>
      <h6 className="card-subtitle mb-2 text-body-secondary">Record ID 129</h6>
      <p className="card-text">Physical description of a witness's material support.</p>
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
            <th scope="row" rowspan="6">Support</th>
            <td>subject_of_description</td>
            <td>1359</td>
            <td>The document that is the subject of the physical description.</td>
            <td/>
            <td>
              <span className="badge badge-success">Required</span>
            </td>
            <td>Foreign key</td>
            <td>
              <a className="link" href="#106">document</a>
            </td>
            <td/>
          </tr>
          <tr className="table-light">
            <td>material</td>
            <td>1341</td>
            <td>Description of the material of which the object is composed.</td>
            <td/>
            <td>
              <span className="badge badge-success">Required</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>form</td>
            <td>1342</td>
            <td>"[T]he form of the object in its original state, before any mutilation, rebinding, etc."<br/>
              <a target="_blank" rel="noreferrer noopener" href="https://github.com/msDesc/consolidated-tei-schema">Consolidated TEI Schema</a> objectDesc[@form])</td>
            <td/>
            <td>
              <span className="badge badge-success">Required</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>estimated_folio_size_height</td>
            <td>1343</td>
            <td>The height in millimeters (a range is permitted) of the folio size in the witness as it would have been before any mutilation, rebinding, etc.</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>estimated_folio_size_width</td>
            <td>1344</td>
            <td>The width in millimeters (a range is permitted) of the folio size in the witness as it would have been before any mutilation, rebinding, etc.</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>estimated_folio_size_reference</td>
            <td>1345</td>
            <td>In-line citation to remind contributors from where the reference for the estimated folio size came.</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <th scope="row" rowspan="2">Decorations</th>
            <td>has_decorations</td>
            <td>1346</td>
            <td>Decorations present in the witness. Select all that apply.</td>
            <td/>
            <td>
              <span className="badge badge-success">Required</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>amount_of_illustrations</td>
            <td>1347</td>
            <td>A rough representation of how many illustrations are realized in the witness. Select the category that matches the number most specialists agree are in the witness.</td>
            <td/>
            <td>
              <span className="badge badge-success">Required</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <th scope="row" rowspan="6">Layout</th>
            <td>writing_surface_area_height</td>
            <td>1348</td>
            <td>Height in millimeters (a range is permitted) of the writing area. <br/>Equivalent to dimensions[@type="written"]/height</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>writing_surface_area_width</td>
            <td>1349</td>
            <td>Width in millimeters (a range is permitted) of the writing area. <br/>Equivalent to dimensions[@type="written"]/width</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>writing_surface_area_reference</td>
            <td>1350</td>
            <td>An in-line citation for the source of the information about the dimensions of the witness's writing area.</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>number_of_columns</td>
            <td>1351</td>
            <td>An estimation of the number of columns per page through which the text is presented.</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>written_lines</td>
            <td>1352</td>
            <td>An estimation of the number of lines of text per page or per column.</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>above_top_line</td>
            <td>1353</td>
            <td>The text starts above the top ruled line on the page. If no, then the text starts at the line below the top line.</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <th scope="row" rowspan="2">Script Type</th>
            <td>script_type</td>
            <td>1354</td>
            <td>Principal script type of the witness.</td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td/>
          </tr>
          <tr className="table-light">
            <td>subscript_type</td>
            <td>1355</td>
            <td>More refined definition of the main script type.</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Vocabulary</td>
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
