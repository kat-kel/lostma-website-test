import PostBody from './postBody';
import PostKey from './postKey';
import PostLink from './postLink';


export default function Post(post) {
    return (
        <div className="card post">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">{PostKey(post.key)} {post.title}</h5>
                    <h6 className='text-muted'>{post.date}</h6>
                </div>
                <hr />
                <p className="card-text">{PostBody(post.body)}</p>
                {PostLink(post.link)}
            </div>
        </div>
    );
};