
import React from 'react';
// import VideoItem from './VideoItem';

const VideoList = props => (

    <ul>
        {props.videos.map(video => {
            
            console.log(video)
        })}
    </ul>
);
export default VideoList;