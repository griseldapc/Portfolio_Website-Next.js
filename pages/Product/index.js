import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "../../components/UI/SectionSubtitle";
import classes from "../../styles/portfolio.module.css";
import ProductItem from "../../components/UI/ProductItem";
import product from "../../components/product.json";

const Product = () => {
console.log(product);

  return (
    <section id="product">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle=" My product" />
            <h4 className="mt-4">Meet our Newest Collection for this seasons that was Made Just for You ❤️</h4>
          </Col>

          <Col lg="6" md="6">
          </Col>

          {product?.map((item) => (
            <Col lg="4" md="4" sm="6" key={item.id}>
              <ProductItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Product;
