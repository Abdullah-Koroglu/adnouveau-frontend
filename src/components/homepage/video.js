
"use client";
import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";

const VideoProgress = ({active, videoList, progress}) => {
  console.log(progress);
  return <div className="progress-container">
    {videoList.map((video, index) => 
      <div key={video} className="single-progress-container">
        <div 
          className={`progress ${active === index ? 'active' : ''} ${active < index ? 'passed' : ''}`}
          style={{width: `${active === index ? progress: active < index ? 0 : 100}%`}}
        >
        </div>
      </div>
    )}
    
  </div>
}

const video = ({ video }) => {
  const [videoIndex, setVideoIndex] = useState(0)
  const [videoProgress, setVideoProgress] = useState(0)
  let videosrc = ["/videos/zikir_a93440e1a9.mov", "/videos/isikla_oynayan.mp4"];

  const videoRef = useRef(null)

  const playNext = () => {
    videoIndex + 1 === videosrc.length ?
    setVideoIndex(0) :
    setVideoIndex(videoIndex + 1)

    setVideoProgress(0)
  }

  const handleProgress = (e) => {
    console.log(e);
    setVideoProgress(e.played * 100);
  };


  return (
    <div className='w-96 relative'>
      <div>
        <ReactPlayer
          onEnded={playNext}
          onProgress={handleProgress}
          url={videosrc[videoIndex]}
          width="100%"
          height="20rem"
          controls={false}
          muted={true}
          playing={true}
          ref={videoRef}
        />
      </div>
      <div className="flex z-10 mt-[-90%]">
        <VideoProgress active={videoIndex} videoList={videosrc} progress={videoProgress}/>
      </div>
    </div>
  )
}

export default video