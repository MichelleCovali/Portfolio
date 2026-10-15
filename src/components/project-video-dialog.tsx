"use client";

import { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectVideoDialog({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const player = useRef<HTMLVideoElement>(null);
  const [clip, setClip] = useState(0);
  const [failed, setFailed] = useState(false);
  const videos = project.videos ?? [];
  const selected = videos[clip];

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, []);

  if (!selected) return null;

  return (
    <dialog
      ref={dialog}
      className="video-dialog"
      aria-labelledby="video-dialog-title"
      aria-describedby="video-dialog-description"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) dialog.current?.close();
      }}
    >
      <div className="video-dialog-content">
        <div className="video-dialog-heading">
          <div>
            <p className="eyebrow">PROJECT DEMONSTRATION</p>
            <h2 id="video-dialog-title">{project.title}</h2>
          </div>
          <button
            className="video-close"
            aria-label="Close video viewer"
            autoFocus
            onClick={() => dialog.current?.close()}
          >
            <X size={22} />
          </button>
        </div>
        <p id="video-dialog-description" className="video-dialog-description">
          Original demonstration from my university project portfolio.
        </p>
        <div className="video-player-frame">
          <video
            ref={player}
            key={selected.src}
            src={selected.src}
            poster={selected.poster}
            controls
            playsInline
            preload="metadata"
            aria-label={`${project.title}: ${selected.title}`}
            onError={() => setFailed(true)}
          >
            Your browser does not support embedded video.{" "}
            <a href={selected.src}>Open the video</a>.
          </video>
        </div>
        {failed && (
          <p className="video-error" role="alert">
            This video could not be played.{" "}
            <a href={selected.src} target="_blank" rel="noreferrer">
              Open the video directly
            </a>
            .
          </p>
        )}
        <div className="video-dialog-bottom">
          <p className="video-current-label">
            {selected.title}
            <span>
              {clip + 1} / {videos.length}
            </span>
          </p>
          {videos.length > 1 && (
            <div
              className="video-clip-list"
              aria-label="Select a demonstration"
            >
              {videos.map((video, index) => (
                <button
                  key={video.src}
                  aria-pressed={index === clip}
                  onClick={() => {
                    player.current?.pause();
                    setFailed(false);
                    setClip(index);
                  }}
                >
                  <Play size={13} />
                  {video.title}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
}
