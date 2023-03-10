import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Contact Us</h3>
            <p>
            To create your dream sofa design, we are ready to serve professionally, quickly and with the best quality🙌
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Turen - Malang</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>boosycen@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+62 812 4969 9404</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link href="https://www.youtube.com/channel/UCLq-5JKvBjn0yylVBEEagDg">
                <i className="ri-youtube-line"></i>
              </Link>

              <Link href="https://github.com/griseldapc">
                <i className="ri-github-line"></i>
              </Link>

              <Link href="https://www.linkedin.com/in/griselda-putri-45494b268/">
                <i className="ri-linkedin-line"></i>
              </Link>

              <Link href="https://instagram.com/griseldaputric?igshid=YmMyMTA2M2Y=">
                <i className="ri-instagram-line"></i>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
