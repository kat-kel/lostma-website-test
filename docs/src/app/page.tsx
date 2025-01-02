import Link from "next/link";

const PEOPLE_SVG = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-8 icon-link">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

const DATABASE_SVG = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-8 icon-link">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
</svg>

const NEWSPAPER_SVG = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-8 icon-link">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
</svg>

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
                  {PEOPLE_SVG}
              </Link>
              <h2>People</h2>
            </div>
            <p>We are a small team with collaborators from around Europe, contributing area expertise on various textual traditions.</p>
          </div>
          {/* Second point */}
          <div className="container">
            <div className="flex gap-2">
              <Link href='/corpus'>
                  {DATABASE_SVG}
              </Link>
              <h2>Corpus</h2>
            </div>
            <p>We are building a multilingual corpus of Medieval literary traditions, focused on epics and knights&apos; tales.</p>
          </div>
          {/* Third point */}
          <div className="container">
            <div className="flex gap-2">
              <Link href='/news'>
                  {NEWSPAPER_SVG}
              </Link>
              <h2>News</h2>
            </div>
            <p>We are committed to open science and the sharing of our results with the scientific community and general public.</p>
          </div>
      </div>
    </div>
  );
}
