function PersonCardImage(name, imageSource) {
    if (imageSource) {
        return (
            <img
                alt={name}
                src={imageSource}
            />
        )
    }
    else {
        return <></>
    }
}

function PersonCard(name, role, imageSource) {
    return (
        <div className="col-sm-6 mb-3 d-flex align-items-stretch">
            <div className="card person">
                {PersonCardImage(name, imageSource)}
                <div className="card-body text-center px-4 py-4">
                    <h5 className="fw-bold">{name}</h5>
                    <div className="text-muted">
                        {role}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonCard;