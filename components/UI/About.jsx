import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";
import classes from "../../styles/about.module.css";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="About Soft-Fa" />
            <h3 className="mt-4">Masterpieces crafted from high quality materials.</h3>
            <p>
                                  Since 2023, Soft-Fa has been producing ecological furniture. We support minimalist modern design and a sustainable design approach.
            </p>
            <p>
                                  These are some customer request designs that are in the process of being worked on.
            </p>

            <div className=" d-flex align-items-center gap-5">
              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Friendly and Fast Service
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Affordable Prices
                </h6>
              </div>

              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Creative Idea
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  High Quality
                </h6>
              </div>
            </div>

          </Col>

          <Col lg="6">
            <div
              className={`${classes.about__img__gallery} d-flex gap-4 justify-content-end`}
            >
              <div className=" d-flex flex-column mb-3">
                <div
                  className={`${classes.about__img}`}
                >
                  <Image src="/images/sofa1.jpg" alt="about-img" width={200} height={200}/>
                </div>

                <div
                  className={`${classes.about__img}`}
                >
                  <Image src="/images/sofa2.jpg" alt="about-img" width={200} height={200}/>
                </div>
              </div>

              <div className=" d-flex flex-column mb-3">
                <div
                  className={`${classes.about__img}`}
                >
                  <Image src="/images/sofa3.jpg" alt="about-img" width={200} height={200}/>
                </div>

                <div
                  className={`${classes.about__img}`}
                >
                  <Image src="/images/sofa4.jpg" alt="about-img" width={200} height={200}/>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
