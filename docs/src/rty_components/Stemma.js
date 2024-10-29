import { HashLink } from 'react-router-hash-link';

export default function Stemma() {
    
    return (
<div className="container-fluid" id="104">
  <div className="card bg-light mb-3">
    <div className="card-body">
      <h4 className="card-title">stemma</h4>
      <h6 className="card-subtitle mb-2 text-body-secondary">Record ID 104</h6>
      <p className="card-text">Stemma of a tradition, as attested in an edition.</p>
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
            <th scope="row" rowspan="6">genre</th>
            <td>openstemmata-id</td>
            <td>1128</td>
            <td>id in open stemmata</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>openstemmata-contributor</td>
            <td>1131</td>
            <td>openstemmata contributor</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>reference_stemma</td>
            <td>1153</td>
            <td>Is this the reference stemma for this particular text, or an obsolete one?</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td>
              <div id="Vocab1153">
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
            <td>text-title-freetext</td>
            <td>1154</td>
            <td>Freetext version of the text whose stemma is being described.</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>text-author-freetext</td>
            <td>1155</td>
            <td>Freetext version of the text author whose stemma is being described</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>genre</td>
            <td>1129</td>
            <td>text genre</td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td>
              <div id="Vocab1129">
                <p>__subgenre vocab</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item list-group-item-light" id="9489">
                    <div className="ms-2 me-auto">
                      <div>chanson de geste</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9512">
                    <div className="ms-2 me-auto">
                      <div>roman arthurien en prose</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9513">
                    <div className="ms-2 me-auto">
                      <div>roman antique</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9514">
                    <div className="ms-2 me-auto">
                      <div>roman en prose</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9515">
                    <div className="ms-2 me-auto">
                      <div>narratif</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9516">
                    <div className="ms-2 me-auto">
                      <div>roman d&#8217;aventures</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9517">
                    <div className="ms-2 me-auto">
                      <div>roman arthurien en vers</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9518">
                    <div className="ms-2 me-auto">
                      <div>biblique</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9519">
                    <div className="ms-2 me-auto">
                      <div>Miracles+lyrique</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9520">
                    <div className="ms-2 me-auto">
                      <div>lyrique</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9521">
                    <div className="ms-2 me-auto">
                      <div>Fable</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9522">
                    <div className="ms-2 me-auto">
                      <div>Conte</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9523">
                    <div className="ms-2 me-auto">
                      <div>hagiographie</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9524">
                    <div className="ms-2 me-auto">
                      <div>Lai</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9525">
                    <div className="ms-2 me-auto">
                      <div>Bestiaire</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9526">
                    <div className="ms-2 me-auto">
                      <div>Encyclop&#233;die</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9528">
                    <div className="ms-2 me-auto">
                      <div>roman antique en vers</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9529">
                    <div className="ms-2 me-auto">
                      <div>roman</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9530">
                    <div className="ms-2 me-auto">
                      <div>Vie</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9531">
                    <div className="ms-2 me-auto">
                      <div>didactique</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9532">
                    <div className="ms-2 me-auto">
                      <div>Chronicle</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9533">
                    <div className="ms-2 me-auto">
                      <div>drama</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9534">
                    <div className="ms-2 me-auto">
                      <div>chanson de saint</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9719">
                    <div className="ms-2 me-auto">
                      <div>roman lignager</div>
                    </div>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row" rowspan="12">stemmaType</th>
            <td>stemmaType</td>
            <td>1139</td>
            <td>Type of tree: reconstructed (general case) or observed (very rare)</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td>
              <div id="Vocab1139">
                <p>stemmaType vocab</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item list-group-item-light" id="9494">
                    <div className="ms-2 me-auto">
                      <div>reconstructed</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9495">
                    <div className="ms-2 me-auto">
                      <div>observed</div>
                    </div>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td>drawnStemma</td>
            <td>1140</td>
            <td>stemma actually drawn in the source, or deduced from textual description?</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td>
              <div id="Vocab1140">
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
            <td>contam</td>
            <td>1141</td>
            <td>contamination present (whether drawn or not)?</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td>
              <div id="Vocab1141">
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
            <td>extraStemmContam</td>
            <td>1142</td>
            <td>Extra stemmatic contamination (i.e., coming from outside the tree)</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td>
              <div id="Vocab1142">
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
            <td>rootType</td>
            <td>1143</td>
            <td>Root type if specified: original, archetype</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td>
              <div id="Vocab1143">
                <p>rootType vocab</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item list-group-item-light" id="9500">
                    <div className="ms-2 me-auto">
                      <div>unspecified</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9501">
                    <div className="ms-2 me-auto">
                      <div>archetype</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9502">
                    <div className="ms-2 me-auto">
                      <div>original</div>
                    </div>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td>completeWits</td>
            <td>1144</td>
            <td>Does the stemma include all witnesses?</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td>
              <div id="Vocab1144">
                <p>completeWits vocab</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item list-group-item-light" id="9504">
                    <div className="ms-2 me-auto">
                      <div>included</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9505">
                    <div className="ms-2 me-auto">
                      <div>no-descripti</div>
                      <small className="text-body-secondary">descripti removed</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9506">
                    <div className="ms-2 me-auto">
                      <div>selected</div>
                      <small className="text-body-secondary">only a selection</small>
                    </div>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td>sourceText</td>
            <td>1145</td>
            <td>If it is a translation or rewriting, does the stemma include the source text(s) ?</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td>
              <div id="Vocab1145">
                <p>sourceText and derivatives vocab</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item list-group-item-light" id="9508">
                    <div className="ms-2 me-auto">
                      <div>NA</div>
                      <small className="text-body-secondary">not applicable (default)</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9509">
                    <div className="ms-2 me-auto">
                      <div>included</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9510">
                    <div className="ms-2 me-auto">
                      <div>excluded</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9511">
                    <div className="ms-2 me-auto">
                      <div>selected</div>
                      <small className="text-body-secondary">only a selection</small>
                    </div>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td>derivatives</td>
            <td>1146</td>
            <td>Does the stemma include derivatives (when applicable) such as translations, rewritings, &#8230; ?</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td>
              <div id="Vocab1146">
                <p>sourceText and derivatives vocab</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item list-group-item-light" id="9508">
                    <div className="ms-2 me-auto">
                      <div>NA</div>
                      <small className="text-body-secondary">not applicable (default)</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9509">
                    <div className="ms-2 me-auto">
                      <div>included</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9510">
                    <div className="ms-2 me-auto">
                      <div>excluded</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9511">
                    <div className="ms-2 me-auto">
                      <div>selected</div>
                      <small className="text-body-secondary">only a selection</small>
                    </div>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td>note</td>
            <td>1109</td>
            <td>Note(s) concerning the record.</td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>witness</td>
            <td>1147</td>
            <td>witness of this tradition</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Foreign key</td>
            <td>
              <HashLink to="#105">witness</HashLink>
            </td>
            <td/>
          </tr>
          <tr>
            <td>additional-witness</td>
            <td>1148</td>
            <td>witness of this tradition, yet not included in this stemma</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Foreign key</td>
            <td>
              <HashLink to="#105">witness</HashLink>
            </td>
            <td/>
          </tr>
          <tr>
            <td>lost-document</td>
            <td>1150</td>
            <td>lost manuscript, part of the tradition, usually not shown on stemma</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Foreign key</td>
            <td>
              <HashLink to="#106">document</HashLink>
            </td>
            <td/>
          </tr>
          <tr>
            <th scope="row" rowspan="10">publicationType</th>
            <td>publicationType</td>
            <td>1137</td>
            <td>type of publication</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td>
              <div id="Vocab1137">
                <p>publicationType vocab</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item list-group-item-light" id="9492">
                    <div className="ms-2 me-auto">
                      <div>book</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9541">
                    <div className="ms-2 me-auto">
                      <div>publicationPart</div>
                    </div>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td>Author</td>
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
          <tr>
            <td>Title</td>
            <td>1092</td>
            <td>Title of the book or article.</td>
            <td/>
            <td>
              <span className="badge badge-primary">Recommended</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>pubPlace</td>
            <td>1133</td>
            <td>publication place</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>publicationDate</td>
            <td>1132</td>
            <td>publication date</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Date</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>Series</td>
            <td>1134</td>
            <td>Title of the series that published this record.</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>biblScope-volume</td>
            <td>1135</td>
            <td>the volume</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Float</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>biblscope-page</td>
            <td>1136</td>
            <td>page</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>stemma-number</td>
            <td>1138</td>
            <td>stemma number (if more than one in publication)</td>
            <td/>
            <td>
              <span className="badge badge-secondary">Optional</span>
            </td>
            <td>Float</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>URL(s)</td>
            <td>986</td>
            <td>The URL(s) of resources or web pages relating to the current record. Include http:// or https:// <br/>
If there is a primary URL, turn on the special URL field in the record type definition (Attributes) form., which will become a hotlink.</td>
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
