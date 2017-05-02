"use strict";
import React from 'react';

const VideoListItem = props => (
    <li>{props.video.snippet.title}</li>
);

export default VideoListItem;