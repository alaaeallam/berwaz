"use client";
import "./about.css";

import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const page = () => {
  const container = useRef();
  const [windowWidth, setWindowWidth] = useState(0);
  const scrollTriggerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  useGSAP(
    () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      const timeoutId = setTimeout(() => {
        if (windowWidth > 900) {
          const expertiseSection = document.querySelector(".expertise");
          const expertiseHeader = document.querySelector(".expertise-header");
          const services = document.querySelector(".services");

          if (expertiseSection && expertiseHeader && services) {
            ScrollTrigger.refresh();

            scrollTriggerRef.current = ScrollTrigger.create({
              trigger: expertiseSection,
              start: "top top",
              endTrigger: services,
              end: "bottom bottom",
              pin: expertiseHeader,
              pinSpacing: false,
              onEnter: () => {
                gsap.to(expertiseHeader, { duration: 0.1, ease: "power1.out" });
              },
            });
          }
        }
      }, 100);

      return () => {
        window.removeEventListener("resize", handleResize);
        clearTimeout(timeoutId);

        if (scrollTriggerRef.current) {
          scrollTriggerRef.current.kill();
        }
      };
    },
    { dependencies: [windowWidth], scope: container }
  );

  useEffect(() => {
    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh(true);
    }, 300);

    return () => {
      clearTimeout(refreshTimeout);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="page" ref={container}>
        <section className="about-hero">
          <div className="about-hero-bg">
            <img src="/about/hero.jpg" alt="ISOChrome About Hero Image" />
          </div>

          <div className="container">
            <h1>Shaping the Future of Creativity</h1>

            <div className="about-tagline">
              <div className="col">
                <p>Who We Are</p>
              </div>
              <div className="col">
                <p>
                  Where strategy meets storytelling—crafting bold, unforgettable
                  brand experiences.
                </p>
              </div>
            </div>
            <h1>with Vision and Innovation</h1>
          </div>
        </section>

        <section className="about-copy">
          <div className="container">
            <h2>The Origin</h2>

            <div className="about-copy-wrapper">
              <p>
                ISOChrome is more than a creative agency—we are storytellers,
                strategists, and visionaries dedicated to redefining brand
                communication. We craft experiences that go beyond visuals,
                blending strategy with creativity to create lasting impact.
                Every brand has a unique identity, and we specialize in bringing
                that identity to life with immersive storytelling, cutting-edge
                design, and audience-driven narratives. From concept to
                execution, we ensure that every campaign is crafted with
                precision and passion. We don’t just create content—we engineer
                experiences that inspire engagement and action.
              </p>

              <p>
                Our approach is built on innovation, ensuring every project is
                fresh, dynamic, and purpose-driven. Whether it's **brand
                strategy, influencer collaborations, or digital campaigns**, we
                help brands stand out, connect authentically, and leave a
                lasting impression. We combine creative vision with analytical
                insights to develop strategies that not only capture attention
                but also drive real impact in an ever-evolving digital
                landscape. We believe in the power of collaboration. By working
                closely with our clients, we align our creative strategies with
                their business objectives, ensuring that every campaign is
                tailored to meet their unique goals.
              </p>

              <p>
                At ISOChrome, we push boundaries, challenge conventions, and
                shape the future of branding. With every campaign, we aim to
                turn ideas into movements, transforming how brands interact with
                their audiences in a rapidly evolving digital world. Creativity
                isn’t just about aesthetics—it’s about impact, engagement, and
                innovation that goes beyond the expected. As pioneers in the
                creative space, we thrive on experimentation and fearless
                execution.
              </p>

              <div className="about-copy-img">
                <img
                  src="/about/about-copy.jpg"
                  alt="ISOChrome Creative Team at Work"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="expertise">
          <div className="expertise-header">
            <div className="container">
              <div className="row">
                <h1>
                  What we <br /> do best
                </h1>

                <div className="expertise-img-1">
                  <img src="/about/expertise-img-1.jpg" alt="" />
                </div>
              </div>
              <div className="row">
                <div className="expertise-img-2">
                  <img src="/about/expertise-img-2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="services">
            <div className="col"></div>
            <div className="col">
              <div className="service">
                <h3>(01)</h3>
                <h2>Brand Strategy</h2>
                <p>01 Market Research & Insights</p>
                <p>02 Positioning & Differentiation</p>
                <p>03 Audience Analysis</p>
                <p>04 Messaging Framework</p>
                <p>05 Long-Term Growth Planning</p>
              </div>
              <div className="service">
                <h3>(02)</h3>
                <h2>Visual Identity</h2>
                <p>01 Logo & Brand Guidelines</p>
                <p>02 Color Theory & Typography</p>
                <p>03 Design Systems & Assets</p>
                <p>04 Illustration & Iconography</p>
                <p>05 Brand Voice & Personality</p>
              </div>
              <div className="service">
                <h3>(03)</h3>
                <h2>Digital Experiences</h2>
                <p>01 Web Design & Development</p>
                <p>02 UI/UX & Interactive Design</p>
                <p>03 Prototyping & Wireframing</p>
                <p>04 Mobile & Web App Interfaces</p>
                <p>05 Performance & Accessibility</p>
              </div>
              <div className="service">
                <h3>(04)</h3>
                <h2>Content & Storytelling</h2>
                <p>01 Creative Copywriting</p>
                <p>02 Video & Motion Graphics</p>
                <p>03 Social Media Campaigns</p>
                <p>04 Content Strategy</p>
                <p>05 Brand Narratives</p>
              </div>
              <div className="service">
                <h3>(05)</h3>
                <h2>Marketing & Growth</h2>
                <p>01 SEO & Performance Optimization</p>
                <p>02 Ad Campaigns & Paid Media</p>
                <p>03 Email & CRM Strategies</p>
                <p>04 Conversion Rate Optimization</p>
                <p>05 Analytics & Insights</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-outro-banner">
          <div className="about-outro-img">
            <img src="/about/about-outro.jpg" alt="" />
          </div>
        </section>

        <section className="founder-voice">
          <div className="container">
            <h2>
              "ISOChrome is a trailblazer in influencer marketing, connecting
              brands with influential voices across social media to build
              impactful messages.”
            </h2>

            <div className="founder-image">
              <img src="/about/expertise-img-1.jpg" alt="" />
            </div>
            <div className="founter-info">
              <p>Kristina Argento</p>
              <p>Founder</p>
            </div>
          </div>
        </section>

        <section className="client-logos">
          <div className="container">
            <div className="logos-grid">
              <div className="logo-item">
                <div className="logo-details">
                  <p>&#9632;</p>
                  <p>Logo Name</p>
                </div>
                <img src="/client-logos/A1.png" alt="Client Logo A1" />
              </div>
              <div className="logo-item">
                <div className="logo-details">
                  <p>&#9632;</p>
                  <p>Logo Name</p>
                </div>
                <img src="/client-logos/A2.png" alt="Client Logo A2" />
              </div>
              <div className="logo-item">
                <div className="logo-details">
                  <p>&#9632;</p>
                  <p>Logo Name</p>
                </div>
                <img src="/client-logos/B1.png" alt="Client Logo A3" />
              </div>
              <div className="logo-item">
                <div className="logo-details">
                  <p>&#9632;</p>
                  <p>Logo Name</p>
                </div>
                <img src="/client-logos/B2.png" alt="Client Logo A4" />
              </div>
              <div className="logo-item">
                <div className="logo-details">
                  <p>&#9632;</p>
                  <p>Logo Name</p>
                </div>
                <img src="/client-logos/C1.png" alt="Client Logo B1" />
              </div>
              <div className="logo-item">
                <div className="logo-details">
                  <p>&#9632;</p>
                  <p>Logo Name</p>
                </div>
                <img src="/client-logos/C2.png" alt="Client Logo B2" />
              </div>
              <div className="logo-item">
                <div className="logo-details">
                  <p>&#9632;</p>
                  <p>Logo Name</p>
                </div>
                <img src="/client-logos/D1.png" alt="Client Logo B3" />
              </div>
              <div className="logo-item">
                <div className="logo-details">
                  <p>&#9632;</p>
                  <p>Logo Name</p>
                </div>
                <img src="/client-logos/D2.png" alt="Client Logo B4" />
              </div>
              <div className="logo-item">
                <div className="logo-details">
                  <p>&#9632;</p>
                  <p>Logo Name</p>
                </div>
                <img src="/client-logos/E1.png" alt="Client Logo C1" />
              </div>
              <div className="logo-item">
                {" "}
                <div className="logo-details">
                  <p>&#9632;</p>
                  <p>Logo Name</p>
                </div>
                <img src="/client-logos/E2.png" alt="Client Logo C2" />
              </div>
              <div className="logo-item">
                {" "}
                <div className="logo-details">
                  <p>&#9632;</p>
                  <p>Logo Name</p>
                </div>
                <img src="/client-logos/F1.png" alt="Client Logo C3" />
              </div>
              <div className="logo-item">
                {" "}
                <div className="logo-details">
                  <p>&#9632;</p>
                  <p>Logo Name</p>
                </div>
                <img src="/client-logos/F2.png" alt="Client Logo C4" />
              </div>
              <div className="logo-item">
                {" "}
                <div className="logo-details">
                  <p>&#9632;</p>
                  <p>Logo Name</p>
                </div>
                <img src="/client-logos/G1.png" alt="Client Logo D1" />
              </div>
              <div className="logo-item">
                {" "}
                <div className="logo-details">
                  <p>&#9632;</p>
                  <p>Logo Name</p>
                </div>
                <img src="/client-logos/G2.png" alt="Client Logo D2" />
              </div>
              <div className="logo-item">
                {" "}
                <div className="logo-details">
                  <p>&#9632;</p>
                  <p>Logo Name</p>
                </div>
                <img src="/client-logos/H1.png" alt="Client Logo D3" />
              </div>
              <div className="logo-item">
                {" "}
                <div className="logo-details">
                  <p>&#9632;</p>
                  <p>Logo Name</p>
                </div>
                <img src="/client-logos/H2.png" alt="Client Logo D4" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
};

export default page;
