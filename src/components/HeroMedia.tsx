"use client";

import { useEffect, useRef } from "react";

const HERO_VIDEO_SRC = "/videos/hero.mp4";

type HeroMediaProps = {
  posterSrc: string;
  label: string;
};

export function HeroMedia({ posterSrc, label }: HeroMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const tryPlay = () => {
      void video.play().catch(() => {
        /* Autoplay can be blocked; poster remains visible. */
      });
    };

    const beginBuffering = () => {
      if (video.preload !== "auto") {
        video.preload = "auto";
        video.load();
      }
      tryPlay();
    };

    const scheduleBuffering = () => {
      const run = () => beginBuffering();
      if (typeof window.requestIdleCallback === "function") {
        window.requestIdleCallback(run, { timeout: 600 });
      } else {
        globalThis.setTimeout(run, 0);
      }
    };

    const enableMotion = () => {
      video.setAttribute("autoplay", "");
      scheduleBuffering();
    };

    const disableMotion = () => {
      video.pause();
      video.removeAttribute("autoplay");
    };

    const syncMotionPreference = () => {
      if (media.matches) {
        disableMotion();
        return;
      }
      enableMotion();
    };

    syncMotionPreference();
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);
    media.addEventListener("change", syncMotionPreference);
    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      media.removeEventListener("change", syncMotionPreference);
    };
  }, []);

  return (
    <figure className="hero__figure">
      <video
        ref={videoRef}
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={posterSrc}
        aria-label={label}
        disablePictureInPicture
        disableRemotePlayback
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>
    </figure>
  );
}