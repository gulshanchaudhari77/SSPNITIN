import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import imagesData from "../data/imagesData";

const MyWordSlider = () => {
  const navigate = useNavigate();
  const { banners } = imagesData; // Get all banners
  const [isHovered, setIsHovered] = useState(false); // To pause on hover

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "400px", // Fixed height for slider container
        backgroundColor: "#f5f5f5",
      }}
      onMouseEnter={() => setIsHovered(true)} // Pause slider on hover
      onMouseLeave={() => setIsHovered(false)} // Resume slider on hover out
    >
      {/* Slider Container */}
      <div
        style={{
          display: "flex",
          animation: isHovered
            ? "none" // Stop animation on hover
            : "scroll 20s linear infinite", // Continuous scrolling
          animationPlayState: isHovered ? "paused" : "running", // Smooth pause/resume
        }}
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            onClick={() => navigate(`/image/${banner.id}`)}
            style={{
              margin: "0 10px",
              cursor: "pointer",
              flex: "0 0 auto", // Prevent shrinking
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "400px", // Match container height
              width: "300px", // Fixed width
            }}
          >
            <img
              src={banner.src}
              alt={banner.name}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "cover", // Prevent cropping
                borderRadius: "10px",
              }}
            />
            <h3
              style={{
                position: "absolute",
                bottom: "10px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "#fff",
                padding: "5px 10px",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              {banner.name}
            </h3>
          </div>
        ))}
      </div>

      {/* Slider Animation Styles */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  );
};

export default MyWordSlider;
