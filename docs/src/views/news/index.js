import './news.css';

import React from 'react';

import { NewsPostLegend } from './components/Legend';
import Post from './components/Post';
import { PostData } from './components/fetchData';


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
                    {PostData.map(p => (Post(p)))}
                </div>
            </div>
        </>
    );
};