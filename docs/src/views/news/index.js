import './news.css';

import React from 'react';

import posts from '../../data/feed.json';
import { NewsPostLegend } from './components/Legend';
import Post from './components/Post';


export default function People() {
    return (
        <>
            <h2 className="mb-3">Keeping up with LostMa</h2>
            <p className="mb-5">
                Talks, publications, dataset releases, etc.
            </p>
            <div>
                <NewsPostLegend />
                <div className='news-feed'>
                    {posts.map(p => (Post(p)))}
                </div>
            </div>
        </>
    );
};