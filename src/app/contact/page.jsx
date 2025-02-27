"use client";
import "./contact.css";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useState, useEffect } from "react";

import ParallaxImage from "../components/ParallaxImage/ParallaxImage";
import Footer from "../components/Footer/Footer";

const Page = () => {
  const [nyTime, setNyTime] = useState("--:-- AM EST");
  const [tokyoTime, setTokyoTime] = useState("--:-- AM JST");

  useEffect(() => {
    const updateTimes = () => {
      const nyOptions = {
        timeZone: "America/New_York",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      const nyFormatter = new Intl.DateTimeFormat("en-US", nyOptions);
      setNyTime(nyFormatter.format(new Date()) + " EST");

      const tokyoOptions = {
        timeZone: "Asia/Tokyo",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      const tokyoFormatter = new Intl.DateTimeFormat("en-US", tokyoOptions);
      setTokyoTime(tokyoFormatter.format(new Date()) + " JST");
    };

    updateTimes();

    const intervalId = setInterval(updateTimes, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ReactLenis root>
      <div className="page">
        <section className="contact-hero">
          <div className="container">
            <h1>
              Collaborating with visionary brands, entrepreneurs, and investors
              to craft bold identities that inspire and leave a lasting mark.
            </h1>
          </div>
        </section>

        <section className="contact-details">
          <div className="container">
            <div className="row">
              <div className="col">
                <p>Let's Build</p>
              </div>
              <div className="col">
                <div className="sub-col">
                  <p>New Collaborations</p>
                  <p>hello@isochrome.io</p>
                </div>
                <div className="sub-col">
                  <p>Join ISOChrome</p>
                  <p>jobs@isochrome.io</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>New York</p>
              </div>
              <div className="col">
                <div className="sub-col">
                  <p>245 Fifth Avenue</p>
                  <p>New York, NY 10016</p>
                  <p>USA</p>
                </div>
                <div className="sub-col">
                  <p>{nyTime}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>Tokyo</p>
              </div>
              <div className="col">
                <div className="sub-col">
                  <p>3-5-7 Ginza</p>
                  <p>Chuo-ku, Tokyo 104-0061</p>
                  <p>Japan</p>
                </div>
                <div className="sub-col">
                  <p>{tokyoTime}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-banner">
          <div className="contact-banner-bg">
            <ParallaxImage src="/contact/banner.jpg" alt="" speed={0.2} />
          </div>

          <div className="contact-banner-cta">
            <h1>See our work</h1>
          </div>
        </section>
      </div>

      <Footer />
    </ReactLenis>
  );
};

export default Page;
