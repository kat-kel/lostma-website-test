import React from 'react';
import logo from './images/LOGO_ERC-FLAG_EU_.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faBluesky } from '@fortawesome/free-brands-svg-icons'


class Footer extends React.Component {
    render() {
    return (
        <div className="container">
            <br/>
            <hr/>
            <div className="row">
                <div className="col">
                    <div className='row'>
                        <div className='col-sm-2'><img src={logo} alt='ERC European Union logos'/></div>
                        <div className='col-sm-8'>
                            <p>Funded by the European Research Council</p>
                            <p>
                            Horizon Europe ERC Grant number: <a target="_blank" rel="noreferrer" href="https://cordis.europa.eu/project/id/101117408">101117408</a>
                            </p>
                            <p>
                            Views and opinions expressed are however those of the author(s) only and not necessarily reflect those of the European Union or the European Research Council. Neither the European Union nor the granting authority can be held responsible for them.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <h5>Follow Us</h5>
                    <ul className='list-group'>
                        <li className='list-group-item'>
                            <FontAwesomeIcon icon={faLinkedin} />
                            <span> </span>
                            <span>LinkedIn</span>
                        </li>
                        <li className='list-group-item'>
                            <FontAwesomeIcon icon={faBluesky} />
                            <span> </span>
                            <span>BlueSky</span>
                        </li>
                        <li className='list-group-item'>
                            <a target="_blank" rel="noreferrer" href="https://www.chartes.psl.eu/gazette-chartiste/actualites">
                                <FontAwesomeIcon icon={faSchool} />
                            </a>
                            <span> </span>
                            <span>École nationale des chartes</span>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-6">
                    <p>&copy; 2024 lostma-erc | All rights reserved.</p>
                </div>
            </div>
        </div>
    )
    }
}

export default Footer;