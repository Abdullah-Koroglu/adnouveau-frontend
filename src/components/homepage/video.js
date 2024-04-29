
"use client";
import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";

const VideoProgress = ({ active, videoList, progress }) => {
  return <div className="progress-container">
    {videoList.map((video, index) =>
      <div key={video} className="single-progress-container">
        <div
          className={`progress ${active === index ? 'active' : ''} ${active < index ? 'passed' : ''}`}
          style={{ width: `${active === index ? progress : active < index ? 0 : 100}%` }}
        >
        </div>
      </div>
    )}

  </div>
}

const Video = ({ video }) => {
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
    setVideoProgress(e.played * 100);
  };


  return (
    <div className='w-full h-fit relative rounded-md md:max-lg:row-start-0 md:max-lg:row-end-3 md:max-lg:col-start-0 md:max-lg:col-end-3 md:row-span-2 md:col-span-2'>
      <div className="flex w-full absolute">
        <VideoProgress active={videoIndex} videoList={videosrc} progress={videoProgress} />
      </div>
      <div className="rounded-md overflow-hidden h-56 md:h-96 xl:h-[30rem]">
        <ReactPlayer
          onEnded={playNext}
          onProgress={handleProgress}
          url={videosrc[videoIndex]}
          width="100%"
          height="auto"
          controls={false}
          muted={true}
          playing={true}
          ref={videoRef}
        />
      </div>
    </div>
  )
}

export default Video