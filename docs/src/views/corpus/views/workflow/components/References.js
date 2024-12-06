import { footnoteLink } from './Links';


export default function References() {
    return (
        <>
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
        </>
    );
};