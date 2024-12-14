"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import aboutImg from '../../../../public/images/about-img2.jpg';

const About: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      {/* @ts-ignore */}
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <section className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div 
                className="about-image"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <Image
                  src={aboutImg}
                  alt="image"
                  className="rounded-10"
                  width={500}
                  height={750}
                />

                <div className="video-box">
                  <div
                    onClick={() => setToggler(!toggler)}
                    className="video-btn"
                  >
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div 
                className="about-content about-content-two"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <div className="section-title">
                  <h2>About Us</h2>
                  <p>
                  At Direnium, we craft reliable and innovative software solutions designed to empower businesses and drive success. With a focus on quality, trust, and scalability, we turn ideas into impactful digital experiences.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Who We Are</h4>
                  <p>
                  Direnium is a team of passionate developers and strategists dedicated to building solutions that solve real-world problems. With expertise in cutting-edge technologies, we help businesses thrive in the digital era.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Our History</h4>
                  <p>
                  From humble beginnings to delivering advanced software solutions, our journey has been about pushing boundaries and embracing innovation. Over the years, we’ve helped clients transform ideas into success stories.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Our Mission</h4>
                  <p>
                  To provide tailored, scalable, and dependable software solutions that empower businesses to grow and succeed. At Direnium, we are driven by innovation and a commitment to delivering excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
