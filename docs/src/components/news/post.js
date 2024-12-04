import { TalkKey, ArticleKey, DatasetKey, ConferenceKey, MeetingKey } from "./legend";


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
        <div class="card post">
            <div class="card-body">
                <div class='row'>
                    <div class='col-md-10'>
                        <h5 class="card-title">{PostKey(post.key)} {post.title}</h5>
                    </div>
                    <div class='col-md-2'>
                        <h6 class='text-muted'>{post.date}</h6>
                    </div>
                </div>
                <p class="card-text">{PostBody(post.body)}</p>
                {PostLink(post.link)}
            </div>
        </div>
    );
}

export default Post;