import { HashLink } from 'react-router-hash-link';

export default function TextTable() {
    
    return (
<div className="container-fluid" id="101">
  <div className="card bg-light mb-3">
    <div className="card-body">
      <h4 className="card-title">text</h4>
      <h6 className="card-subtitle mb-2 text-body-secondary">Record ID 101</h6>
      <p className="card-text">Formulation of a work in human language, whose literary form and style can be detected and whose creation can be attributed to one or more individuals.</p>
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
            <th scope="row" rowspan="3">language</th>
            <td>preferred_name</td>
            <td>1244</td>
            <td>Received or primary name by which the entity is known.</td>
            <td/>
            <td>
              <span className="badge bg-success">Required</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>language</td>
            <td>1090</td>
            <td>Spoken language through which the entity is primarily expressed.</td>
            <td/>
            <td>
              <span className="badge bg-success">Required</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td>
              <div id="Vocab1090">
                <p>Language</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item list-group-item-light" id="9470">
                    <div className="ms-2 me-auto">
                      <div>
                        <a className="link" target="_blank" rel="noreferrer noopener" href="https://iso639-3.sil.org/code/fro">fro (Old French)</a>
                      </div>
                      <small className="text-body-secondary">Old French</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9471">
                    <div className="ms-2 me-auto">
                      <div>
                        <a className="link" target="_blank" rel="noreferrer noopener" href="https://iso639-3.sil.org/code/pro">pro (Occitan)</a>
                      </div>
                      <small className="text-body-secondary">Old Occitan, Proven&#231;al (to 1500)</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9472">
                    <div className="ms-2 me-auto">
                      <div>fro_ENG (Anglo-Norman)</div>
                      <small className="text-body-secondary">Anglo-Norman</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9473">
                    <div className="ms-2 me-auto">
                      <div>fro_ITA (Franco-Italian)</div>
                      <small className="text-body-secondary">Franco-italian</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9474">
                    <div className="ms-2 me-auto">
                      <div>fro_PRO (Franco-Occitan)</div>
                      <small className="text-body-secondary">Franco-Occitan (occitanised French or francised Occitan)</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9557">
                    <div className="ms-2 me-auto">
                      <div>
                        <a className="link" target="_blank" rel="noreferrer noopener" href="https://iso639-3.sil.org/code/frm">frm (Middle French)</a>
                      </div>
                      <small className="text-body-secondary">Middle French</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9727">
                    <div className="ms-2 me-auto">
                      <div>
                        <a className="link" target="_blank" rel="noreferrer noopener" href="https://iso639-3.sil.org/code/cat">cat (Catalan)</a>
                      </div>
                      <small className="text-body-secondary">Catalan</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9728">
                    <div className="ms-2 me-auto">
                      <div>
                        <a className="link" target="_blank" rel="noreferrer noopener" href="https://iso639-3.sil.org/code/dum">dum (Middle Dutch)</a>
                      </div>
                      <small className="text-body-secondary">Middle Dutch</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9729">
                    <div className="ms-2 me-auto">
                      <div>
                        <a className="link" target="_blank" rel="noreferrer noopener" href="https://iso639-3.sil.org/code/enm">enm (Middle English)</a>
                      </div>
                      <small className="text-body-secondary">Middle English (1100-1500)</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9732">
                    <div className="ms-2 me-auto">
                      <div>
                        <a className="link" target="_blank" rel="noreferrer noopener" href="https://iso639-3.sil.org/code/ghg">ghg (Early Modern Irish)</a>
                      </div>
                      <small className="text-body-secondary">Early Modern Irish, Hiberno-Scottish Gaelic</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9733">
                    <div className="ms-2 me-auto">
                      <div>
                        <a className="link" target="_blank" rel="noreferrer noopener" href="https://iso639-3.sil.org/code/glg">glg (Galician)</a>
                      </div>
                      <small className="text-body-secondary">Galician</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9734">
                    <div className="ms-2 me-auto">
                      <div>glg_POR (Galician-Portugese)</div>
                      <small className="text-body-secondary">Galician-Portugese</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9735">
                    <div className="ms-2 me-auto">
                      <div>
                        <a className="link" target="_blank" rel="noreferrer noopener" href="https://iso639-3.sil.org/code/gmh">gmh (Middle High German)</a>
                      </div>
                      <small className="text-body-secondary">Middle High German (1050-1500)</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9736">
                    <div className="ms-2 me-auto">
                      <div>
                        <a className="link" target="_blank" rel="noreferrer noopener" href="https://iso639-3.sil.org/code/gml">gml (Middle Low German)</a>
                      </div>
                      <small className="text-body-secondary">Middle Low German</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9737">
                    <div className="ms-2 me-auto">
                      <div>
                        <a className="link" target="_blank" rel="noreferrer noopener" href="https://iso639-3.sil.org/code/isl">isl (Islandic)</a>
                      </div>
                      <small className="text-body-secondary">Islandic</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9738">
                    <div className="ms-2 me-auto">
                      <div>
                        <a className="link" target="_blank" rel="noreferrer noopener" href="https://iso639-3.sil.org/code/ita">ita (Italian)</a>
                      </div>
                      <small className="text-body-secondary">Italian</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9739">
                    <div className="ms-2 me-auto">
                      <div>
                        <a className="link" target="_blank" rel="noreferrer noopener" href="https://iso639-3.sil.org/code/mga">mga (Middle Irish)</a>
                      </div>
                      <small className="text-body-secondary">Middle Irish (900-1200)</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9740">
                    <div className="ms-2 me-auto">
                      <div>
                        <a className="link" target="_blank" rel="noreferrer noopener" href="https://iso639-3.sil.org/code/non">non (Old Norse)</a>
                      </div>
                      <small className="text-body-secondary">Old Norse denotes both Old Icelandic and Old Norwegian.</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9741">
                    <div className="ms-2 me-auto">
                      <div>non_DAN (Old Danish)</div>
                      <small className="text-body-secondary">Old Danish (800-1100)</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9742">
                    <div className="ms-2 me-auto">
                      <div>non_SWE (Old Swedish)</div>
                      <small className="text-body-secondary">Old Swedish (800-1500)</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9743">
                    <div className="ms-2 me-auto">
                      <div>
                        <a className="link" target="_blank" rel="noreferrer noopener" href="https://iso639-3.sil.org/code/oco">oco (Old Cornish)</a>
                      </div>
                      <small className="text-body-secondary">Old Cornish</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9744">
                    <div className="ms-2 me-auto">
                      <div>
                        <a className="link" target="_blank" rel="noreferrer noopener" href="https://iso639-3.sil.org/code/por">por (Portugese)</a>
                      </div>
                      <small className="text-body-secondary">Portugese</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9745">
                    <div className="ms-2 me-auto">
                      <div>
                        <a className="link" target="_blank" rel="noreferrer noopener" href="https://iso639-3.sil.org/code/spa">spa (Spanish)</a>
                      </div>
                      <small className="text-body-secondary">Spanish or Castilian</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9746">
                    <div className="ms-2 me-auto">
                      <div>
                        <a className="link" target="_blank" rel="noreferrer noopener" href="https://iso639-3.sil.org/code/wlm">wlm (Middle Welsh)</a>
                      </div>
                      <small className="text-body-secondary">Middle Welsh</small>
                    </div>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td>literary_form</td>
            <td>1265</td>
            <td>Overall form of the literary style (verse, prose, mixed).</td>
            <td/>
            <td>
              <span className="badge bg-success">Required</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td>
              <div id="Vocab1265">
                <p>Form</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item list-group-item-light" id="9549">
                    <div className="ms-2 me-auto">
                      <div>verse</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9550">
                    <div className="ms-2 me-auto">
                      <div>prose</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9551">
                    <div className="ms-2 me-auto">
                      <div>mixed</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9726">
                    <div className="ms-2 me-auto">
                      <div>unknown</div>
                      <small className="text-body-secondary">The form is unknown because all manifestations (Witnesses) of the text are lost and there is no hypothesis about whether the text is in verse, prose, or both.</small>
                    </div>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row" rowspan="2">is_hypothetical</th>
            <td>is_hypothetical</td>
            <td>1266</td>
            <td>Whether the entity is attested (True) in a hypothesis or whether it is received as fact that it exists or existed (False).</td>
            <td/>
            <td>
              <span className="badge bg-success">Required</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td>
              <div id="Vocab1266">
                <p>yes/no/maybe vocab</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item list-group-item-light" id="9482">
                    <div className="ms-2 me-auto">
                      <div>Yes</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9483">
                    <div className="ms-2 me-auto">
                      <div>No</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9484">
                    <div className="ms-2 me-auto">
                      <div>Maybe</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9770">
                    <div className="ms-2 me-auto">
                      <div>unknown</div>
                      <small className="text-body-secondary">The information is not ready to be input.</small>
                    </div>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td>claim_freetext</td>
            <td>1294</td>
            <td>
              <b>[Temporary]</b>
              <br/>Brief note about the hypothesis that attests to this record's existence. This information is meant to be a temporary note that will eventually be entered into a Hypothesis entity, which should be linked back to this record.</td>
            <td/>
            <td>
              <span className="badge bg-primary">Recommended</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <th scope="row" rowspan="8">peripheral</th>
            <td>alternative_names</td>
            <td>132</td>
            <td>Alternative names or titles, use for simple alternatives where additional metadata is not needed.</td>
            <td/>
            <td>
              <span className="badge bg-primary">Recommended</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>is_expression_of</td>
            <td>1097</td>
            <td>Realization of an abstract, creative work through words, sound, image, etc.</td>
            <td/>
            <td>
              <span className="badge bg-primary">Recommended</span>
            </td>
            <td>Foreign key</td>
            <td>
              <HashLink to="#103">story</HashLink>
            </td>
            <td/>
          </tr>
          <tr>
            <td>peripheral</td>
            <td>1331</td>
            <td>Not part of the main corpus's scope.</td>
            <td/>
            <td>
              <span className="badge bg-success">Required</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td>
              <div id="Vocab1331">
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
            <td>specific_genre</td>
            <td>1270</td>
            <td>Specific literary genre or subgenre attributed to the text.</td>
            <td/>
            <td>
              <span className="badge bg-primary">Recommended</span>
            </td>
            <td>Foreign key</td>
            <td>
              <HashLink to="#117">genre</HashLink>
            </td>
            <td/>
          </tr>
          <tr>
            <td>length</td>
            <td>1166</td>
            <td>Length (number of verses, of chapters for prose)</td>
            <td/>
            <td>
              <span className="badge bg-primary">Recommended</span>
            </td>
            <td>Float</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>length_freetext</td>
            <td>1334</td>
            <td>Briefly describe any uncertainties or ambiguities about the length.</td>
            <td/>
            <td>
              <span className="badge bg-primary">Recommended</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>verse_type</td>
            <td>1165</td>
            <td>Type of verses</td>
            <td/>
            <td>
              <span className="badge bg-primary">Recommended</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td>
              <div id="Vocab1165">
                <p>Meter</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item list-group-item-light" id="9553">
                    <div className="ms-2 me-auto">
                      <div>octosyllabe</div>
                      <small className="text-body-secondary">Line consisting of 8 syllables.</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9554">
                    <div className="ms-2 me-auto">
                      <div>decasyllabe</div>
                      <small className="text-body-secondary">Line consisting of 10 syllables.</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9555">
                    <div className="ms-2 me-auto">
                      <div>alexandrine</div>
                      <small className="text-body-secondary">Line consisting of 2 half-lines each of 6 syllables, total of 12 syllables. Also known as French alexandrine.</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9561">
                    <div className="ms-2 me-auto">
                      <div>hexasyllabe</div>
                      <small className="text-body-secondary">Line consisting of 6 syllables.</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9756">
                    <div className="ms-2 me-auto">
                      <div>dodecasyllabe</div>
                      <small className="text-body-secondary">Line consisting of 12 syllables.</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9757">
                    <div className="ms-2 me-auto">
                      <div>pentasyllabe</div>
                      <small className="text-body-secondary">Line consisting of 5 syllables.</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9780">
                    <div className="ms-2 me-auto">
                      <div>iambic</div>
                    </div>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td>rhyme_type</td>
            <td>1167</td>
            <td>Rhyme or assonance</td>
            <td/>
            <td>
              <span className="badge bg-primary">Recommended</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td>
              <div id="Vocab1167">
                <p>Rhyme</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item list-group-item-light" id="9559">
                    <div className="ms-2 me-auto">
                      <div>unknown</div>
                      <small className="text-body-secondary">It is known that the text is in verse and rhyming, but the type of rhyme is unknown.</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9560">
                    <div className="ms-2 me-auto">
                      <div>assonance</div>
                      <small className="text-body-secondary">Rhyme is allowed between words that have a repeated vowel sound, such as &#8220;a&#8221; in &#8220;Vio puertas abiertas e u&#231;os sin ca&#241;ados / alcandaras vazias sin pielles e sin mantos&#8221; in Castilian. (J. Gornall, &#8220;Assonance in the Hispanic "Romance," 1995)</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9771">
                    <div className="ms-2 me-auto">
                      <div>monorhyme</div>
                      <small className="text-body-secondary">All lines have the same end-rhyme.</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9778">
                    <div className="ms-2 me-auto">
                      <div>alliteration</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9779">
                    <div className="ms-2 me-auto">
                      <div>full rhyme</div>
                    </div>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row" rowspan="5">tradition_status</th>
            <td>is_derived_from</td>
            <td>1267</td>
            <td>Prior text(s) that the entity reworked as an adaptation, translation, versification, etc.</td>
            <td/>
            <td>
              <span className="badge bg-secondary">Optional</span>
            </td>
            <td>Foreign key</td>
            <td>
              <HashLink to="#101">text</HashLink>
            </td>
            <td/>
          </tr>
          <tr>
            <td>nature_of_derivations</td>
            <td>1332</td>
            <td>Note about the nature of the text or texts from which this text is derived.</td>
            <td/>
            <td>
              <span className="badge bg-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>tradition_status</td>
            <td>1101</td>
            <td>General evaluation of the overall survival of all the witnesses of a text.</td>
            <td/>
            <td>
              <span className="badge bg-success">Required</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td>
              <div id="Vocab1101">
                <p>Tradition Status</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item list-group-item-light" id="9477">
                    <div className="ms-2 me-auto">
                      <div>fragmentary</div>
                      <small className="text-body-secondary">Surviving in only fragments. No complete witnesses survive.</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9478">
                    <div className="ms-2 me-auto">
                      <div>lost</div>
                      <small className="text-body-secondary">No witnesses of this text survive. It is a completely lost tradition.</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9480">
                    <div className="ms-2 me-auto">
                      <div>surviving</div>
                      <small className="text-body-secondary">Surviving in at least one (more or less) complete manuscript</small>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9777">
                    <div className="ms-2 me-auto">
                      <div>unknown</div>
                      <small className="text-body-secondary">The information is not ready to be input.</small>
                    </div>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td>status_notes</td>
            <td>1102</td>
            <td>Brief note detailing the entity's survival status.</td>
            <td/>
            <td>
              <span className="badge bg-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>in_stemma</td>
            <td>1117</td>
            <td>Reference to the stemma(ta) of the text.</td>
            <td/>
            <td>
              <span className="badge bg-secondary">Optional</span>
            </td>
            <td>Foreign key</td>
            <td>
              <HashLink to="#104">stemma</HashLink>
            </td>
            <td/>
          </tr>
          <tr>
            <th scope="row" rowspan="4">has_lost_older_version</th>
            <td>has_lost_older_version</td>
            <td>1103</td>
            <td>Is the text based on a now-lost older version?</td>
            <td/>
            <td>
              <span className="badge bg-success">Required</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td>
              <div id="Vocab1103">
                <p>yes/no/maybe vocab</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item list-group-item-light" id="9482">
                    <div className="ms-2 me-auto">
                      <div>Yes</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9483">
                    <div className="ms-2 me-auto">
                      <div>No</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9484">
                    <div className="ms-2 me-auto">
                      <div>Maybe</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9770">
                    <div className="ms-2 me-auto">
                      <div>unknown</div>
                      <small className="text-body-secondary">The information is not ready to be input.</small>
                    </div>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td>ancient_translations_freetext</td>
            <td>1105</td>
            <td>Free text description of translations and adaptations that were derived from this record.</td>
            <td/>
            <td>
              <span className="badge bg-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>rewritings_freetext</td>
            <td>1107</td>
            <td>Freetext description of rewritings that were derived from this record.</td>
            <td/>
            <td>
              <span className="badge bg-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>note</td>
            <td>1109</td>
            <td>Note(s) concerning the record.</td>
            <td/>
            <td>
              <span className="badge bg-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <th scope="row" rowspan="2">Writing variant</th>
            <td>regional_writing_style</td>
            <td>1330</td>
            <td>A regional writing style (aka scripta), similar to the written version of a spoken dialect.</td>
            <td/>
            <td>
              <span className="badge bg-primary">Recommended</span>
            </td>
            <td>Foreign key</td>
            <td>
              <HashLink to="#118">scripta</HashLink>
            </td>
            <td/>
          </tr>
          <tr>
            <td>scripta_freetext</td>
            <td>1100</td>
            <td>Brief, human-readable description of the writing variant (Scripta) with which this record is associated.</td>
            <td/>
            <td>
              <span className="badge bg-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <th scope="row" rowspan="4">date_of_creation_certainty</th>
            <td>date_of_creation</td>
            <td>1285</td>
            <td>Time when the entity begins to exist.</td>
            <td>
              <a className="link" target="_blank" rel="noreferrer noopener" href="https://www.wikidata.org/wiki/Property:P571">https://www.wikidata.org/wiki/Property:P571</a>
            </td>
            <td>
              <span className="badge bg-success">Required</span>
            </td>
            <td>Date</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>date_of_creation_certainty</td>
            <td>1258</td>
            <td>Degree of certainty applied to the claim.</td>
            <td/>
            <td>
              <span className="badge bg-primary">Recommended</span>
            </td>
            <td>Vocabulary</td>
            <td/>
            <td>
              <div id="Vocab1258">
                <p>certainty vocab</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item list-group-item-light" id="9760">
                    <div className="ms-2 me-auto">
                      <div>4. Certain (100%)</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9762">
                    <div className="ms-2 me-auto">
                      <div>3. Very likely (66%-99%)</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9763">
                    <div className="ms-2 me-auto">
                      <div>2. Probable (33%-66%)</div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-light" id="9765">
                    <div className="ms-2 me-auto">
                      <div>0. Unlikely (1%-33%)</div>
                    </div>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td>date_of_creation_source</td>
            <td>1286</td>
            <td>Notes about the source of the creation date information, including a human-readable summary or transcription of the time range. Can include a brief bibliographic citation.</td>
            <td/>
            <td>
              <span className="badge bg-primary">Recommended</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>date_freetext</td>
            <td>1094</td>
            <td>Brief, human-readable description of the date given to this record.</td>
            <td/>
            <td>
              <span className="badge bg-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <th scope="row" rowspan="3">People</th>
            <td>is_written_by</td>
            <td>1288</td>
            <td>The individual accredited with formulating an expression of the creative work.</td>
            <td/>
            <td>
              <span className="badge bg-primary">Recommended</span>
            </td>
            <td>Foreign key</td>
            <td>Person</td>
            <td/>
          </tr>
          <tr>
            <td>is_adapted_by</td>
            <td>1289</td>
            <td>When the Text is an adaptation or translation of another Text, the individual accredited with creating the adaptation or translation.</td>
            <td/>
            <td>
              <span className="badge bg-primary">Recommended</span>
            </td>
            <td>Foreign key</td>
            <td>Person</td>
            <td/>
          </tr>
          <tr>
            <td>author_freetext</td>
            <td>1091</td>
            <td>Human-readable reference to an author, which can include annotations about certainty.</td>
            <td/>
            <td>
              <span className="badge bg-primary">Recommended</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <th scope="row" rowspan="2">Place</th>
            <td>place_of_creation</td>
            <td>1290</td>
            <td>Place where the entity was conceived or made.</td>
            <td>
              <a className="link" target="_blank" rel="noreferrer noopener" href="https://www.wikidata.org/wiki/Property:P1071">https://www.wikidata.org/wiki/Property:P1071</a>
            </td>
            <td>
              <span className="badge bg-primary">Recommended</span>
            </td>
            <td>Foreign key</td>
            <td>Place</td>
            <td/>
          </tr>
          <tr>
            <td>place_of_creation_source</td>
            <td>1291</td>
            <td>Notes along with bibliographic citation about the source of the creation place information.</td>
            <td/>
            <td>
              <span className="badge bg-primary">Recommended</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
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
              <span className="badge bg-primary">Recommended</span>
            </td>
            <td>Foreign key</td>
            <td>Book chapter, Book, Journal article, Thesis, <HashLink to="#128">footnote</HashLink>
            </td>
            <td/>
          </tr>
          <tr>
            <td>described_at_URL</td>
            <td>1269</td>
            <td>Described at webpage.<br/>Property <a target="_blank" rel="noreferrer noopener" href="https://www.wikidata.org/wiki/Property:P973">P973</a>
            </td>
            <td/>
            <td>
              <span className="badge bg-primary">Recommended</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <td>reference_notes</td>
            <td>1284</td>
            <td>Brief notes about a reference and/or citation that should eventually be added to the database and linked to this record.</td>
            <td/>
            <td>
              <span className="badge bg-secondary">Optional</span>
            </td>
            <td>Text</td>
            <td/>
            <td/>
          </tr>
          <tr>
            <th scope="row" rowspan="2">review_status</th>
            <td>review_status</td>
            <td>1183</td>
            <td>Status of record's preparation for public view.</td>
            <td/>
            <td>
              <span className="badge bg-success">Required</span>
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
          <tr>
            <td>review_note</td>
            <td>1248</td>
            <td>Information to help with review of this entity.</td>
            <td/>
            <td>
              <span className="badge bg-primary">Recommended</span>
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
