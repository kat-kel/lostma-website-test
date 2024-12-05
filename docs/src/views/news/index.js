import './News.css';

import React from 'react';

import { MainPage } from '../../components/utils';
import posts from '../../data/feed.json';
import { NewsPostLegend } from './Legend';
import Post from './Post';


const FrontMatter = () => {
    return (
        <>
            <h2 className="mb-3">Keeping up with LostMa</h2>
            <p className="mb-5">
                Talks, publications, software updates, etc.
            </p>
        </>
    );
};


function Body() {
    return (
        <div>
            <NewsPostLegend />
            <div className='news-feed'>
                {posts.map(p => (Post(p)))}
            </div>
        </div>
    );
}

const Content = () => {
    return (
        <>
            <FrontMatter />
            <Body />
        </>
    );
};

class People extends React.Component {
    render() {
        return (MainPage(Content));
    }
}
export default People;
