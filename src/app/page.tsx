import Link from "next/link";
import { PeopleSVG, DatabaseSVG, NewspaperSVG } from "@/public/svgs";

export default function Home() {
  return (
    <div>
      <h1>What is LostMa?</h1>
      <div className="container">
        <p>
            A digital humanities research project that blends AI, complexity science, and philological expertise to unravel the mysteries behind the deviation from pure chance of a text&apos;s transmission.
        </p>
        <p>
            We are funded by the European Research Council (ERC) for five years, 2024-2029. Our offices are in the Campus Condorcet&apos;s Hôtel à projets and we are hosted by the École nationale des chartes in Paris, France.
        </p>
      </div>
      <div className="grid md:grid-cols-2 pt-4 md:pt-0 gap-8 px-8">
          {/* First point */}
          <div className="container">
            <div className="flex gap-2">
              <Link href='/people'>
                  {PeopleSVG}
              </Link>
              <h2>People</h2>
            </div>
            <p>We are a small team with collaborators from around Europe, contributing area expertise on various textual traditions.</p>
          </div>
          {/* Second point */}
          <div className="container">
            <div className="flex gap-2">
              <Link href='/corpus'>
                  {DatabaseSVG}
              </Link>
              <h2>Corpus</h2>
            </div>
            <p>We are building a multilingual corpus of Medieval literary traditions, focused on epics and knights&apos; tales.</p>
          </div>
          {/* Third point */}
          <div className="container">
            <div className="flex gap-2">
              <Link href='/news'>
                  {NewspaperSVG}
              </Link>
              <h2>News</h2>
            </div>
            <p>We are committed to open science and the sharing of our results with the scientific community and general public.</p>
          </div>
      </div>
    </div>
  );
}
