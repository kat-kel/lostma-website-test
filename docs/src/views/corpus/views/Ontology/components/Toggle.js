const ShowHideToggle = (state) => {
    if (state) {
        return (<span>Hide</span>);
    }
    else {
        return (<span>Show</span>);
    }
};

export default ShowHideToggle;