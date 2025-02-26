"use client";
import "./project.css";

import ReactLenis from "@studio-freight/react-lenis";

const page = () => {
  return (
    <ReactLenis root>
      <div className="page">
        <section className="project-hero">
          <div className="col">
            <div className="project-hero-img">
              <img src="/about/about-copy.jpg" alt="" />
            </div>
          </div>
          <div className="col">
            <div className="container">
              <div className="project-page-title">
                <h1>Dulcedo Models: Model Search</h1>
              </div>
              <div className="row">
                <div className="sub-col">
                  <p>Client</p>
                  <h3>Dulcedo - Models division</h3>
                </div>
                <div className="sub-col">
                  <p>Services</p>
                  <h3>Social Media</h3>
                </div>
              </div>
              <div className="row">
                <div className="sub-col"></div>
                <div className="sub-col">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus hic, sed blanditiis repellat perferendis ipsam
                    sapiente porro atque perspiciatis dolorum?
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                voluptate sapiente quisquam laboriosam nam sequi illo excepturi
                sint? Perspiciatis, veritatis? Distinctio commodi exercitationem
                recusandae provident veniam? Mollitia magni voluptates, non, quo
                blanditiis atque eum fugiat numquam neque sequi dolores nemo.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
                sequi optio nam harum doloremque. Iusto voluptas non corporis
                ducimus, dolore quae excepturi voluptate fuga modi earum alias
                natus, eaque officia ipsa incidunt beatae voluptatem cum, quis
                totam consequuntur ullam. Tempora, deserunt aut recusandae
                suscipit eligendi nihil cupiditate similique nostrum sit
                tenetur. Sunt placeat error cum dolorum totam! Praesentium,
                incidunt neque?
              </p>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eligendi provident itaque ipsum soluta exercitationem
                repudiandae autem. Cum commodi maxime explicabo voluptates,
                autem quis. Dicta, atque! Quibusdam, iste illum. Incidunt
                accusamus quos esse soluta veritatis minima iusto laboriosam
                repudiandae voluptates quis? Voluptas in natus neque veniam ad
                totam. Doloribus, nemo sint!
              </p>
            </div>
          </div>
        </section>

        <section className="project-info">
          <div className="container">
            <div className="col"></div>
            <div className="col">
              <div className="project-info-img-1">
                <img src="/project/project-info-1.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="project-info">
          <div className="container">
            <div className="col">
              <h3>Tactics</h3>
            </div>
            <div className="col">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                voluptate sapiente quisquam laboriosam nam sequi illo excepturi
                sint? Perspiciatis, veritatis? Distinctio commodi exercitationem
                recusandae provident veniam? Mollitia magni voluptates, non, quo
                blanditiis atque eum fugiat numquam neque sequi dolores nemo.
              </p>
            </div>
          </div>
        </section>

        <section className="project-info">
          <div className="container">
            <div className="col">
              <h3>Results</h3>
            </div>
            <div className="col">
              <div className="stat">
                <h1>82,8K</h1>
                <span>Reel Plays</span>
              </div>

              <div className="stat">
                <h1>2,9K</h1>
                <span>Total Engagement</span>
              </div>

              <div className="stat">
                <h1>39,2K</h1>
                <span>Total Reach</span>
              </div>

              <div className="stat">
                <h1>428</h1>
                <span>New Followers</span>
              </div>

              <div className="stat">
                <h1>155,1K</h1>
                <span>Impressions</span>
              </div>

              <div className="stat">
                <h1>3K</h1>
                <span>Likes</span>
              </div>
            </div>
          </div>
        </section>

        <section className="project-preview-img">
          <div className="project-preview-img-wrapper">
            <img src="/project/project-info-1.jpg" alt="" />
          </div>
        </section>

        <section className="project-info project-info-outro">
          <div className="container">
            <div className="col">
              <h3>Tactics</h3>
            </div>
            <div className="col">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                voluptate sapiente quisquam laboriosam nam sequi illo excepturi
                sint? Perspiciatis, veritatis? Distinctio commodi exercitationem
                recusandae provident veniam? Mollitia magni voluptates, non, quo
                blanditiis atque eum fugiat numquam neque sequi dolores nemo.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                voluptate sapiente quisquam laboriosam nam sequi illo excepturi
                sint? Perspiciatis, veritatis? Distinctio commodi exercitationem
                recusandae provident veniam? Mollitia magni voluptates, non, quo
                blanditiis atque eum fugiat numquam neque sequi dolores nemo.
              </p>
            </div>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
};

export default page;
