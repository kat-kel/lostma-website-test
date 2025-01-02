'use client';
import { useState } from "react";
import Navbar from "../components/Navbar/navbar";
import { CorpusLinks } from "../components/Navbar/Links";


const What = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>

const How = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>

const When = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

const Where = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
</svg>

export default function Corpus() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
          setIsOpen(!isOpen);
      };
  
  return (
    <div>
      <h1>What stories do we consider?</h1>
      <div className="container">
        <p>A big milestone of the LostMa project is to assemble and publish a multilingual corpus of textual traditions. A narrative's inclusion in the corpus is defined by the following criteria:</p>
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
          Are you a developer? Want to know how we're doing this in-progress observability?
        </button>
        {isOpen && (
        <div className="rounded-xl ml-4 py-1 px-3 bg-info text-[14px] text-gray-100">
          <p>
            You're currently looking at a static site generated with NextJS and hosted by GitHub Pages.
            What you're not seeing is the LostMa corpus, which is being developed in real time via an OLTP relational database on a different server / platform, specifically Heurist.
          </p>
          <p className="my-2">
            On GitHub, a continuous integration / continuous deployment (CI/CD) periodically performs a process.
            First, the workflow extracts the current data from our Heurist server; 
            then, it transforms the relational data into flat information; 
            finally, it loads the cleaned data into a data store that this static site's JavaScript then parses--without needing to communicate with the Heurist server.
          </p>
          <p>
            Furthermore, if we want to stop updating the statistics on this page for some reason, we can halt the workflow whilst we continue developing the corpus on the OLTP database. 
            When we're ready to share the most up-to-date data again, we can restart the CI workflow and update the data store.
          </p>
          <p className="my-2">
            Check out the source code on our <a className="dark:text-blue-800" target="_blank" rel="noreferrer" href="https://github.com/kat-kel/lostma-website-test">open-source GitHub project</a> to learn more.
          </p>
        </div>
        )
      }
      <div key="dashboard" className="text-center">
        <p><em>Dashboard is currently under construction...</em></p>
      </div>
      </div>
    </div>
  );
}