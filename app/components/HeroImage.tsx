"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type HeroImageProps = {
  src: string;
  alt?: string;
  className?: string;
};

export default function HeroImage({
  src,
  alt = "",
  className = "",
}: HeroImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const timerRef = useRef<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const revealImage = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }

    timerRef.current = window.setTimeout(() => {
      setIsLoaded(true);
    }, 50);
  }, []);

  useEffect(() => {
    const image = imageRef.current;

    if (image?.complete && image.naturalWidth > 0) {
      revealImage();
    }

    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, [src, revealImage]);

  return (
    <img
      ref={imageRef}
      src={src}
      alt={alt}
      className={`hero-fade-image ${className} ${
        isLoaded ? "is-loaded" : ""
      }`}
      loading="eager"
      fetchPriority="high"
      decoding="async"
      onLoad={revealImage}
    />
  );
}