import Link from "next/link";
import loadData, { loadVocabData } from "./components/loadData";

export default async function DataModelPage() {
  const data = await loadData();
  const vocabs = await loadVocabData();

  const SortedData = Object.values(data).sort(
    (a, b) => a.metadata.rty_Name.localeCompare(b.metadata.rty_Name)
  );

  const SortedVocabs = Object.values(vocabs).sort(
    (a, b) => a.label.localeCompare(b.label)
  );

  return (
    <>
    <h1>Data Model</h1>
    <div className="grid md:grid-cols-2 md:px-20 px-8">
      <div className="container">
        <h2>Ontologies</h2>
        <ul key="entity-link-list" className="list-disc">
          {
            Object.values(SortedData).map((value, index) => {
              const entityURL = "/corpus/model/entities/" + value.id;
              const entityLinkID = "entity-link-" + index;
              return (
                <li key={entityLinkID}><Link href={entityURL}>{value.metadata.rty_Name}</Link></li>
              );
            })
          }
        </ul>
      </div>
      <div className="container">
        <h2>Vocabularies</h2>
        <ul key="vocab-link-list" className="list-disc">
          {
            Object.values(SortedVocabs).map((value, index) => {
              const vocabURL = "/corpus/model/vocabs/" + value.id;
              const vocabLinkID = "vocab-link-" + index;
              return (
                <li key={vocabLinkID}><Link href={vocabURL}>{value.label}</Link></li>
              );
            })
          }
        </ul>
      </div>
    </div>
    </>
  );
}