import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function Overlay({ label, text }) {
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
            <div>
                {label}
            </div>
        </OverlayTrigger>
    );
}


export default Overlay;