import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ApiExecute } from "../../../ApiExeService";
const NewsDetails = () => {
  const { id } = useParams();
  const [news, fnews] = useState([]);
  const fetchNews = async (id) => {
    let response = await ApiExecute(`news/${id}`);
    fnews(response.data);
  };
  useEffect(() => {
    fetchNews(id);
  }, []);
  return (
    <>
      <div className="py-3 px-3">
        <h2>Details | {news.news_name}</h2>
        <Container>
          <Row>
            <Col lg={6}>
              <Table className="table">
                <tbody>
                  <tr>
                    <td>Name</td>
                  </tr>
                  <tr>
                    <td>Desc</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col lg={6}>
              <Table className="table">
                <tbody>
                  <tr>
                    <td>{news.news_name}</td>
                  </tr>
                  <tr>
                    <td>{news.news_desc}</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default NewsDetails;
