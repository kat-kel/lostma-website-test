import React from 'react';
import { HashLink } from 'react-router-hash-link';

const repositoryLink = <HashLink to='/corpus/recordtypes#108'><code>repository</code></HashLink>
const documentLink = <HashLink to="/corpus/recordtypes#106"><code>document</code></HashLink>
const phyDescLink = <HashLink to="/corpus/recordtypes#129"><code>physDesc</code></HashLink>
const partLink = <HashLink to="/corpus/recordtypes#125"><code>part</code></HashLink>
const witnessLink = <HashLink to="/corpus/recordtypes#105"><code>witness</code></HashLink>
const textLink = <HashLink to="/corpus/recordtypes#101"><code>text</code></HashLink>
const storyLink = <HashLink to="/corpus/recordtypes#103"><code>story</code></HashLink>
const storyverseLink = <HashLink to="/corpus/recordtypes#102"><code>storyverse</code></HashLink>
const genreLink = <HashLink to="/corpus/recordtypes#117"><code>genre</code></HashLink>
const scriptaLink = <HashLink to="/corpus/recordtypes#118"><code>scripta</code></HashLink>
const footnoteLink = <HashLink to="/corpus/recordtypes#128"><code>footnote</code></HashLink>


class WorkflowPage extends React.Component {

