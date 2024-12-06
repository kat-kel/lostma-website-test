import { repositoryLink, documentLink, phyDescLink, partLink, witnessLink, textLink, storyLink, storyverseLink, genreLink, scriptaLink } from './Links';

export default function ManualWorkflow() {
    return (
        <>
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
            <div className='container-fluid' style={{ paddingTop: '30px' }} id='CSVWorkflow'>
                <h4>CSV Batch Import</h4>
                <p>... not documented yet ...</p>
            </div>
        </>
    );
};