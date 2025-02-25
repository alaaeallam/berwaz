"use client";
import "./about.css";

import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const page = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const expertiseSection = document.querySelector(".expertise");
    const expertiseHeader = document.querySelector(".expertise-header");
    const services = document.querySelector(".services");

    if (expertiseSection && expertiseHeader && services) {
      ScrollTrigger.create({
        trigger: expertiseSection,
        start: "top top",
        endTrigger: services,
        end: "bottom bottom",
        pin: expertiseHeader,
        pinSpacing: false,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

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

        <section className="expertise">
          <div className="expertise-header">
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

          <div className="services">
            <div className="col"></div>
            <div className="col">
              <div className="service">
                <h3>(01)</h3>
                <h2>Strategic Planning</h2>
                <p>DISCOVERY PHASE</p>
                <p>PLANNING</p>
                <p>DEDICATED TEAM</p>
                <p>STRATEGY EXECUTION</p>
                <p>KPI'S & ROI</p>
                <p>EVALUATION AND POST-MORTEMS</p>
              </div>
              <div className="service">
                <h3>(02)</h3>
                <h2>Strategic Planning</h2>
                <p>DISCOVERY PHASE</p>
                <p>PLANNING</p>
                <p>DEDICATED TEAM</p>
                <p>STRATEGY EXECUTION</p>
                <p>KPI'S & ROI</p>
                <p>EVALUATION AND POST-MORTEMS</p>
              </div>
              <div className="service">
                <h3>(03)</h3>
                <h2>Strategic Planning</h2>
                <p>DISCOVERY PHASE</p>
                <p>PLANNING</p>
                <p>DEDICATED TEAM</p>
                <p>STRATEGY EXECUTION</p>
                <p>KPI'S & ROI</p>
                <p>EVALUATION AND POST-MORTEMS</p>
              </div>
              <div className="service">
                <h3>(04)</h3>
                <h2>Strategic Planning</h2>
                <p>DISCOVERY PHASE</p>
                <p>PLANNING</p>
                <p>DEDICATED TEAM</p>
                <p>STRATEGY EXECUTION</p>
                <p>KPI'S & ROI</p>
                <p>EVALUATION AND POST-MORTEMS</p>
              </div>
              <div className="service">
                <h3>(05)</h3>
                <h2>Strategic Planning</h2>
                <p>DISCOVERY PHASE</p>
                <p>PLANNING</p>
                <p>DEDICATED TEAM</p>
                <p>STRATEGY EXECUTION</p>
                <p>KPI'S & ROI</p>
                <p>EVALUATION AND POST-MORTEMS</p>
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
