import { Fragment } from "react";
import Hero from "../components/UI/Hero";
import About from "../components/UI/About";
import Testimonial from "../components/UI/Testimonial";
import Contact from "../components/UI/Contact";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <About />
      <Testimonial />
      <Contact />
    </Fragment>
  );
}
