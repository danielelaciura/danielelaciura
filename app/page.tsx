import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatMakesDifferent from "./components/WhatMakesDifferent";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";
import CallToAction from "./components/CallToAction";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <WhatMakesDifferent />
      <Portfolio />
      <Testimonials />
      <AboutUs />
      <CallToAction />
      <FAQ />
      <Footer />
    </main>
  );
}
