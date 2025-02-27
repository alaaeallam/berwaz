"use client";
import "./index.css";

import AnimatedH1 from "./components/AnimatedH1/AnimatedH1";

export default function Home() {
  return (
    <div className="page">
      <section className="index-hero">
        <div className="hero-img">
          <img src="/home/hero-img.jpg" alt="" />
        </div>

        <div className="hero-header">
          <AnimatedH1 delay={0.85}>Beyond the Frame, Into the Soul.</AnimatedH1>
        </div>

        <div className="hero-footer">
          <div className="site-info">
            <a href="https://www.youtube.com/@codegrid">Watch Showreel</a>
          </div>

          <div className="contact-link">
            <a href="https://www.youtube.com/@codegrid">Youtube</a>
          </div>
        </div>
      </section>
    </div>
  );
}