    render() {
        return (
            <div className="container-fluid" id="WorkflowPage">
                <div className='container-fluid' id='InputTOC'>
                    <h4>Entering data</h4>
                    <p>There are 2 ways to input data:</p>
                    <ul>
                        <li><HashLink to='#ManualWorkflow'>Graphic User Interface</HashLink></li>
                        <li><HashLink to='#CSVWorkflow'>CSV Batch Import</HashLink></li>
                    </ul>
                    <p>Heurist offers a graphic user interface that lets uers input data one by one. This method is the easiest to learn and best for avoiding accidents.</p>
                    <p>Users can also input multiple examples of 1 record type by preparing and importing a CSV file. The CSV must conform to the record type's data fields and contain the Heurist IDs (not merely the name or label) of any related record types.</p>
                </div>
                <div className='container-fluid' id='ZoteroDescription'>
                    <h4>Entering references</h4>
                    <p>
                        The Heurist database has a feature that allows references in a Zotero library to be imported as Heurist entities.
                        Therefore, rather than creating our own record types to store bibliographic information, we use Zotero to create that information and then rely on Heurist's conversion to use it in the database.
                    </p>
                    <p>
                        The LostMa project has a public Zotero library at this address: <a href="https://www.zotero.org/groups/5710605/lostma-international"
                            target="_blank" rel="noopener noreferrer">https://www.zotero.org/groups/5710605/lostma-international</a>.
                        As a contributor, you should join the group and add to the library references you want to cite in the database.
                        When you have added more references, please notify the database administrator so the Heurist database can be newly synchronised.
                    </p>
                    <p>
                        Heurist converts Zotero's various reference types into its own record types. We have tested the conversion and only recommend using the following types of Zotero references:
                    </p>
                    <ul>
                        <li>Book -- converts to <code>Book</code></li>
                        <li>Book Section -- converts to <code>Book chapter</code></li>
                        <li>Journal Article -- converts to <code>Journal article</code></li>
                        <li>Thesis -- converts to <code>Thesis</code></li>
                    </ul>
                    <p>
                        There are some known issues with the Zotero-to-Heurist conversion.
                    </p>
                    <ul>
                        <li>Conference Paper (avoid) -- converts to <code>Book chapter</code> with errors</li>
                        <li>Dictionary Entry (avoid) -- fails to convert</li>
                        <li>Encyclopedia Article (avoid) -- fails to convert</li>
                    </ul>
                    <p>
                        In our Heurist database, most of the LostMa record types have the ability to link to a reference or {footnoteLink}.
                        The {footnoteLink} entity is intentionally simple, in order to facilitate its quick creation.
                        It draws on a reference imported from Zotero (<code>Book</code>, <code>Book chapter</code>, <code>Journal article</code>, <code>Thesis</code>)
                        and includes page number (<code>pages</code>), the prefix for a dictionary or encyclopedia reference (<code>reference_prefix</code>), and/or a quotation from the source (<code>quotation</code>).
                    </p>
                </div>
                <div className='container-fluid' id='ManualWorkflow'>
                    <h4>Manual Workflow</h4>
                    <div className='row'>
                        <div className='col'>
                            <p>Start entering data from the manuscript.</p>
                            <ol className="list-group list-group-numbered">
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <h5 className="fw-bold"> {documentLink}</h5>
                                        <div className='container-fluid'>
                                            <ul className='list-group'>
                                                <li className='list-group-item'><code>location</code>: {repositoryLink}</li>
                                            </ul>
                                        </div>
                                        <small>Depends on repository.</small>
                                        <p>Contains the manifestation (witness) of a story.</p>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <h5 className="fw-bold">{phyDescLink}</h5>
                                        <div className='container-fluid'>
                                            <ul className='list-group'>
                                                <li className='list-group-item'><code>subject_of_description</code>: {documentLink}</li>
                                            </ul>
                                        </div>
                                        <small>Depends on document.</small>
                                        <p>Describes all or part of a document's materiality.</p>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <h5 className="fw-bold">{partLink}</h5>
                                        <div className='container-fluid'>
                                            <ul className='list-group'>
                                                <li className='list-group-item'><code>is_inscribed_on</code>: {documentLink}</li>
                                                <li className='list-group-item'><code>physical_description</code>: {phyDescLink}</li>
                                            </ul>
                                        </div>
                                        <small>Depends on document, physDesc.</small>
                                        <p>
                                            Describes a range of pages in an extant, physical document that transmits part of a story.
                                            The range of pages can be discontinuous, but the part of the story conveyed must be uninterrupted.
                                            The part record has the attribute <code>div_order</code>, by which
                                            the parts of a witness can be arranged in the order of the text.
                                        </p>
                                    </div>
                                </li>
                            </ol>
                        </div>
                        <div className='col'>
                            <p>Start entering data from the story.</p>
                            <ol className='list-group list-group-numbered'>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <h5 className="fw-bold"> {storyverseLink}</h5>
                                        <div className='container-fluid'>
                                            <ul className='list-group'>
                                            </ul>
                                        </div>
                                        <small>Depends on nothing.</small>
                                        <p>Describes a world in which the characters of multiple stories coexist.</p>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <h5 className="fw-bold"> {storyLink}</h5>
                                        <div className='container-fluid'>
                                            <ul className='list-group'>
                                                <li className='list-group-item'><code>member of cycle</code>: {storyverseLink}</li>
                                            </ul>
                                        </div>
                                        <small>Depends on storyverse.</small>
                                        <p>The narrative content of a story.</p>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <h5 className="fw-bold"> {textLink}</h5>
                                        <div className='container-fluid'>
                                            <ul className='list-group'>
                                                <li className='list-group-item'><code>is_expression_of</code>: {storyLink}</li>
                                                <li className='list-group-item'><code>specific_genre</code>: {genreLink}</li>
                                                <li className='list-group-item'><code>regional_writing_style</code>: {scriptaLink}</li>
                                            </ul>
                                        </div>
                                        <small>Depends on story. <br />Optionally depends on genre, scripta.</small>
                                        <p>Tells the version of a story.</p>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className='row' style={{ paddingTop: '12px' }}>
                        <div className="col">
                            <p>Finish entering data about the story.</p>
                        </div>
                        <div className="col">
                        </div>
                        <div className="col">
                            <p>Finish entering data about the manuscript.</p>
                        </div>
                    </div>
                    <div className='row' style={{ paddingTop: '12px' }}>
                        <div className="col">
                        </div>
                        <div className="col">
                            <p>The final record type to enter is the witness.</p>
                            <ol className='list-group'>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <h5 className="fw-bold">{witnessLink}</h5>
                                        <small>Manifests a version of a story (text); links to 1 or more parts, unless unobserved / hypothetical.</small>
                                        <div className='container-fluid'>
                                            <ul className='list-group'>
                                                <li className='list-group-item'><code>is_manifestation_of</code>: {textLink}</li>
                                                <li className='list-group-item'><code>observed_on_pages</code>: {partLink}</li>
                                                <li className='list-group-item'><code>last_observed_in_doc</code>: {documentLink}</li>
                                            </ul>
                                        </div>
                                        <small>Depends on text. <br />Optionally depends on document (only if hypothetical / lost); otherwise, it depends on part.</small>
                                    </div>
                                </li>
                            </ol>
                        </div>
                        <div className="col">
                        </div>
                    </div>
                </div>
                <div className='container-fluid' style={{ paddingTop: '30px' }} id='CSVWorkflow'>
                    <h4>CSV Batch Import</h4>
                    <p>... not documented yet ...</p>
                </div>
            </div>
        );
    }
}

export default WorkflowPage;
