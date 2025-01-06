'use client';
import { useState } from "react";
import Navbar from "../components/Navbar/navbar";
import { CorpusLinks } from "../components/Navbar/Links";
import { QuestionMarkSVG as What, MailSVG as How, ClockSVG as When, GlobeSVG as Where } from "@/public/svgs";

export default function Corpus() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
          setIsOpen(!isOpen);
      };
  
  return (
    <div>
      <h1>What stories do we consider?</h1>
      <div className="container">
        <p>A big milestone of the LostMa project is to assemble and publish a multilingual corpus of textual traditions. A narrative&apos;s inclusion in the corpus is defined by the following criteria:</p>
        <div className="grid md:grid-cols-4 pt-4 md:pt-0 gap-8 px-8">
          <div className="container">
            <div className="flex gap-4">
              {What}
              <h2>What</h2>
            </div>
            <p>Describes a hero or epic adventure.</p>
          </div>
          <div className="container">
            <div className="flex gap-4">
              {How}
              <h2>How</h2>
            </div>
            <p>First circulated in manuscript form.</p>
          </div>
          <div className="container">
            <div className="flex gap-4">
              {When}
              <h2>When</h2>
            </div>
            <p>First copies were written before the printing press.</p>
          </div>
          <div className="container">
            <div className="flex gap-4">
              {Where}
              <h2>Where</h2>
            </div>
            <p>Circulated within Western Europe.</p>
          </div>
        </div>
      </div>
      <nav key="corpus-navbar" className="bg-secondary dark:bg-secondary-dark rounded">
        <Navbar links={CorpusLinks} />
      </nav>
      <div className="container mt-4">
        <h2>In-progress stats</h2>
        <p className="px-2">
          As our specialist contributors assemble the corpus, you can observe some key indicators about its evolving composition.
        </p>
{/* 
        <button 
          id="developer-popup-button"
          type="button" 
          className="
              relative rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
          " 
          aria-controls="developer-popup" 
          aria-expanded="false"
          aria-label="developer-popup"
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          Are you a developer? Want to know how we&apos;re doing this in-progress observability?
        </button>
        {isOpen && (
        <div className="rounded-xl ml-4 py-1 px-3 bg-info text-[14px] text-gray-100">
          <p>
            You&apos;re currently looking at a static site generated with NextJS and hosted by GitHub Pages.
            What you&apos;re not seeing is the LostMa corpus, which is being developed in real time via an OLTP relational database on a different server / platform, specifically Heurist.
          </p>
          <p className="my-2">
            On GitHub, a continuous integration / continuous deployment (CI/CD) periodically performs a process.
            First, the workflow extracts the current data from our Heurist server; 
            then, it transforms the relational data into flat information; 
            finally, it loads the cleaned data into a data store that this static site&apos;s JavaScript then parses--without needing to communicate with the Heurist server.
          </p>
          <p>
            Furthermore, if we want to stop updating the statistics on this page for some reason, we can halt the workflow whilst we continue developing the corpus on the OLTP database. 
            When we&apos;re ready to share the most up-to-date data again, we can restart the CI workflow and update the data store.
          </p>
          <p className="my-2">
            Check out the source code on our <a className="dark:text-blue-800" target="_blank" rel="noreferrer" href="https://github.com/kat-kel/lostma-website-test">open-source GitHub project</a> to learn more.
          </p>
        </div>
        )
      } */}
      <div key="dashboard" className="text-center">
        <p><em>Dashboard is currently under construction...</em></p>
      </div>
      </div>
    </div>
  );
}