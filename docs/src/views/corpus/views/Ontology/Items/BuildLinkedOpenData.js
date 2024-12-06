function BuildLinkedOpenData(val) {
    let TextVal = "Linked Ref"
    if (val) {
        return (
            <>
                <a
                    className="badge badge-success link"
                    target="_blank"
                    rel="noreferrer noopener"
                    href={val}>
                    {TextVal}
                </a>
            </>
        );
    }
    else {
        return (
            <span className="badge badge-fail">{TextVal}</span>
        );
    }
}

export default BuildLinkedOpenData;