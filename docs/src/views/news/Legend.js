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
        <table className='table table-responsive table-bordered'>
            <thead>
                <tr>
                    <th>{<TalkKey />} Talk</th>
                    <th>{<ArticleKey />} Article</th>
                    <th>{<DatasetKey />} Dataset</th>
                    <th>{<ConferenceKey />} Conference</th>
                    <th>{<MeetingKey />} Meeting</th>
                </tr>
            </thead>
        </table>
    );
};

export {ArticleKey, ConferenceKey, DatasetKey, MeetingKey,NewsPostLegend, TalkKey};