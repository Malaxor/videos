
import React from 'react';

const VideoItem = props => {

    const image = props.video.snippet.thumbnails.medium.url;
    
    return (
        <div>
            <img src={image}></img>
            {props.video.snippet.title}
        </div>
    )    
}
export default VideoItem;