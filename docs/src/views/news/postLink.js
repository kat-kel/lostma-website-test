const PostLink = (link) => {
    if (link) {
        return <a href={link} target="_blank" rel='noreferrer' className="btn btn-primary">{link}</a>;
    }
};

export default PostLink;