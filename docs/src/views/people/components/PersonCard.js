function PersonCardImage(name, imageSource) {
    if (imageSource) {
        return (
            <img
                alt={name}
                src={imageSource}
            />
        );
    }
    else {
        return <></>;
    }
}

function PersonCard(Item) {
    let Name = Item.forename.concat(" ", Item.surname)
    return (
        <div className="col-sm-6 mb-3 d-flex align-items-stretch">
            <div className="card person">
                {PersonCardImage(Name, Item.image)}
                <div className="card-body text-center px-4 py-4">
                    <h5 className="fw-bold">{Name}</h5>
                    <h6 className="text-muted">{Item.role}</h6>
                </div>
            </div>
        </div>
    );
}

export default PersonCard;