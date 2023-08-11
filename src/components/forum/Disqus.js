import React from 'react';
import './style.css';
import Disqus from 'disqus-react';

export default function Forum() {
    const disqusShortname = 'gereja-tangguh-bencana';
    const disqusConfig = {
        url: 'http://localhost:3000/',
        identifier: 'gereja-tangguh-bencana',
        title: 'Forum Diskusi',
        language: 'id',
    };

    return (
        <div className="forum-page content-page">
            <div className="container-page">
                <p className="title ">Forum Diskusi Gereja Tangguh Bencana</p>
                <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </div>
        </div>
    );
};