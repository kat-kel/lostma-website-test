import React from 'react';

const FrontMatter = () => {
    return (
        <>
            <h2 class="mb-3">Keeping up with LostMa</h2>
            <p class="mb-5">
                Talks, publications, software updates, etc.
            </p>
        </>
    )
}

const Content = () => {
    return (
        <div>
            Post
        </div>
    )
}

class People extends React.Component {
    render() {
        return (
            <section className="py-3 py-md-5">
                <div className="container">
                    <div class="row justify-content-xl-center">
                        <div class="col-12 col-xl-11">
                            <FrontMatter />
                            <Content />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default People;
