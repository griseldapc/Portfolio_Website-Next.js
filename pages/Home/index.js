import React, { useState } from "react";
import SectionSubtitle from "../../components/UI/SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/putih.png";
import classes from "../../styles/hero.module.css";
import product from "../Product/product.json";
import styles from "../../styles/product-item.module.css"



const Hero = () => {
  const [data] = useState(product)

  const favorit = data.filter((e) => e.fav === true)
  return (
    <>

      <div className={`${classes.hero}`}>
        <Container>
          <Row>
            {/* ========== hero content ============= */}
            <Col lg="6" md="6">
              <div className={`${classes.hero__content}`}>
                <SectionSubtitle subtitle="Produk teratas dengan kualitas tanpa batas" />
                <h2 className="mt-3 mb-3">We believe in the best quality over a great smile</h2>
                <p>
                  Website ini menyediakan berbagai jenis Sofa yang sesuai dengan keinginan anda.
                  <br></br>Kualitas terbaik dijamin puas.
                </p>
                <div className="mt-5">
                  <button className="primary__btn">
                    <Link href="#About.jsx">Hire me</Link>
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
      </div>

      <Container>
        <Row>
          <Col lg="6" md="6" className={styles.fav_title}>
            <SectionSubtitle subtitle=" My product" />
            <h4 className="mt-4">These are some of the newest and most favorite products</h4>
          </Col>
        </Row>
      </Container>

      <section id="Product" className={styles.card_home}>
        {favorit.map((item, index) => (
          <Link href={`/${item.id}`} key={item.id}>
            <div className={`${styles.product__item}`}>
              <div className="bg-transparent">
                <h6 className="">{item.title}</h6>

                <span className={`${styles.product__keyword}`} >
                  {item.category}
                </span>
              </div>

              <div className={`${styles.product__img}`}>
                <Image alt="product-img" src={item.img} width="380" height="250" />
              </div>

            </div>
          </Link>
        ))}
      </section>

      <section>
        
      </section>

    </>
  );
};

export default Hero;
