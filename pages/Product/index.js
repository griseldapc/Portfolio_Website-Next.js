import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "../../components/UI/SectionSubtitle";
import classes from "../../styles/portfolio.module.css";
import ProductItem from "../../components/UI/ProductItem";
import product from "../../components/product.json";

const Product = () => {
  const [filter, setFilter] = useState("All");
  const [data, setData] = useState();
console.log(product);
  useEffect(() => {
    if (filter === "Light Sofa") {
      const filteredData = product.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }

    if (filter === "Dark Sofa") {
      const filteredData = product.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }

    if (filter === "All") {
      const filteredData = product

      setData(filteredData);
    }
  }, [filter]);

  const active = `${classes.tab__btn__active}`;

  return (
    <section id="product">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle=" My product" />
            <h4 className="mt-4">These are some of the newest and most favorite products</h4>
          </Col>

          <Col lg="6" md="6">
            <div className={`${classes.tab__btns} text-end`}>
            <button
                className={`${
                  filter === "All" ? active : ""
                } secondary__btn text-white`}
                onClick={() => setFilter("All")}
              >
                All
              </button>

              <button
                className={` ${
                  filter === "Light Sofa" ? active : ""
                } secondary__btn text-white`}
                onClick={() => setFilter("Light Sofa")}
              >
                Light Sofa
              </button>

              <button
                className={`${
                  filter === "Dark Sofa" ? active : ""
                } secondary__btn text-white`}
                onClick={() => setFilter("Dark Sofa")}
              >
                Dark Sofa
              </button>
              
            </div>
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
