import React from 'react';
import { MainPage } from './components/utils.js';
import { NewsPostLegend } from './components/news/legend.js';
import Post from './components/news/post.js';
import posts from './news_posts/feed.json';

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


function Body() {
    return (
        <div>
        <NewsPostLegend />
        <div className='news-feed'>
            {posts.map(p => (Post(p)))}
        </div>
        </div>
    )
}

const Content = () => {
    return (
        <>
        <FrontMatter />
        <Body />
        </>
    )
}

class People extends React.Component {
    render() {
        return (MainPage(Content));
    }
}
export default People;
