"use client";

import "./work.css";
import { ReactLenis } from "@studio-freight/react-lenis";
import ParallaxImage from "../components/ParallaxImage/ParallaxImage";
import { useTransitionRouter } from "next-view-transitions";

const Page = () => {
  const router = useTransitionRouter();

  function slideInOut() {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translateY(0)",
        },
        {
          opacity: 0.4,
          transform: "translateY(-35%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  const handleNavigation = (e, path) => {
    e.preventDefault();

    setTimeout(() => {
      router.push(path, {
        onTransitionReady: slideInOut,
      });
    }, 200);
  };

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
                <a
                  href="/project"
                  onClick={(e) => handleNavigation(e, "/project")}
                >
                  <h1>Project Name</h1>
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project-banner-img">
              <ParallaxImage src="/projects/project-banner-2.jpg" alt="" />
              <div className="project-title">
                <a
                  href="/project"
                  onClick={(e) => handleNavigation(e, "/project")}
                >
                  <h1>Project Name</h1>
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project-banner-img">
              <ParallaxImage src="/projects/project-banner-3.jpg" alt="" />
              <div className="project-title">
                <a
                  href="/project"
                  onClick={(e) => handleNavigation(e, "/project")}
                >
                  <h1>Project Name</h1>
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project-banner-img">
              <ParallaxImage src="/projects/project-banner-4.jpg" alt="" />
              <div className="project-title">
                <a
                  href="/project"
                  onClick={(e) => handleNavigation(e, "/project")}
                >
                  <h1>Project Name</h1>
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project-banner-img">
              <ParallaxImage src="/projects/project-banner-5.jpg" alt="" />
              <div className="project-title">
                <a
                  href="/project"
                  onClick={(e) => handleNavigation(e, "/project")}
                >
                  <h1>Project Name</h1>
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project-banner-img">
              <ParallaxImage src="/projects/project-banner-6.jpg" alt="" />
              <div className="project-title">
                <a
                  href="/project"
                  onClick={(e) => handleNavigation(e, "/project")}
                >
                  <h1>Project Name</h1>
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project-banner-img">
              <ParallaxImage src="/projects/project-banner-7.jpg" alt="" />
              <div className="project-title">
                <a
                  href="/project"
                  onClick={(e) => handleNavigation(e, "/project")}
                >
                  <h1>Project Name</h1>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
};

export default Page;
