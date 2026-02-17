import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatMakesDifferent from "./components/WhatMakesDifferent";
import What from "./components/What";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";
import CallToAction from "./components/CallToAction";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Header />
      <div id="home" className="scroll-mt-0" aria-hidden="true" />
      <Hero />
      <What />
      <AboutUs />
      <WhatMakesDifferent />
      <CallToAction />
      <Footer />
    </main>
  );
}
