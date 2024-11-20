import React from "react";
// import "./Footer.css"; // Add your styles here
import img from "../assets/CSPT logo PNG B.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={img} alt="Logo" className="logo" />
        </div>

        {/* Contact Us Section */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>
            <strong>Address:</strong> Chhatrapati Shivaji Maharaj Public Library, near Vinoba Nagar, Tumsar (441912), Taluka Tumsar, District Bhandara, Maharashtra.
          </p>
          <p>
            <strong>Phone:</strong> +91-9404204756
          </p>
          <p>
            <strong>Email:</strong> nitindhande06@gmail.com
          </p>
        </div>

        {/* Social Media Section */}
        <div className="flex gap-3 mt-10">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#3b5998" }}>
            <FaFacebook style={{ fontSize: "40px" }}/>
          </a>

          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-red-600" style={{ textDecoration: "none"}}>
            <FaInstagram style={{ fontSize: "40px" }}/>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-red-700" style={{ textDecoration: "none" }}>
            <FaYoutube style={{ fontSize: "40px" }}/>
          </a>

          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-green-800" style={{ textDecoration: "none" }}>
            <FaWhatsappSquare style={{ fontSize: "40px" }}/>
          </a>

          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-black" style={{ textDecoration: "none" }}>
            <FaXTwitter style={{ fontSize: "40px" }}/>
          </a>

      </div>
      </div>
      {/* Developer Info */}
      <div className="footer-developer">
       <a href="https://www.linkedin.com/in/gulshan-chaudhari-5750b6239/"><span   className="text-pink-800 text-3xl"> Developed by   Gulshan</span></a>
      </div>
    </footer>
  );
};

export default Footer;
