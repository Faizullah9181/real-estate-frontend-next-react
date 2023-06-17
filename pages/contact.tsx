import Head from "next/head";
import React from "react";
import BreadCrumb from "../components/common/BreadCrumb";
import ContactCards from "../components/contact/ContactCards";
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
const contact = () => {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Real Estate Site My Newzai Developers. Contact Us"
        />
         <meta name="keywords" content="Property Ayodhya Faizabad Newzai" />
         <DefaultSeo {...SEO} />
      </Head>
      <DefaultSeo {...SEO} />
      <BreadCrumb text="Contact Us" />
      <div className="main-content px-10 py-20 container mx-auto">
        <ContactCards />
        <div className="mt-8 mb-40" id="map">
        </div>
      </div>
    </div>
  );
};

export default contact;
