import Head from "next/head";
import About from "../components/home/About";
import Counters from "../components/home/Counters";
import FeaturedListings from "../components/home/FeaturedListings";
import Hero from "../components/home/Hero";
import MainFocus from "../components/home/MainFocus";
import OurAminities from "../components/home/OurAminities";
import OurTestimonial from "../components/home/OurTestimonial";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Real Estate Site My Newzai Developers Real Estate Faizabad Ayodhya ,Newzai Developers Ayodhya Faizabad."
        />
         <meta name="keywords" content="Property Ayodhya Faizabad Newzai" />
         <meta name="google" content="newzai developers ayodhya land in ayodhya faizabad" />
         //high seo content
        <meta name="google-si" content="newzai developers ayodhya land in ayodhya faizabad" />
      </Head>
      <Hero />
      <About />
      <Counters />
      <MainFocus />
      <FeaturedListings />
      <OurAminities />
      <OurTestimonial />
    </div>
  );
}
