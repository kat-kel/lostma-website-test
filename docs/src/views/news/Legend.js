import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone, faNewspaper, faDatabase, faCalendar, faHandshake } from '@fortawesome/free-solid-svg-icons';

const TalkKey = () => {
    return (<FontAwesomeIcon icon={faMicrophone} alt="public-talk" />);
}

const ArticleKey = () => {
    return (<FontAwesomeIcon icon={faNewspaper} alt="article-publication" />);
}

const DatasetKey = () => {
    return (<FontAwesomeIcon icon={faDatabase} alt="dataset-publication" />);
}

const ConferenceKey = () => {
    return (<FontAwesomeIcon icon={faCalendar} alt="public-conference" />);
}

const MeetingKey = () => {
    return (<FontAwesomeIcon icon={faHandshake} alt="stakeholders-meeting" />);
}

const NewsPostLegend = () => {
    return (
        <div>
            <ul className='horizontal-list'>
                <li>| Talk {<TalkKey />}</li>
                <li>| Article {<ArticleKey />}</li>
                <li>| Dataset {<DatasetKey />}</li>
                <li>| Conference {<ConferenceKey />}</li>
                <li>| Meeting {<MeetingKey />}</li>
            </ul>
        </div>
    );
}

export {NewsPostLegend, TalkKey, ArticleKey, DatasetKey, ConferenceKey, MeetingKey};