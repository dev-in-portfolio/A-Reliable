"use client"

import { useState, useRef, useEffect } from "react"

interface VideoItem {
  id: string
  src: string
  title: string
  description: string
  duration: string
  tag: string
}

const videoPlaylist: VideoItem[] = [
  {
    id: "fleet-motion",
    src: "/assets/media-originals/1030658424_1782848330626927.mp4",
    title: "Fleet in Motion",
    description: "Precision highway transport and cargo safety on nationwide routes, demonstrating our focus on road safety and timing.",
    duration: "0:15",
    tag: "On the Road"
  },
  {
    id: "charlotte-dispatch",
    src: "/assets/media-originals/116599418_1782848490588070.mp4",
    title: "Charlotte Dispatch Operations",
    description: "Preparation, safety inspections, and departure from our Charlotte, North Carolina hub to service commercial cargo routes.",
    duration: "0:15",
    tag: "Base Operations"
  },
  {
    id: "safety-handling",
    src: "/assets/media-originals/127677300_1782848524108806.mp4",
    title: "Safe Cargo Handling",
    description: "Precision yard maneuvering and liftgate operations, ensuring cargo is loaded, secured, and unloaded without damage.",
    duration: "0:15",
    tag: "Handling & Safety"
  }
]

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState<VideoItem>(videoPlaylist[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      if (isPlaying) {
        videoRef.current.play().catch(() => setIsPlaying(false))
      }
    }
  }, [activeVideo])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false))
      }
    }
  }

  return (
    <div className="glass-card rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Main Player Area */}
        <div className="lg:col-span-8 relative bg-navy-950 aspect-video flex items-center justify-center group">
          <video
            ref={videoRef}
            src={activeVideo.src}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            loop
            muted
            playsInline
            onClick={togglePlay}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          
          {/* Custom Overlay Controls */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-navy-950/20 pointer-events-none" />
          
          {/* Play/Pause Button Overlay */}
          <button
            onClick={togglePlay}
            className="absolute h-16 w-16 rounded-full glass-container border-white/20 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-2xl z-10"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="h-6 w-6 fill-current ml-1" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
              </svg>
            )}
          </button>

          {/* Active Video Title Bar */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between pointer-events-none text-white z-10">
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-400">
                {activeVideo.tag}
              </span>
              <p className="text-base font-bold font-heading tracking-wide">
                {activeVideo.title}
              </p>
            </div>
            <span className="text-xs bg-navy-900/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 font-mono">
              {activeVideo.duration}
            </span>
          </div>
        </div>

        {/* Playlist Selection Area */}
        <div className="lg:col-span-4 bg-navy-900/40 border-t lg:border-t-0 lg:border-l border-white/5 flex flex-col justify-between">
          <div className="p-6 border-b border-white/5">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest font-heading">
              Operations Media
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Select a video clip below to preview our fleet operations.
            </p>
          </div>

          <div className="divide-y divide-white/5 overflow-y-auto max-h-[300px] lg:max-h-none flex-grow">
            {videoPlaylist.map((video) => {
              const isActive = video.id === activeVideo.id
              return (
                <button
                  key={video.id}
                  onClick={() => {
                    setActiveVideo(video)
                    setIsPlaying(true)
                  }}
                  className={`w-full text-left p-5 flex items-start gap-4 transition-all duration-300 hover:bg-white/5 ${
                    isActive ? "bg-brand-500/10 border-l-2 border-brand-500" : ""
                  }`}
                >
                  <div className="flex-grow space-y-1">
                    <div className="flex items-center justify-between">
                      <span className={`text-[9px] font-bold uppercase tracking-wider ${isActive ? "text-brand-400" : "text-gray-500"}`}>
                        {video.tag}
                      </span>
                      <span className="text-[10px] text-gray-500 font-mono">{video.duration}</span>
                    </div>
                    <h4 className="text-sm font-bold text-white font-heading">{video.title}</h4>
                    <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">{video.description}</p>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="p-6 bg-navy-900/80 border-t border-white/5">
            <p className="text-xs text-brand-300 font-semibold leading-relaxed">
              Active Selection Details:
            </p>
            <p className="text-[11px] text-gray-400 mt-1 leading-normal">
              {activeVideo.description}
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
