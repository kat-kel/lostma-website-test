export default function PostBody(body) {
    return (
        <div dangerouslySetInnerHTML={{ __html: body }}></div>
    );
};
