import './VideoItem.css';
import React from 'react';

const VideoItem = props => {

    const image = props.video.snippet.thumbnails.medium.url;
    const title = props.video.snippet.title;

    return (
        <div onClick={() => props.onVideoSelect(props.video)} className="video-item item">
            <img className="ui image" src={image}></img>
            <div className="content">
                <div className="header">
                    {title}
                </div>
            </div>
        </div>
    );    
}
export default VideoItem;