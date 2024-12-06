import React from 'react';
import { HashLink } from 'react-router-hash-link';


export default function Corpus() {
    return (
        <>
            <h2 className="mb-3">Text Corpus</h2>
            <p className="lead fs-4 text-secondary mb-3">
                One objective of the LostMa project is to compose a multi-lingual corpus of textual traditions.
            </p>
            <p className="mb-5">
                The scope of this corpus is defined by the following factors:
                <ul>
                    <li>Content: The story describes a hero or epic adventure; the archetypical example is a knight's tale.</li>
                    <li>Transmission: The story was first circulated in manuscript form.</li>
                    <li>Time: The first manuscript copies were written before the invention of the printing press.</li>
                    <li>Geography: The story was circulated within Western Europe.</li>
                </ul>
            </p>
            <hr />
            <p className="lead fs-4 text-secondary mb-3">
                We are in the process of publishing our methods and results.
            </p>
            <p>
                The following links and pages are under construction and intended for contributors to the project.
            </p>
            <div className="row">
                <div className='col'>
                    <div className='list-group'>
                        <li className="list-group-item disabled">Pages</li>
                        <HashLink
                            className="list-group-item list-group-item-action"
                            to="/corpus/ontology"
                        >
                            <div className="d-flex w-100">
                                <h5 className="mb-1">Ontology and Vocabulary</h5>
                            </div>
                            <p>What is the structure of the record types in the Heurist database?</p>
                        </HashLink>
                        <HashLink
                            className='list-group-item list-group-item-action'
                            to="/corpus/workflow"
                        >
                            <div className='d-flex w-100'>
                                <h5 className='mb-1'>Recommended Workflow</h5>
                            </div>
                            <p>How do I enter new data into the Heurist database?</p>
                        </HashLink>
                        <HashLink
                            className='list-group-item list-group-item-action'
                            to="/corpus/data"
                        >
                            <div className='d-flex w-100'>
                                <h5 className='mb-1'>Published Texts</h5>
                            </div>
                            <p>How is the data in the Heurist database output?</p>
                            <small></small>
                        </HashLink>
                    </div>
                </div>
                <div className='col'>
                    <div className='list-group'>
                        <li className="list-group-item disabled">External Links</li>
                        <a
                            className="list-group-item list-group-item-action"
                            href="https://heurist.huma-num.fr/heurist/?db=jbcamps_gestes"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <div className="d-flex w-100">
                                <h5 className="mb-1">Heurist Database</h5>
                            </div>
                            <p>How do I log into the Heurist database?</p>
                            <small>Clicking this block will open a new tab. You will be brought to the log-in page of the project's Heurist database. If you're a contributor to the project, enter your log-in details.</small>
                        </a>
                        <a
                            className='list-group-item list-group-item-action'
                            href="https://www.zotero.org/groups/5710605/lostma-international"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <div className='d-flex w-100'>
                                <h5 className='mb-1'>LostMa Zotero</h5>
                            </div>
                            <p>What references does the corpus depend on?</p>
                            <small>The library is periodically imported / synchronised with the Heurist database.
                                In the Heurist database, citations (record type <code>footnote</code>) attached to records refer to references in the Zotero library.</small>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};