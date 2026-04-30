"use client";

import { useState } from "react";
import Image from "next/image";

type CarouselImage = string | React.ReactNode;

const CAROUSEL_WIDTH = 800;

export default function PhotoCarousel({ images }: { images: CarouselImage[] }) {
  const [index, setIndex] = useState(0);
  const [showFull, setShowFull] = useState(false);

  if (!images || images.length === 0) return <div>Geen foto's beschikbaar.</div>;

  const goPrev = () => setIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
  const goNext = () => setIndex(prev => prev === images.length - 1 ? 0 : prev + 1);

  const renderImage = (img: CarouselImage, mode: "preview" | "full") => {
    if (mode === "preview") {
      return (
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            borderRadius: 8,
            overflow: "hidden",
            background: "#eaeaea"
          }}
        >
          {typeof img === "string" ? (
            <Image
              src={img}
              alt=""
              fill
              style={{
                objectFit: "cover",          
                objectPosition: "center",    
                background: "#eaeaea"
              }}
              sizes="(max-width: 750px) 100vw, 720px"
            />
          ) : (
            img
          )}
        </div>
      );
    }
    if (typeof img === "string") {
      // Fullscreen overlay
      return (
        <img
          src={img}
          alt=""
          style={{
            maxWidth: "90vw",
            maxHeight: "90vh",
            borderRadius: 16,
            boxShadow: "0 4px 30px #0008"
          }}
          onClick={e => e.stopPropagation()}
        />
      );
    }
    return img;
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          width: CAROUSEL_WIDTH,
          maxWidth: "100%",
          marginBottom: 14,
          borderRadius: 8,
          overflow: "hidden"
        }}
      >
        <div
          style={{
            width: "100%",
            aspectRatio: "198/200",    
            position: "relative",
            cursor: "pointer",
            background: "#f5f5f5"
          }}
          onClick={() => setShowFull(true)}
          title="Klik om de originele foto te bekijken"
        >
          {renderImage(images[index], "preview")}
        </div>
        {/* Pijltjes */}
        <button
          onClick={goPrev}
          aria-label="Vorige"
          style={{
            position: "absolute",
            top: "50%",
            left: 6,
            transform: "translateY(-50%)",
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: "50%",
            width: 28,
            height: 28,
            fontSize: 18,
            cursor: "pointer",
            boxShadow: "0 1px 6px #0001"
          }}>‹</button>
        <button
          onClick={goNext}
          aria-label="Volgende"
          style={{
            position: "absolute",
            top: "50%",
            right: 6,
            transform: "translateY(-50%)",
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: "50%",
            width: 28,
            height: 28,
            fontSize: 18,
            cursor: "pointer",
            boxShadow: "0 1px 6px #0001"
          }}>›</button>

        {/* Circles navigatie */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 6,
          position: "absolute",
          bottom: 8,
          left: 0,
          width: "100%"
        }}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: i === index ? "#222" : "#ccc",
                border: "none",
                cursor: "pointer",
                padding: 0
              }}
              aria-label={`Foto ${i + 1}`}
            />
          ))}
        </div>
      </div>
      {/* Overlay voor volledig formaat */}
      {showFull && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          onClick={() => setShowFull(false)}
        >
          {/* Sluitknop */}
          <button
            onClick={() => setShowFull(false)}
            style={{
              position: "absolute",
              top: 24,
              right: 32,
              zIndex: 10000,
              background: "#fff",
              border: "none",
              borderRadius: "50%",
              width: 40,
              height: 40,
              fontSize: 24,
              cursor: "pointer",
              boxShadow: "0 2px 10px #0004"
            }}
            aria-label="Sluit"
          >✕</button>
          {/* Originele afbeelding */}
          {renderImage(images[index], "full")}
        </div>
      )}
    </>
  );
}

export function BlurredImageWithLabel({ src, label }: { src: string, label: string }) {
  return (
    <>
      <img
        src={src}
        alt={label}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          aspectRatio: "4/5",
          objectFit: "cover",
          filter: "blur(2px) brightness(0.9)",
          display: "block",
        }}
      />
      <span
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "2rem",
          background: "rgba(0,0,0,0.3)",
          padding: "0.3em 1.2em",
          borderRadius: 10,
          letterSpacing: 2,
          fontFamily: "inherit",
          pointerEvents: "none"
        }}
      >{label}</span>
    </>
  );
}