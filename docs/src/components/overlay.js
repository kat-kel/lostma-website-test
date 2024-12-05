import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React  from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function OverlayIcon({ faIcon, text }) {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {text}
        </Tooltip>
    );

    return (
        <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
        >
            <FontAwesomeIcon icon={faIcon} />
        </OverlayTrigger>
    );
}


export {OverlayIcon};