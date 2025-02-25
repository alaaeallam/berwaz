"use client";
import "./work.css";

import { ReactLenis } from "@studio-freight/react-lenis";
import ParallaxImage from "../components/ParallaxImage/ParallaxImage";

const page = () => {
  return (
    <ReactLenis root>
      <div className="page">
        <section className="work-hero">
          <div className="container">
            <h1>From vision to victory</h1>
            <p>Crafting digital marketing excellence with measurable impact</p>
          </div>
        </section>

        <section className="projects">
          <div className="project">
            <div className="project-banner-img">
              <ParallaxImage src="/projects/project-banner-1.jpg" alt="" />
              <div className="project-title">
                <h1>Project Name</h1>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project-banner-img">
              <ParallaxImage src="/projects/project-banner-2.jpg" alt="" />
              <div className="project-title">
                <h1>Project Name</h1>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project-banner-img">
              <ParallaxImage src="/projects/project-banner-3.jpg" alt="" />
              <div className="project-title">
                <h1>Project Name</h1>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project-banner-img">
              <ParallaxImage src="/projects/project-banner-4.jpg" alt="" />
              <div className="project-title">
                <h1>Project Name</h1>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project-banner-img">
              <ParallaxImage src="/projects/project-banner-5.jpg" alt="" />
              <div className="project-title">
                <h1>Project Name</h1>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project-banner-img">
              <ParallaxImage src="/projects/project-banner-6.jpg" alt="" />
              <div className="project-title">
                <h1>Project Name</h1>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project-banner-img">
              <ParallaxImage src="/projects/project-banner-7.jpg" alt="" />
              <div className="project-title">
                <h1>Project Name</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-outro">
          <div className="container">
            <h1>Load More</h1>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
};

export default page;
