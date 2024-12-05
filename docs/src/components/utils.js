const fieldToggle = (state) => {
    if (state) {
        return (<span>Hide</span>)
    }
    else {
        return (<span>Show</span>)
    }
}


function MainPage(Content) {
    return (
        <section className="py-3 py-md-5">
            <div className="container">
                <div className="row justify-content-xl-center">
                    <div className="col-12 col-xl-11">
                        <Content />
                    </div>
                </div>
            </div>
        </section>
    );
}

export { MainPage, fieldToggle }