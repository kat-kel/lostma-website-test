import React from 'react';
import { OverlayIcon } from './components/overlay';
import logo from './images/LOGO_ERC-FLAG_EU_.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faBluesky, faGithub, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faCloud } from '@fortawesome/free-solid-svg-icons';

const TopLeft = () => {
    return (
        <div className="col">
            <div className='row'>
                <div className='col-sm-2'><img src={logo} alt='ERC European Union logos' /></div>
                <div className='col-sm-10'>
                    <p>Funded by the European Research Council</p>
                    <p>
                        Horizon Europe ERC Grant number: <a target="_blank" rel="noreferrer" href="https://doi.org/10.3030/101117408">101117408</a>
                    </p>
                    <p>
                        Views and opinions expressed are however those of the author(s) only and not necessarily reflect those of the European Union or the European Research Council. Neither the European Union nor the granting authority can be held responsible for them.
                    </p>
                </div>
            </div>
        </div>
    )
}

const TopMiddle = () => {
    return (
        <div className="col-md-2">
            <h5>Follow Us</h5>
            <p>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <a target="_blank" rel="noreferrer" href="https://bsky.app/profile/lostma.bsky.social">
                            <FontAwesomeIcon icon={faBluesky} />
                        </a> BlueSky
                    </li>
                    <li className='list-group-item'><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</li>
                    <li className='list-group-item'><FontAwesomeIcon icon={faCloud} /> Zenodo</li>
                </ul>
            </p>
        </div>
    )
}

const UsedTools = ()  => {
    return (
        <span> {<OverlayIcon text={"React App"} faIcon={faReact} />} {<OverlayIcon text={"Boostrap"} faIcon={faBootstrap} />} {<OverlayIcon text={"GitHub Pages"} faIcon={faGithub} />}
        </span>
    )
}

const TopRight = () => {
    return (
        <div className='col-md-3'>
            <h5>Website Credits</h5>
            <p>
                <ul className='list-group'>
                    <li className='list-group-item'>Code Base: <a target="_blank" rel='noreferrer' href='https://github.com/kat-kel/lostma-website-test'>GitHub Repository</a></li>
                    <li className='list-group-item'>Editor: <a target="_blank" rel='noreferrer' href='https://github.com/kat-kel'>Kelly Christensen</a></li>
                    <li className='list-group-item'>Open-Source Tools: {<UsedTools />}</li>
                </ul>
            </p>
        </div>
    )
}

const TopColumns = () => {
    return (
        <>
        <br />
        <hr />
        <div className="row">
            <TopLeft />
            <TopMiddle />
            <TopRight />  
        </div>
        </>
    )
}

const BottomLegal = () => {
    return (
        <>
        <hr />
        <div className="row">
            <div className="col-md-3">
                <p>&copy; 2024 lostma-erc | All rights reserved.</p>
            </div>
            <div className="col-md-6">
                <p>Header image: <em>Romans aurthuriens</em>, Bibliothèque nationale de France, Français 95, folio 209v</p>
            </div>
        </div>
        </>
    )
}

class Footer extends React.Component {
    render() {
        return (
            <footer className='footer mt-auto py-3'>
                <div className="container">
                    <TopColumns />
                    <BottomLegal />
                </div>
            </footer>
        )
    }
}

export default Footer;