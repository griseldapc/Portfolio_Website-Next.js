import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import network from "../../public/images/Connected world.png";
import Slider from "react-slick";
import classes from "../../styles/testimonial.module.css";

const Testimonial = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2250,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" className={`${classes.testimonial__img}`}>
            <Image alt="network-img" src={network} width="400" height="400" />
          </Col>

          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Testimonials" />
            <h4 className="mt-4 mb-5">What my client says</h4>

            <Slider {...settings}>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/y.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Ibu Peri</h6>
                    <h6>Wonder Woman</h6>
                  </div>
                </div>

                <p>
                Comfortable sofa with friendly and fast service accompanied by affordable prices make me want to continue to be a customer.</p>
                <p>Dont worry if your house is far away, Soft-fa is ready to deliver your order.
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/bapak.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Ayahanda</h6>
                    <h6>Superman</h6>
                  </div>
                </div>
                <p>
                Besides good quality, affordable price, it turns out that Soft-Fa also provides a one-year warranty. <br></br>
                Thank you Soft-Fa, with your design, my house becomes aesthetic.
                </p>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;