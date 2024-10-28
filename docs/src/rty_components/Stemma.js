import { HashLink } from 'react-router-hash-link'

export default function Stemma() {
  return (
    <div className="container-lg" id="104">
      <div className="card bg-light mb-3" style={{ position: "sticky", top: "0" }}>
        <div className="card-body">
          <h4 className="card-title">stemma</h4>
          <h6 className="card-subtitle mb-2 text-body-secondary">Record ID 104</h6>
          <p className="card-text">Stemma of a tradition, as attested in an edition.</p>
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
                <th scope="row" rowspan="6">Identification</th>
                <td>openstemmata-id</td>
                <td>1128</td>
                <td>id in open stemmata</td>
                <td />
                <td>
                  <span className="badge badge-secondary">Optional</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>openstemmata-contributor</td>
                <td>1131</td>
                <td>openstemmata contributor</td>
                <td />
                <td>
                  <span className="badge badge-secondary">Optional</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>reference_stemma</td>
                <td>1153</td>
                <td>Is this the reference stemma for this particular text, or an obsolete one?</td>
                <td />
                <td>
                  <span className="badge badge-secondary">Optional</span>
                </td>
                <td>Vocabulary</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>text-title-freetext</td>
                <td>1154</td>
                <td>Freetext version of the text whose stemma is being described.</td>
                <td />
                <td>
                  <span className="badge badge-secondary">Optional</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>text-author-freetext</td>
                <td>1155</td>
                <td>Freetext version of the text author whose stemma is being described</td>
                <td />
                <td>
                  <span className="badge badge-secondary">Optional</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>genre</td>
                <td>1129</td>
                <td>text genre</td>
                <td />
                <td>
                  <span className="badge badge-primary">Recommended</span>
                </td>
                <td>Vocabulary</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <th scope="row" rowspan="12">Description</th>
                <td>stemmaType</td>
                <td>1139</td>
                <td>Type of tree: reconstructed (general case) or observed (very rare)</td>
                <td />
                <td>
                  <span className="badge badge-secondary">Optional</span>
                </td>
                <td>Vocabulary</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>drawnStemma</td>
                <td>1140</td>
                <td>stemma actually drawn in the source, or deduced from textual description?</td>
                <td />
                <td>
                  <span className="badge badge-secondary">Optional</span>
                </td>
                <td>Vocabulary</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>contam</td>
                <td>1141</td>
                <td>contamination present (whether drawn or not)?</td>
                <td />
                <td>
                  <span className="badge badge-secondary">Optional</span>
                </td>
                <td>Vocabulary</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>extraStemmContam</td>
                <td>1142</td>
                <td>Extra stemmatic contamination (i.e., coming from outside the tree)</td>
                <td />
                <td>
                  <span className="badge badge-secondary">Optional</span>
                </td>
                <td>Vocabulary</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>rootType</td>
                <td>1143</td>
                <td>Root type if specified: original, archetype</td>
                <td />
                <td>
                  <span className="badge badge-secondary">Optional</span>
                </td>
                <td>Vocabulary</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>completeWits</td>
                <td>1144</td>
                <td>Does the stemma include all witnesses?</td>
                <td />
                <td>
                  <span className="badge badge-secondary">Optional</span>
                </td>
                <td>Vocabulary</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>sourceText</td>
                <td>1145</td>
                <td>If it is a translation or rewriting, does the stemma include the source text(s) ?</td>
                <td />
                <td>
                  <span className="badge badge-secondary">Optional</span>
                </td>
                <td>Vocabulary</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>derivatives</td>
                <td>1146</td>
                <td>Does the stemma include derivatives (when applicable) such as translations, rewritings, &#8230; ?</td>
                <td />
                <td>
                  <span className="badge badge-secondary">Optional</span>
                </td>
                <td>Vocabulary</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>note</td>
                <td>1109</td>
                <td>Note(s) concerning the record.</td>
                <td />
                <td>
                  <span className="badge badge-primary">Recommended</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>witness</td>
                <td>1147</td>
                <td>witness of this tradition</td>
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
                <td>additional-witness</td>
                <td>1148</td>
                <td>witness of this tradition, yet not included in this stemma</td>
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
                <td>lost-document</td>
                <td>1150</td>
                <td>lost manuscript, part of the tradition, usually not shown on stemma</td>
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
                <th scope="row" rowspan="10">References</th>
                <td>publicationType</td>
                <td>1137</td>
                <td>type of publication</td>
                <td />
                <td>
                  <span className="badge badge-secondary">Optional</span>
                </td>
                <td>Vocabulary</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>Author</td>
                <td>1091</td>
                <td>Human-readable reference to an author, which can include annotations about certainty.</td>
                <td />
                <td>
                  <span className="badge badge-primary">Recommended</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>Title</td>
                <td>1092</td>
                <td>Title of the book or article.</td>
                <td />
                <td>
                  <span className="badge badge-primary">Recommended</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>pubPlace</td>
                <td>1133</td>
                <td>publication place</td>
                <td />
                <td>
                  <span className="badge badge-secondary">Optional</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>publicationDate</td>
                <td>1132</td>
                <td>publication date</td>
                <td />
                <td>
                  <span className="badge badge-secondary">Optional</span>
                </td>
                <td>Date</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>Series</td>
                <td>1134</td>
                <td>Title of the series that published this record.</td>
                <td />
                <td>
                  <span className="badge badge-secondary">Optional</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>biblScope-volume</td>
                <td>1135</td>
                <td>the volume</td>
                <td />
                <td>
                  <span className="badge badge-secondary">Optional</span>
                </td>
                <td>Float</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>biblscope-page</td>
                <td>1136</td>
                <td>page</td>
                <td />
                <td>
                  <span className="badge badge-secondary">Optional</span>
                </td>
                <td>Text</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>stemma-number</td>
                <td>1138</td>
                <td>stemma number (if more than one in publication)</td>
                <td />
                <td>
                  <span className="badge badge-secondary">Optional</span>
                </td>
                <td>Float</td>
                <td />
                <td />
              </tr>
              <tr className="table-light">
                <td>URL(s)</td>
                <td>986</td>
                <td>The URL(s) of resources or web pages relating to the current record. Include http:// or https:// <br />
                  If there is a primary URL, turn on the special URL field in the record type definition (Attributes) form., which will become a hotlink.</td>
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
