function buildLinkedOpenData(val) {
    if (val) {
        return (
            <a
                className="badge badge-success link"
                target="_blank"
                rel="noreferrer noopener"
                href={val}>
                Linked Open Data
            </a>
        );
    }
    else {
        return (
            <span className="badge badge-fail">Linked Open Data</span>
        );
    }
}

export default buildLinkedOpenData;