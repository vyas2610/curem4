import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { ApiExecute } from "../../ApiExeService";
import { FaRegStar, FaStar } from "react-icons/fa";

const ProductScreen = () => {
  const [Product, setProduct] = useState([]);
  const fetchProducts = async () => {
    let response = await ApiExecute("products");
    setProduct(response.data);
  };

  const ratingStart = (rating = 1) => {
    let ratingArr = [];
    for (let i = 1; i <= 5; i++) {
      ratingArr.push(i <= rating ? "fill" : "blank");
    }
    return ratingArr;
  };

  useEffect(() => {
    fetchProducts();
  });
  return (
    <>
      <div className="bg-primary py-3 text-primary">
        <Container>
          <div className="text-white">Home / Products </div>
        </Container>
      </div>
      <Container className="py-2">
        <div className="text-primary">
          <h2 className="text-uppercase text-center">Our Products</h2>
        </div>

        <Row className="py-5">
          {Product.map((pro, index) => (
            <Col lg={4} key={index}>
              <Card className="py-3 px-3 border-0">
                <Card.Img
                  variant="top"
                  src={require("../../images/mbr.jpeg")}
                ></Card.Img>
                <Card.Title className="py-2">{pro.name}</Card.Title>
                <Card.Text className="py-1">
                  <p>Price : ${pro.price}</p>
                  <p>
                    Rating :
                    {ratingStart(pro.rating).map((type, ind) => (
                      <span className="text-warning">
                        {type === "fill" ? <FaStar /> : <FaRegStar />}
                      </span>
                    ))}
                  </p>
                </Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default ProductScreen;
