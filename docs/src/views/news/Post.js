import { TalkKey, ArticleKey, DatasetKey, ConferenceKey, MeetingKey } from "./Legend";


const PostKey = (key) => {
    if (key === 'article') {
        return (<ArticleKey />)
    }
    else if (key === 'talk') {
        return (<TalkKey />)
    }
    else if (key === 'dataset') {
        return (<DatasetKey />)
    }
    else if (key === 'conference') {
        return (<ConferenceKey />)
    }
    else if (key === 'meeting') {
        return (<MeetingKey />)
    }
    else {
        return <span className="badge badge-fail">{key}</span>
    };
};

const PostLink = (link) => {
    if (link) {
        return <a href={link} target="_blank" rel='noreferrer' className="btn btn-primary">{link}</a>
    }
}

const PostBody = (body) => {
    return (
        <div dangerouslySetInnerHTML={{__html: body }}></div>
    )
}

function Post(post) {
    return (
        <div className="card post">
            <div className="card-body">
                <div className='row'>
                    <div className='col-md-10'>
                        <h5 className="card-title">{PostKey(post.key)} {post.title}</h5>
                    </div>
                    <div className='col-md-2'>
                        <h6 className='text-muted'>{post.date}</h6>
                    </div>
                </div>
                <p className="card-text">{PostBody(post.body)}</p>
                {PostLink(post.link)}
            </div>
        </div>
    );
}

export default Post;