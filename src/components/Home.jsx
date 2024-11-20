import React from "react";
import img from "../assets/CSPT logo PNG B.png"; // If you still want to use this image somewhere
import ServicesSlider from "../components/ServicesSlider";
import MyWordSlider from "../components/MyWordSlider";
import FounderPage from "../components/FounderPage";
import Footer from "./Footer";
import AutoImageSlider from "../components/AutoImageSlider"; // Import the new slider component
import banner4 from '../assets/WhatsApp Image 2024-11-19 at 8.12.23 PM.jpeg'
// import banner6 from '../assets/WhatsApp Image 2024-11-19 at 8.17.01 PM.jpeg'
import banner7 from '../assets/WhatsApp Image 2024-11-19 at 8.17.07 PM.jpeg'


// Import all images for the slider
import banner1 from "../assets/WhatsApp Image 2024-11-19 at 1.19.07 PM.jpeg";
import banner2 from "../assets/WhatsApp Image 2024-11-19 at 1.33.28 PM.jpeg";
import banner3 from "../assets/WhatsApp Image 2024-11-19 at 2.21.45 PM.jpeg";

const Home = () => {
  const images = [
    { src: banner1, name: "Banner 1" },
    { src: banner2, name: "Banner 2" },
    { src: banner3, name: "Banner 3" },
    { src: banner4, name: "Banner 3" },
    // { src: banner6, name: "Banner 3" },
    { src: banner7, name: "Banner 3" },




  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9", color: "#333", minHeight: "1500px" }}>
      {/* About Foundation Section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "40px 20px",
          backgroundColor: "#e3f2fd",
          minHeight: "600px",  // Increased height for the section
        }}
      >
        {/* Information Section */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            minWidth: "300px",
          }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            छत्रपती शिवशंभू प्रतिष्ठान, तुमसर
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              textAlign: "center",
            }}
          >
            Education | Health | Fort Conservation | De-addiction | Farmers | Workers | Women Empowerment | Youth Leadership | Environmental Skill Development | Shivaji's Work | Social Work | Government Scheme Benefits
            <br />
            👈 This is our sincere focus 💯
            <br />
            🛑 Patience. Struggle. Determination. 🛑
          </p>
        </div>

        {/* Slider Section */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            minWidth: "300px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <AutoImageSlider images={images} />
        </div>
      </div>

      {/* My Word Section */}
      <div>
        <ServicesSlider />
        <MyWordSlider />
      </div>

      {/* Founder Section */}
      <div style={{ padding: "20px", backgroundColor: "#f1f1f1" }}>
        <h1 className="text-center text-3xl font-bold">Founder</h1>
        <FounderPage />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
