
"use client";
import Link from '@/components/TransitionLink';
import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";


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
  const [mute, setMute] = useState(true)
  let videosrc = [
    // "/videos/zikir_a93440e1a9.mov", 
    "/videos/video.mp4"
  ];
  const muteStyle = { color: 'white', fontSize: '1.5rem' }

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
    <div id="page-element-2" className="w-full h-fit  relative rounded-2xl md:max-lg:row-start-0 md:max-lg:row-end-3 md:max-lg:col-start-0 md:max-lg:col-end-3 md:row-span-2 md:col-span-2 ">
      <Link
        href="/project/production"
        className=''
      >
        <div className="flex w-full absolute px-4 mt-2 md:mt-4">
          <VideoProgress active={videoIndex} videoList={videosrc} progress={videoProgress} />
        </div>
        <div className="video-container rounded-2xl overflow-hidden aspect-[4/3] md:aspect-[235/100] flex items-center justify-center">
          <ReactPlayer
            onEnded={playNext}
            onProgress={handleProgress}
            url={videosrc[videoIndex]}
            width='auto'
            height="100%"
            controls={false}
            loop={videosrc.length > 0 ? true : false}
            muted={mute}
            playing={true}
            playsinline={true}
            ref={videoRef}
          />
          <p className='text-white font-medium text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl mb-0 absolute bottom-4 left-4 md:bottom-8 md:left-8'>
            Production
          </p>
        </div>
      </Link>
      <div onClick={(e) => {
        e.preventDefault();
        setMute(!mute)
      }} className='text-white text-4xl absolute top-8 md:top-12 right-8'>
        {!mute ? <FaVolumeUp style={muteStyle} /> : <FaVolumeMute style={muteStyle} />}
      </div>
    </div>
  )
}

export default Video