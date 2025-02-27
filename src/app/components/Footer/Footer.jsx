"use client";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="col">
            <h3>Content delivered to your inbox</h3>
            <div className="subscribe-form">
              <input type="text" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="footer-socials">
                <a href="https://www.instagram.com/codegridweb/">Instagram</a>
                <a href="https://x.com/codegridweb">Twitter</a>
              </div>

              <div className="langs">
                <p>EN</p>
                <p>FR</p>
              </div>
            </div>

            <div className="row">
              <div className="location">
                <h3>New York</h3>
                <p>245 Fifth Avenue</p>
                <p>New York, NY 10016</p>
                <p>USA</p>
              </div>

              <div className="location">
                <h3>Tokyo</h3>
                <p>3-5-7 Ginza</p>
                <p>Chuo-ku, Tokyo 104-0061</p>
                <p>Japan</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-logo">
          <h1>ISOChrome</h1>
        </div>

        <div className="footer-copyright">
          <p>ISOChrome &copy;2025. All rights reserved.</p>
          <p>By Codegrid</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
