import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/about.jpg";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">Find Your Dream Furniture Soft-Fa</h2>
              <h5 className="mb-4">One for all solution, for furniture sofa shop</h5>
              <p>
                Experience the Art of Comfort with Our Timeless Sofa Design.
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="#">BUY NOW</Link>
                </button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="400" height="400" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
