import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url = 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8' }) => {
  return (
    <ReactPlayer
      url={url}
      width='100%'
      height='100%'
      controls
    />
  );
}

export default VideoPlayer;