"use client";
import "./work.css";

import { ReactLenis } from "@studio-freight/react-lenis";

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
              <img src="/projects/project-banner-1.jpg" alt="" />
            </div>
          </div>
          <div className="project">
            <div className="project-banner-img">
              <img src="/projects/project-banner-2.jpg" alt="" />
            </div>
          </div>
          <div className="project">
            <div className="project-banner-img">
              <img src="/projects/project-banner-3.jpg" alt="" />
            </div>
          </div>
          <div className="project">
            <div className="project-banner-img">
              <img src="/projects/project-banner-4.jpg" alt="" />
            </div>
          </div>
          <div className="project">
            <div className="project-banner-img">
              <img src="/projects/project-banner-5.jpg" alt="" />
            </div>
          </div>
          <div className="project">
            <div className="project-banner-img">
              <img src="/projects/project-banner-6.jpg" alt="" />
            </div>
          </div>
          <div className="project">
            <div className="project-banner-img">
              <img src="/projects/project-banner-7.jpg" alt="" />
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
