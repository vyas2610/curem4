import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ApiExecute } from "../../ApiExeService";

const ServiceScreen = () => {
  useEffect(() => {
    fetchService();
  }, []);
  const [Service, SetServices] = useState([]);
  const fetchService = async () => {
    let response = await ApiExecute("services");

    SetServices(response.data);
  };
  return (
    <>
      <div className="bg-primary py-3 text-primary">
        <Container>
          <div className="text-white">Home / Services </div>
        </Container>
      </div>
      <Container className="py-2">
        <div className="text-primary">
          <h2 className="text-uppercase text-center">Our Services</h2>
        </div>
        <Row className="py-3">
          {Service.map((ser, index) => (
            <Col lg={4}>
              <div className="text-primary service" key={index}>
                <div>
                  <img
                    src={require("../../images/product1.jpg")}
                    alt=""
                    className="w-100"
                  />
                </div>
                <h3 className="text-warning text-center text-uppercase">
                  {ser.ser_name}
                </h3>
                <p>{ser.ser_desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ServiceScreen;
