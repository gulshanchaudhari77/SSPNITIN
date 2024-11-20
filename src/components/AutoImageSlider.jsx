import React, { useState, useEffect } from "react";

const AutoImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [images.length]);

  return (
    <div
      style={{
        width: "100%",
        height: "500px", // Set fixed height for the slider container
        overflow: "hidden",
        position: "relative",
      }}
    >
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].name}
        style={{
          width: "100%", // Ensure the image covers the entire width
          height: "100%", // Ensure the image covers the entire height
          objectFit: "cover", // Maintain aspect ratio while covering the container
          borderRadius: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          transition: "opacity 1s ease-in-out", // Smooth transition between images
        }}
      />
    </div>
  );
};

export default AutoImageSlider;
