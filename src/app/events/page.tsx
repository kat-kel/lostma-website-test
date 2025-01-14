import Link from "next/link";
import PlaceHolder from "@/public/images/lostma_logo.png"
import Image from "next/image";

export default function News() {
  return (
    <div className="gap-4">
        <h1>LostMa Events</h1>

        <div className="container my-2 bg-gradient-to-l from-gray-100 dark:from-gray-800 p-4 rounded-xl">
          <h2>Hackathon 2025</h2>
          <div className="flex gap-4 py-4">
            <div className="flex-none w-48 h-48">
              <Image alt="kickoff-logo" src={PlaceHolder} className="object-scale-down max-h-full m-auto"/>
            </div>
            <div className="flex-1">
              <p>TBD, 2025</p>
              <p>École nationale des chartes &#45; Paris, France</p>
              <p>With initial corpora entered into the database, hackathon to work with and analyse the data, driven by scientific inquiries and leading to early results.</p>
              <button className="rounded-md outline outline-1"><Link href='/events/hackathon2025'>Conference Website</Link></button>
            </div>
          </div>
        </div>

        <div className="container my-2 bg-gradient-to-l from-gray-100 dark:from-gray-800 p-4 rounded-xl">
          <h2>Collaborators Meeting #2</h2>
          <div className="flex gap-4 py-4">
            <div className="flex-none w-48 h-48">
              <Image alt="kickoff-logo" src={PlaceHolder} className="object-scale-down max-h-full m-auto"/>
            </div>
            <div className="flex-1">
              <p>29 September, 2024 - 1 October, 2024</p>
              <p>University of Antwerp &#45; Antwerp, Belgium</p>
              <p>Orientation of collaborators with the data model, discussion of final adjustments, and beginning of data entry.</p>
            </div>
          </div>
        </div>

        <div className="container my-2 bg-gradient-to-l from-gray-100 dark:from-gray-800 p-4 rounded-xl">
          <h2>Collaborators Meeting #1</h2>
          <div className="flex gap-4 py-4">
            <div className="flex-none w-48 h-48">
              <Image alt="kickoff-logo" src={PlaceHolder} className="object-scale-down max-h-full m-auto"/>
            </div>
            <div className="flex-1">
              <p>22 July, 2024</p>
              <p>Royal Library of Belgium &#45; Brussels, Belgium</p>
              <p>Break ground on adjusting the data model in accordance with the needs of diverse corpora.</p>
            </div>
          </div>
        </div>

        <div className="container my-2 bg-gradient-to-l from-gray-100 dark:from-gray-800 p-4 rounded-xl">
          <h2>Kick-off Conference</h2>
          <div className="flex gap-4 py-4">
            <div className="flex-none w-48 h-48">
              <Image alt="kickoff-logo" src={PlaceHolder} className="object-scale-down max-h-full m-auto"/>
            </div>
            <div className="flex-1">
              <p>28-29 May, 2024</p>
              <p>École nationale des chartes &#45; Paris, France</p>
              <p>Kick-off conference, inviting the scientific community to interrogate the key questions of the project.</p>
              <button className="rounded-md outline outline-1">
                <a target="_blank" rel="noreferrer" href="https://www.chartes.psl.eu/sites/default/files/public/media/document/2024-05/lostma_kickoff_event_program.pdf">
                Conference Program
                </a>
              </button>
            </div>
          </div>
        </div>

    </div>
  );
}