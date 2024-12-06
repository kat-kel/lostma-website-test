import { HashLink } from 'react-router-hash-link';

const repositoryLink = <HashLink to='/corpus/recordtypes#108'><code>repository</code></HashLink>;
const documentLink = <HashLink to="/corpus/recordtypes#106"><code>document</code></HashLink>;
const phyDescLink = <HashLink to="/corpus/recordtypes#129"><code>physDesc</code></HashLink>;
const partLink = <HashLink to="/corpus/recordtypes#125"><code>part</code></HashLink>;
const witnessLink = <HashLink to="/corpus/recordtypes#105"><code>witness</code></HashLink>;
const textLink = <HashLink to="/corpus/recordtypes#101"><code>text</code></HashLink>;
const storyLink = <HashLink to="/corpus/recordtypes#103"><code>story</code></HashLink>;
const storyverseLink = <HashLink to="/corpus/recordtypes#102"><code>storyverse</code></HashLink>;
const genreLink = <HashLink to="/corpus/recordtypes#117"><code>genre</code></HashLink>;
const scriptaLink = <HashLink to="/corpus/recordtypes#118"><code>scripta</code></HashLink>;
const footnoteLink = <HashLink to="/corpus/recordtypes#128"><code>footnote</code></HashLink>;

export { repositoryLink, documentLink, phyDescLink, partLink, witnessLink, textLink, storyLink, storyverseLink, genreLink, scriptaLink, footnoteLink };