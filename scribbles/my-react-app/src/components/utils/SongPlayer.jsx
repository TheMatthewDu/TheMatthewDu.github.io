
import React, { useEffect, useRef, useState } from "react";
import "./SongPlayer.css";

function Icon({ name }) {
  const paths = {
    play: <path d="M8 5v14l11-7-11-7Z" fill="currentColor" stroke="none" />,
    pause: (
      <>
        <path d="M8 5h3v14H8z" fill="currentColor" stroke="none" />
        <path d="M15 5h3v14h-3z" fill="currentColor" stroke="none" />
      </>
    ),
    previous: <path d="M19 5 9 12l10 7V5ZM5 5v14" />,
    next: <path d="m5 5 10 7-10 7V5Zm14 0v14" />,
    volume: (
      <>
        <path d="M11 5 6 9H3v6h3l5 4V5Z" />
        <path d="M15 9a5 5 0 0 1 0 6" />
        <path d="M17 5a9 9 0 0 1 0 14" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";

  const minutes = Math.floor(seconds / 60);
  const remaining = Math.floor(seconds % 60);

  return `${minutes}:${String(remaining).padStart(2, "0")}`;
}

export default function SongPlayer({ tracks = [] }) {
  const audioRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [error, setError] = useState("");

  const activeTrack = tracks[activeIndex];

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio || !activeTrack?.src) return;

    audio.pause();
    audio.src = activeTrack.src;
    audio.load();

    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setError("");
  }, [activeIndex, activeTrack?.src]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  if (!tracks.length) {
    return <div className="song-player-empty">No tracks added yet.</div>;
  }

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        setError("Unable to play this audio file. Check its source.");
      }
    } else {
      audio.pause();
    }
  };

  const selectTrack = (index) => {
    setActiveIndex(index);
  };

  const nextTrack = () => {
    setActiveIndex((index) => (index + 1) % tracks.length);
  };

  const previousTrack = () => {
    setActiveIndex((index) => (index - 1 + tracks.length) % tracks.length);
  };

  const seek = (event) => {
    const value = Number(event.target.value);

    if (audioRef.current) {
      audioRef.current.currentTime = value;
      setCurrentTime(value);
    }
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <section className="song-player">
      <audio
        ref={audioRef}
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={(event) =>
          setCurrentTime(event.currentTarget.currentTime)
        }
        onLoadedMetadata={(event) =>
          setDuration(
            Number.isFinite(event.currentTarget.duration)
              ? event.currentTarget.duration
              : 0
          )
        }
        onEnded={() => setIsPlaying(false)}
        onError={() => setError("This audio file could not be loaded.")}
      />

      {/* Currently playing section */}
      <div className="song-player-main">
        <div className="song-player-heading">
          <span className="song-player-eyebrow">
            <span className="status-dot" />
            NOW PLAYING
          </span>
          <span className="song-player-index">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(tracks.length).padStart(2, "0")}
          </span>
        </div>

        <div className="song-player-artwork">
          {activeTrack.cover ? (
            <img src={activeTrack.cover} alt="" />
          ) : (
            <div className="artwork-placeholder">
              <span>♪</span>
            </div>
          )}
        </div>

        <div className="song-player-info">
          <h2>{activeTrack.title || "Untitled track"}</h2>
          {activeTrack.artist && (
            <p className="song-player-artist">{activeTrack.artist}</p>
          )}
          {activeTrack.description && (
            <p className="song-player-description">
              {activeTrack.description}
            </p>
          )}
        </div>

        {/* Progress bar */}
        <div className="song-player-timeline">
          <input
            className="song-player-progress"
            type="range"
            min="0"
            max={duration || 0}
            step="0.1"
            value={Math.min(currentTime, duration || 0)}
            onChange={seek}
            disabled={!duration}
            aria-label="Seek through track"
            style={{ "--progress": `${progress}%` }}
          />

          <div className="song-player-times">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Playback controls */}
        <div className="song-player-controls">
          <button
            className="control-button secondary"
            onClick={previousTrack}
            aria-label="Previous track"
          >
            <Icon name="previous" />
          </button>

          <button
            className="control-button play-button"
            onClick={togglePlayback}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            <Icon name={isPlaying ? "pause" : "play"} />
          </button>

          <button
            className="control-button secondary"
            onClick={nextTrack}
            aria-label="Next track"
          >
            <Icon name="next" />
          </button>
        </div>

        <div className="song-player-volume">
          <Icon name="volume" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(event) => setVolume(Number(event.target.value))}
            aria-label="Volume"
          />
        </div>

        {error && <p className="song-player-error">{error}</p>}
      </div>

      {/* Playlist section */}
      <div className="song-player-playlist">
        <div className="playlist-heading">
          <div>
            <span className="song-player-eyebrow">YOUR COLLECTION</span>
            <h3>Tracks</h3>
          </div>
          <span className="track-count">
            {tracks.length} {tracks.length === 1 ? "TRACK" : "TRACKS"}
          </span>
        </div>

        <div className="playlist-items">
          {tracks.map((track, index) => (
            <button
              type="button"
              className={`playlist-track ${
                index === activeIndex ? "active" : ""
              }`}
              key={`${track.src}-${index}`}
              onClick={() => selectTrack(index)}
              aria-current={index === activeIndex ? "true" : undefined}
            >
              <span className="playlist-track-number">
                {index === activeIndex && isPlaying
                  ? "♫"
                  : String(index + 1).padStart(2, "0")}
              </span>

              <span className="playlist-track-info">
                <span className="playlist-track-title">
                  {track.title || `Track ${index + 1}`}
                </span>
                <span className="playlist-track-description">
                  {track.artist || track.description || "Audio"}
                </span>
              </span>

              <span className="playlist-track-indicator">
                {index === activeIndex ? "●" : "↗"}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
    