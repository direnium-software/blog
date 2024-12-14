"use client";

import React from "react";
import Link from "next/link";

const servicesData = [
  {
    iconName: "pe-7s-comment bg-13c4a1",
    title: "Software Product Development",
    shortText:
      "End-to-end development of robust, scalable software products designed to meet your unique requirements and grow with your business.",
    viewDetails: "/services/service-details/",
    aosDelay: "100",
  },
  {
    iconName: "pe-7s-display2 bg-6610f2",
    title: "Web Development",
    shortText:
      "Custom websites and web applications with responsive designs, optimized performance, and seamless user experiences.",
    viewDetails: "/services/service-details/",
    aosDelay: "200",
  },
  {
    iconName: "pe-7s-light bg-ffb700",
    title: "MVP Development",
    shortText:
      "Rapid prototyping and development of minimum viable products to help you test your ideas and go to market faster.",
    viewDetails: "/services/service-details/",
    aosDelay: "300",
  },
  {
    iconName: "pe-7s-phone bg-fc3549",
    title: "SaaS Development",
    shortText:
      "Scalable, secure, and feature-rich SaaS solutions tailored to your business model and user needs.",
    viewDetails: "/services/service-details/",
    aosDelay: "400",
  },
  {
    iconName: "pe-7s-cart bg-00d280",
    title: "Artificial Intelligence Integration",
    shortText:
      "Transform your operations with cutting-edge AI solutions, seamlessly integrated to enhance automation, decision-making, and efficiency.",
    viewDetails: "/services/service-details/",
    aosDelay: "500",
  },
  {
    iconName: "pe-7s-users bg-ff612f",
    title: "App Modernization & Cloud",
    shortText:
      "Upgrade and migrate your legacy applications to modern, cloud-based platforms to enhance performance, scalability, and reduce operational costs.",
    viewDetails: "/services/service-details/",
    aosDelay: "600",
  },
];

const ServicesStyleOne: React.FC = () => {
  return (
    <>
      <div className="bg-fcfbfb pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {servicesData &&
              servicesData.map((value, i) => (
                <div className="col-lg-4 col-sm-6" key={i}>
                  <div
                    className="service-card-one"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <i className={value.iconName}></i>
                    <h3>
                      <Link href={value.viewDetails}>{value.title}</Link>
                    </h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesStyleOne;
