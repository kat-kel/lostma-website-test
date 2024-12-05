import { faCalendar, faDatabase, faHandshake,faMicrophone, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TalkKey = () => {
    return (<FontAwesomeIcon icon={faMicrophone} alt="public-talk" />);
};

const ArticleKey = () => {
    return (<FontAwesomeIcon icon={faNewspaper} alt="article-publication" />);
};

const DatasetKey = () => {
    return (<FontAwesomeIcon icon={faDatabase} alt="dataset-publication" />);
};

const ConferenceKey = () => {
    return (<FontAwesomeIcon icon={faCalendar} alt="public-conference" />);
};

const MeetingKey = () => {
    return (<FontAwesomeIcon icon={faHandshake} alt="stakeholders-meeting" />);
};

const NewsPostLegend = () => {
    return (
        <div>
            <ul className='horizontal-list'>
                <li key="talk-key">| Talk {<TalkKey />}</li>
                <li>| Article {<ArticleKey />}</li>
                <li>| Dataset {<DatasetKey />}</li>
                <li>| Conference {<ConferenceKey />}</li>
                <li>| Meeting {<MeetingKey />}</li>
            </ul>
        </div>
    );
};

export {ArticleKey, ConferenceKey, DatasetKey, MeetingKey,NewsPostLegend, TalkKey};