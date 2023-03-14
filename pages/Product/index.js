import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "../../components/UI/SectionSubtitle";
import ProductItem from "../../components/UI/ProductItem";

function Product () {
const [data, setData] = useState([])

async function getData(){
  try{
    const fetchData = async () => {
      const response = await fetch("https://api.jsonbin.io/v3/b/640fba87ebd26539d08e2da7");
      const data = await response.json();
      setData(data.record);
    };
    fetchData();
  } 
    catch (err){
    console.log(err);
  }
}

useEffect(() => {
  getData()
},[]);

  return (
    <section id="product">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle=" My product" />
            <h4 className="mt-4">Meet our Newest Collection for this seasons that was Made Just for You ❤️</h4>
          </Col>

          <Col lg="6" md="6"></Col>

          {
          data?.map((item) => (
            <Col lg="4" md="4" sm="6" key={item.id}>
              <ProductItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
          }
export default Product;
