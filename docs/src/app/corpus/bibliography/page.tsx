'use client'
import { useState } from "react";
import Link from "next/link";

export default function News() {
  const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
            setIsOpen(!isOpen);
        };
  
  return (
    <>
    <h1>Bibliography</h1>
    <div className="container">
      <p>
        To enrich resources in the corpus, we use citations in a public Zotero library at this address: <a href="https://www.zotero.org/groups/5710605/lostma-international"
              target="_blank" rel="noopener noreferrer">https://www.zotero.org/groups/5710605/lostma-international</a>.
      </p>
    </div>

    <div className="container text-center">
      <p>Are you a contributor?</p>
      <button 
        id="contributor-popup-button"
        type="button" 
        className="
            relative rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
        " 
        aria-controls="contributor-popup" 
        aria-expanded="false"
        aria-label="contributor-popup"
        aria-haspopup="true"
        onClick={toggleDropdown}
      >
        Click here to learn how to cite information you add to the corpus.
      </button>
    </div>
      {isOpen && (
  
        <div id="#zotero" className="container">
          <ul className="list-decimal">
            <li>Ask the administrator to join the Zotero group library.</li>
            <li>Add to the Zotero library the references you want to attach to information in the Heurist database.</li>
            <li>Notify the administrator that you've updated the Zotero library. The administrator will then newly synchronise the database with the Zotero library.</li>
            <li>Log into the database and start creating <Link href="/corpus/model/entities/128"><code>Footnote</code></Link> entities, which have one of the imported Zotero references and some other identifying information (i.e. page number).</li>
          </ul>
          <div className="text-muted mb-3">Note: It's easiest to create <code>Footnote</code> entities directly from the entities you're editing / reviewing by clicking on their <code>described_by_source</code> attribute and adding a new <code>Footnote</code> from there. The new <code>Footnote</code> will be immediately linked to the entity you're editing / reviewing.</div>
          <p>
            Heurist converts Zotero's various reference types into its own record types. We have tested the conversion and only recommend using the following types of Zotero references:
          </p>
          <ul className="list-disc">
              <li>Book -- converts to <code>Book</code></li>
              <li>Book Section -- converts to <code>Book chapter</code></li>
              <li>Journal Article -- converts to <code>Journal article</code></li>
              <li>Thesis -- converts to <code>Thesis</code></li>
          </ul>
          <p>
              There are some known issues with the Zotero-to-Heurist conversion.
          </p>
          <ul className="list-disc">
              <li>Conference Paper (avoid) -- converts to <code>Book chapter</code> with errors</li>
              <li>Dictionary Entry (avoid) -- fails to convert</li>
              <li>Encyclopedia Article (avoid) -- fails to convert</li>
          </ul>
          <p>
              In our Heurist database, most of the LostMa record types have the ability to link to a reference or <Link href="/corpus/model/entities/128"><code>Footnote</code></Link>.
              The <Link href="/corpus/model/entities/128"><code>Footnote</code></Link> entity is intentionally simple, in order to facilitate its quick creation.
              It draws on a reference imported from Zotero (<code>Book</code>, <code>Book chapter</code>, <code>Journal article</code>, <code>Thesis</code>)
              and includes page number (<code>pages</code>), the prefix for a dictionary or encyclopedia reference (<code>reference_prefix</code>), and/or a quotation from the source (<code>quotation</code>).
          </p>
        </div>
        )
      }
    </>
  );
}