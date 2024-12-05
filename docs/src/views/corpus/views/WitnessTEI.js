import React from 'react';

import { MainPage } from '../../../components/utils';


const Content = () => {
    return (
        <div id="TEIPage">
            <h3>Under Construction</h3>
            <p>This page will provide documentation about and a link to the published dataset of exported text traditions.</p>
        </div>
    );
};

class WitnessTEI extends React.Component {
    render() {
        return (MainPage(Content));
    }
}
export default WitnessTEI;
