
"use client";
import Link from "next/link";
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

const Video = () => {
  const [videoIndex, setVideoIndex] = useState(0)
  const [videoProgress, setVideoProgress] = useState(0)
  let videosrc = [
    // "/videos/zikir_a93440e1a9.mov", 
    "/videos/video.mp4"
  ];

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

  // TODO mute tusu gelecek
  // TODO autoplay

  return (
    <Link
      href="/project/production"
      className='w-full h-fit relative rounded-2xl md:max-lg:row-start-0 md:max-lg:row-end-3 md:max-lg:col-start-0 md:max-lg:col-end-3 md:row-span-2 md:col-span-2'
    >
      <div className="flex w-full absolute">
        <VideoProgress active={videoIndex} videoList={videosrc} progress={videoProgress} />
      </div>
      <div className="video-container rounded-2xl overflow-hidden aspect-[4/3] md:aspect-[235/100] bg-red-600">
        <ReactPlayer
          onEnded={playNext}
          onProgress={handleProgress}
          url={videosrc[videoIndex]}
          width="auto"
          height="100%"
          controls={false}
          autoPlay={videosrc.length > 0 ? false : true}
          muted={true}
          playing={true}
          ref={videoRef}
        />
        <div className='text-white text-4xl absolute bottom-4 left-4'>
          Production
        </div>
      </div>
    </Link>
  )
}

export default Video