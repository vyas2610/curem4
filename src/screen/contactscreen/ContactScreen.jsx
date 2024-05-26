import { Form, Formik } from "formik";
import React from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { FaMailBulk, FaPhone } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { ApiExecute } from "../../ApiExeService";
import { useNavigate } from "react-router-dom";

const ContactScreen = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-primary py-3 text-primary">
        <Container>
          <div className="text-white">Home / Contact-Us </div>
        </Container>
      </div>
      <Container className="text-primary py-5">
        <Row>
          <Col lg={6}>
            <h1>Get in Touch</h1>

            <Formik
              initialValues={{
                con_name: "Deepak",
                con_email: "admin@gmail.com",
                con_msg: "This is sample Task...!",
              }}
              onSubmit={async (values, { setSubmitting }) => {
                await ApiExecute("contact", "POST", { data: values });
                navigate("/");
                setSubmitting(false);
              }}
            >
              {({ values, handleChange, handleBlur }) => (
                <Form>
                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex gap-2 flex-column">
                      <h4>Name (Required)</h4>
                      <div className="w-100">
                        <input
                          className="form-controls"
                          value={values.con_name}
                          name="con_name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        ></input>
                      </div>
                    </div>
                    <div className="d-flex gap-2 flex-column">
                      <h4>Email (Required)</h4>
                      <div className="w-100">
                        <input
                          value={values.con_email}
                          name="con_email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        ></input>
                      </div>
                    </div>
                    <div className="d-flex gap-2 flex-column">
                      <h4>Message (Required)</h4>
                      <div className="w-100">
                        <textarea
                          rows={10}
                          cols={60}
                          value={values.con_msg}
                          name="con_msg"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        ></textarea>
                      </div>
                    </div>

                    <div>
                      <button className="btn btn-primary text-white btn-pill border-0">
                        Send
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </Col>
          <Col lg={6}>
            <div className="d-flex flex-column gap-5">
              <div className="d-flex gap-2 ">
                <div>
                  {" "}
                  <FaPhone></FaPhone>{" "}
                </div>
                <div>+91-12345-12345</div>
              </div>

              <div className="d-flex gap-2 ">
                <div>
                  {" "}
                  <FaMailBulk></FaMailBulk>{" "}
                </div>
                <div>admin@gmail.com</div>
              </div>

              <div className="d-flex gap-2 ">
                <div>
                  {" "}
                  <FaLocationPin></FaLocationPin>{" "}
                </div>
                <div>Plat no 1, High Court Jodhpur (Raj.)</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactScreen;
