"use client";
import "./about.css";

import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const page = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const expertiseSectionRef = useRef(null);
  const expertiseHeaderRef = useRef(null);
  const servicesRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  useEffect(() => {
    // Register the plugin first
    gsap.registerPlugin(ScrollTrigger);

    // Set window width only after component is mounted
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Wait for a brief moment to ensure DOM is fully rendered
    const initScrollTrigger = () => {
      // Kill any existing ScrollTrigger instances first
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }

      // Only create ScrollTrigger if window width > 900 and all required elements exist
      if (
        windowWidth > 900 &&
        expertiseSectionRef.current &&
        expertiseHeaderRef.current &&
        servicesRef.current
      ) {
        // Force a refresh to ensure accurate measurements
        ScrollTrigger.refresh();

        scrollTriggerRef.current = ScrollTrigger.create({
          trigger: expertiseSectionRef.current,
          start: "top top",
          endTrigger: servicesRef.current,
          end: "bottom bottom",
          pin: expertiseHeaderRef.current,
          pinSpacing: false,
          markers: false, // Set to true for debugging
          onRefresh: (self) => {
            // This ensures proper positioning on refresh
            self.scroll(self.scroll());
          },
        });
      }
    };

    // Use a timeout to ensure all elements are ready and sized correctly
    const timeoutId = setTimeout(initScrollTrigger, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);

      // Clean up all ScrollTrigger instances
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      } else {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, [windowWidth]);

  return (
    <ReactLenis root>
      <div className="page">
        <section className="about-hero">
          <div className="about-hero-bg">
            <img src="/about/hero.jpg" alt="" />
          </div>

          <div className="container">
            <h1>Welcome to a new era</h1>

            <div className="about-tagline">
              <div className="col">
                <p>About us</p>
              </div>
              <div className="col">
                <p>
                  Transcending boundaries of conventional pR and influencer
                  marketing.
                </p>
              </div>
            </div>
            <h1>of brand communication</h1>
          </div>
        </section>

        <section className="about-copy">
          <div className="container">
            <h2>Our Story</h2>

            <div className="about-copy-wrapper">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
                repellendus tenetur odit ipsa esse reiciendis quis nihil sint.
                Incidunt doloremque sit numquam est reiciendis quas veniam
                adipisci architecto odio omnis voluptatum, optio cumque enim
                dignissimos facilis distinctio esse dolores ipsum quaerat harum
                quisquam fuga quam? Rem consequuntur dolor animi numquam!
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                inventore consequuntur, nesciunt cumque quos possimus illo
                voluptatem voluptas molestias aperiam optio et quaerat vitae
                accusantium deleniti impedit tempore. Earum labore molestias ea
                laudantium similique distinctio fuga? Repudiandae, consectetur!
                Eveniet tempora voluptatibus facilis perferendis quia sit
                doloribus asperiores nisi ab. Ducimus aut consequuntur molestiae
                laboriosam odio quam repellat vel adipisci modi quas dignissimos
                sit, libero, ea obcaecati aliquam placeat reprehenderit
                doloribus quasi vitae sequi. Quae totam ipsam quos nulla minima,
                dolore eos cumque dignissimos cupiditate odit. Aperiam tenetur
                debitis assumenda consequuntur! Animi voluptatem nobis numquam
                ex quam earum, suscipit neque adipisci.
              </p>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium, debitis! Officiis commodi autem sequi voluptate
                tempore voluptates eligendi impedit corrupti doloremque ipsum
                nihil molestiae enim rem neque eaque fugit odit unde omnis nobis
                ipsa, ut, adipisci eos cum assumenda. Voluptatum sit libero
                explicabo vitae necessitatibus nostrum odio. Consequuntur
                adipisci molestiae tempora deserunt iste quae facilis eaque
                architecto officiis cupiditate ipsum, voluptate error numquam
                delectus illum debitis aut, repudiandae quasi commodi autem at
                similique iusto sit.
              </p>

              <div className="about-copy-img">
                <img src="/about/about-copy.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="expertise" ref={expertiseSectionRef}>
          <div className="expertise-header" ref={expertiseHeaderRef}>
            <div className="container">
              <div className="row">
                <h1>
                  Our <br />
                  Expertises
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

          <div className="services" ref={servicesRef}>
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

        <section className="about-copy">
          <div className="container">
            <h2>The Origin</h2>

            <div className="about-copy-wrapper">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
                repellendus tenetur odit ipsa esse reiciendis quis nihil sint.
                Incidunt doloremque sit numquam est reiciendis quas veniam
                adipisci architecto odio omnis voluptatum, optio cumque enim
                dignissimos facilis distinctio esse dolores ipsum quaerat harum
                quisquam fuga quam? Rem consequuntur dolor animi numquam!
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                inventore consequuntur, nesciunt cumque quos possimus illo
                voluptatem voluptas molestias aperiam optio et quaerat vitae
                accusantium deleniti impedit tempore. Earum labore molestias ea
                laudantium similique distinctio fuga? Repudiandae, consectetur!
                Eveniet tempora voluptatibus facilis perferendis quia sit
                doloribus asperiores nisi ab. Ducimus aut consequuntur molestiae
                laboriosam odio quam repellat vel adipisci modi quas dignissimos
                sit, libero, ea obcaecati aliquam placeat reprehenderit
                doloribus quasi vitae sequi. Quae totam ipsam quos nulla minima,
                dolore eos cumque dignissimos cupiditate odit. Aperiam tenetur
                debitis assumenda consequuntur! Animi voluptatem nobis numquam
                ex quam earum, suscipit neque adipisci.
              </p>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium, debitis! Officiis commodi autem sequi voluptate
                tempore voluptates eligendi impedit corrupti doloremque ipsum
                nihil molestiae enim rem neque eaque fugit odit unde omnis nobis
                ipsa, ut, adipisci eos cum assumenda. Voluptatum sit libero
                explicabo vitae necessitatibus nostrum odio. Consequuntur
                adipisci molestiae tempora deserunt iste quae facilis eaque
                architecto officiis cupiditate ipsum, voluptate error numquam
                delectus illum debitis aut, repudiandae quasi commodi autem at
                similique iusto sit.
              </p>

              <div className="about-copy-img">
                <img src="/about/about-copy.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
};

export default page;
