import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsappSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import fimg from "../assets/WhatsApp Image 2024-11-18 at 11.45.28 AM (2).jpeg";
import Footer from "./Footer";

const FounderPage = () => {
  return (
    <div
      className="founder-container flex flex-col md:flex-row p-5 gap-8 rounded-lg"
      style={{ color: "#333" }}
    >
      {/* Image Section */}
      <div
        className="founder-image"
        style={{ flex: 1, padding: "15px", display: "flex", justifyContent: "center" }}
      >
        <img
          src={fimg}
          alt="Founder"
          className="h-[300px] w-[300px] md:h-[500px] md:w-[400px] object-cover rounded-lg"
        />
      </div>

      {/* Info Section */}
      <div className="founder-info" style={{ flex: 1, padding: "20px" }}>
        <div style={{ marginBottom: "30px" }}>
          <p className="text-2xl md:text-4xl font-bold mt-5 md:mt-20">Nitin Dhande</p>
          <p className="text-[16px] mt-3 text-red-600">Electrical Engineer </p>

          <p className="mt-3 mb-3 text-[16px] md:text-[20px] font-bold">
            nitindhande06@gmail.com
          </p>

          <p className="font-bold">
            <strong>Phone:</strong> 9404204756
          </p>
        </div>

        {/* Social Media Links */}
        <div
          className="social-links flex gap-3 mt-10 justify-center md:justify-start"
        >
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#3b5998" }}
          >
            <FaFacebook style={{ fontSize: "30px", md: { fontSize: "40px" } }} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#E1306C" }}
          >
            <FaInstagram style={{ fontSize: "30px", md: { fontSize: "40px" } }} />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#FF0000" }}
          >
            <FaYoutube style={{ fontSize: "30px", md: { fontSize: "40px" } }} />
          </a>
          <a
            href="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#25D366" }}
          >
            <FaWhatsappSquare style={{ fontSize: "30px", md: { fontSize: "40px" } }} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#1DA1F2" }}
          >
            <FaXTwitter style={{ fontSize: "30px", md: { fontSize: "40px" } }} />
          </a>

       
          
        </div>
        
    

      </div>

     

    </div>
    
    
  );
};

export default FounderPage;
