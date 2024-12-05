const PostBody = (body) => {
    return (
        <div dangerouslySetInnerHTML={{__html: body }}></div>
    );
};

export default PostBody;
