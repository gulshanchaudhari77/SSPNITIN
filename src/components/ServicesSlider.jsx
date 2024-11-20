import React from "react";
import { FcBinoculars } from "react-icons/fc";
import { GoGoal } from "react-icons/go";
import { IoDiamondOutline } from "react-icons/io5";
import Footer from "./Footer";





const VisionSection = () => {
  const visionData = [
    {
      id: 1,
      vision:"",
      image: <FcBinoculars style={{ fontSize: "60px" }}  /> ,
      text: "To create a self-sufficient, inclusive society by empowering people through education, healthcare, skills, and social support, while preserving our culture and promoting sustainable development..",
    },
    {
      id: 2,
      vision:"",

      image: <GoGoal style={{ fontSize: "60px" }} />,
      text: "Empower communities through quality education, healthcare, and de-addiction programs.Preserve cultural heritage, promote fort conservation, and instill leadership in youth.",
    },
    {
      id: 3,
      vision:"",

      image: <IoDiamondOutline style={{ fontSize: "60px" }} />,
      text:"Preserve historical sites, especially forts associated with Chhatrapati Shivaji Maharaj.Empower youth with leadership and entrepreneurship opportunities.Support women, farmers, and workers through social welfare programs."
    },
  ];

  return (
    <section style={{ padding: "40px 20px", textAlign: "center",  }}>
      {/* Section Heading */}
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Our Vision</h2>

      {/* Vision Items */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {visionData.map((item) => (
          <div
            key={item.id}
            style={{
              maxWidth: "300px",
              textAlign: "center",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h1 className="text-3xl font-bold">
              {item.vision}
            </h1>
            {/* <img
              src={item.image}
              alt={`Vision ${item.id}`}
              style={{
                width: "40%",
                height: "100px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            /> */}
            {typeof item.image === "string" ? (
              <img src={item.image} alt="vision" 
              style={{
                width: "440%",
                height: "100px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "15px",
              }} 
              />
            ) : (
              item.image // Render the React component (icon) directly
            )}
            
            <p style={{ fontSize: "1rem", color: "#555" , fontSize: "20px"  }}>{item.text}</p>
          </div>
          
        ))}
      </div>
      
    </section>
  );
};

export default VisionSection;
