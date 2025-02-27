"use client";
import "./project.css";

import ReactLenis from "@studio-freight/react-lenis";

import Footer from "../components/Footer/Footer";

const page = () => {
  return (
    <ReactLenis root>
      <div className="page">
        <section className="project-hero">
          <div className="col">
            <div className="project-hero-img">
              <img src="/project/project-img-1.jpg" alt="" />
            </div>
          </div>
          <div className="col">
            <div className="container">
              <div className="project-page-title">
                <h1>Pulse Interactive Digital</h1>
              </div>
              <div className="row">
                <div className="sub-col">
                  <p>Client</p>
                  <h3>Northstar Co.</h3>
                </div>
                <div className="sub-col">
                  <p>Services</p>
                  <h3>Content Creation</h3>
                </div>
              </div>
              <div className="row">
                <div className="sub-col"></div>
                <div className="sub-col">
                  <p>
                    Through collaborative strategy and innovative digital
                    solutions, we helped Northstar establish a stronger online
                    presence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="project-info">
          <div className="container">
            <div className="col">
              <h3>Summary</h3>
            </div>
            <div className="col">
              <p>
                Pulse Digital partnered with Northstar Innovations to develop a
                comprehensive interactive campaign that would strengthen their
                market position and expand their digital footprint. The project
                focused on creating engaging, conversion-driven content that
                resonated with their target audience while maintaining brand
                consistency across all platforms.
              </p>

              <p>
                Our strategy involved a multi-channel approach combining social
                media optimization, content marketing, and targeted digital
                advertising. We developed custom graphics, interactive elements,
                and compelling narratives that highlighted Northstar's
                innovative solutions. The campaign featured responsive design
                elements that adapted seamlessly to different devices, ensuring
                a consistent user experience regardless of how customers
                accessed the content.
              </p>

              <p>
                The results exceeded initial projections, with Northstar
                experiencing a 38% increase in qualified leads and 42% growth in
                social media engagement. Website traffic from organic searches
                improved significantly, and average session duration increased
                by nearly three minutes. This project demonstrated how strategic
                digital marketing can transform brand perception and drive
                meaningful business outcomes when executed with creativity and
                precision.
              </p>
            </div>
          </div>
        </section>

        <section className="project-info">
          <div className="container">
            <div className="col"></div>
            <div className="col">
              <div className="project-info-img-1">
                <img src="/project/project-img-2.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="project-info">
          <div className="container">
            <div className="col">
              <h3>Strategy</h3>
            </div>
            <div className="col">
              <p>
                We implemented a strategic multi-platform approach for Pulse
                Digital's campaign, beginning with comprehensive audience
                analysis to identify key engagement opportunities. Our tactics
                included creating custom interactive content for Instagram and
                LinkedIn, developing targeted Google and Meta ad campaigns with
                A/B tested creative assets, and producing a series of thought
                leadership articles distributed through industry newsletters. We
                further enhanced engagement through virtual events and
                interactive website elements that encouraged visitor
                participation while collecting valuable user data to
                continuously refine our targeting strategy.
              </p>
            </div>
          </div>
        </section>

        <section className="project-info">
          <div className="container">
            <div className="col">
              <h3>Campaign Performance</h3>
            </div>
            <div className="col">
              <div className="stat">
                <h1>97.4K</h1>
                <span>Video Views</span>
              </div>

              <div className="stat">
                <h1>3.8K</h1>
                <span>Total Engagement</span>
              </div>

              <div className="stat">
                <h1>45.6K</h1>
                <span>Total Reach</span>
              </div>

              <div className="stat">
                <h1>512</h1>
                <span>Conversions</span>
              </div>

              <div className="stat">
                <h1>183.7K</h1>
                <span>Impressions</span>
              </div>

              <div className="stat">
                <h1>4.2K</h1>
                <span>Interactions</span>
              </div>
            </div>
          </div>
        </section>

        <section className="project-preview-img">
          <div className="project-preview-img-wrapper">
            <img src="/project/project-img-3.jpg" alt="" />
          </div>
        </section>

        <section className="project-info project-info-outro">
          <div className="container">
            <div className="col">
              <h3>Execution</h3>
            </div>
            <div className="col">
              <p>
                For the Pulse Digital campaign, we implemented a multi-faceted
                digital strategy centered on audience engagement and conversion
                optimization. Our team developed custom-designed interactive
                elements across all touchpoints, including shoppable Instagram
                posts, targeted LinkedIn content, and a series of
                performance-optimized landing pages. We leveraged data-driven
                insights to identify peak engagement windows and adjusted
                content delivery accordingly, ensuring maximum visibility within
                the target demographic.
              </p>

              <p>
                Content creation focused on storytelling that highlighted
                Northstar's unique value proposition while addressing specific
                pain points identified through customer research. We deployed
                A/B testing protocols for all key campaign elements, allowing us
                to refine messaging and visual assets based on real-time
                performance data. This adaptive approach enabled us to pivot
                quickly in response to engagement metrics, maximizing campaign
                effectiveness through continuous optimization throughout the
                project lifecycle.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default page;
