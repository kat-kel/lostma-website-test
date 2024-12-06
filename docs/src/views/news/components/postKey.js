import { ArticleKey, ConferenceKey, DatasetKey, MeetingKey, TalkKey } from './Legend';


export default function PostKey(key) {
    if (key === 'article') {
        return (<ArticleKey />);
    }
    else if (key === 'talk') {
        return (<TalkKey />);
    }
    else if (key === 'dataset') {
        return (<DatasetKey />);
    }
    else if (key === 'conference') {
        return (<ConferenceKey />);
    }
    else if (key === 'meeting') {
        return (<MeetingKey />);
    }
    else {
        return <span className="badge badge-fail">{key}</span>;
    };
};
