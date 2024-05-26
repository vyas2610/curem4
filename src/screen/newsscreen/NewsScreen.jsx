import React, { useEffect, useState } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { ApiExecute } from "../../ApiExeService";

const NewsScreen = () => {
  useEffect(() => {
    fetchNews();
  }, []);
  const [News, setNews] = useState([]);
  const fetchNews = async () => {
    let response = await ApiExecute("news");
    setNews(response.data);
  };
  return (
    <>
      <div className="bg-primary py-3 text-primary">
        <Container>
          <div className="text-white">Home / News </div>
        </Container>
      </div>
      <Container className="py-2">
        <div className="text-primary">
          <h2 className="text-uppercase text-center">Our News</h2>
        </div>

        <Row className="py-3">
          {News.map((n, index) => (
            <Col lg={4} key={index} className="py-3">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>{n.news_name}</Accordion.Header>
                  <Accordion.Body>{n.news_desc}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default NewsScreen;
