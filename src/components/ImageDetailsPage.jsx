import React from "react";
import { useParams } from "react-router-dom";
import imagesData from "../data/imagesData";
import Footer from "./Footer";

const ImageDetailPage = () => {
  const { id } = useParams(); // Get the banner ID from URL
  const banner = imagesData.banners.find((b) => b.id === parseInt(id));
  const relatedImages = imagesData.relatedImages[id] || [];

  if (!banner) {
    return <h1>Banner not found</h1>;
  }

  return (
    <div style={{ padding: "20px" }}>
      {/* Banner */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src={banner.src}
          alt={banner.name}
          style={{
            width: "50%",
            maxHeight: "700px",
            objectFit: "contain",
            borderRadius: "10px",
            margin:"0 auto"
            
          }}
        />
        <h1 className="font-bold">{banner.name}</h1>
        <p className="text-2xl text-black font-bold text-center mt-3">ALL Information About Program</p>
        <h2>{banner.infro}</h2>
      </div>

      {/* Related Images */}
      <h2 className="text-2xl text-black font-bold text-center">ALL-MEMORIES</h2>
      <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", padding:"30px", margin:"0 auto" }}>
        {relatedImages.map((image) => (
          <div key={image.id}>
            <img
              src={image.src}
              alt={image.name}
              style={{
                width: "250px",
                height: "230px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            {/* <h3 className="text-black font-bold ">{image.name}</h3> */}
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default ImageDetailPage;
