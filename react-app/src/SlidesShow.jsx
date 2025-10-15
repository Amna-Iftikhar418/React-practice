
import { useState, useEffect, useRef } from "react";

export default function SmoothSlideshow() {
  const images = [ "/shoe3.png","/shoe5.avif", "/shoe8.avif"];
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
    resetTimer();
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    resetTimer();
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div style={{ position: "relative", maxWidth: "100vw", overflow: "hidden" }}>
      {/* Slides */}
      <div
        style={{
          display: "flex",
          transition: "transform 0.8s ease-in-out",
          transform: `translateX(-${index * 100}vw)`
        }}
      >
        {images.map((img, i) => (
          <div key={i} style={{ minWidth: "100vw", height: "500px", flexShrink: 0 }}>
            <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        style={{
          position: "absolute", top: "50%", left: "10px",
          transform: "translateY(-50%)", background: "rgba(0,0,0,0.5)",
          color: "white", border: "none", padding: "10px", cursor: "pointer"
        }}
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        style={{
          position: "absolute", top: "50%", right: "10px",
          transform: "translateY(-50%)", background: "rgba(0,0,0,0.5)",
          color: "white", border: "none", padding: "10px", cursor: "pointer"
        }}
      >
        &#10095;
      </button>

      {/* Dots */}
      <div style={{
        position: "absolute", bottom: "10px", left: "50%",
        transform: "translateX(-50%)", display: "flex", gap: "5px"
      }}>
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => { setIndex(i); resetTimer(); }}
            style={{
              height: "10px", width: "10px",
              background: i === index ? "white" : "gray",
              borderRadius: "50%", cursor: "pointer"
            }}
          />
        ))}
      </div>
    </div>
  );
}
