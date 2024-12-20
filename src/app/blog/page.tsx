import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import BlogGridThree from "../../components/Blog/BlogGridThree";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="Insights That Drive Innovation" BGImage="/images/page-banner3.jpg" />

      <BlogGridThree />

      <Footer />
    </>
  );
}
