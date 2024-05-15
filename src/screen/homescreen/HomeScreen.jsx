import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

import 'font-awesome/css/font-awesome.min.css'
import { FaAmazon, FaBacteria, FaEarthAfrica, FaFacebook, FaInstagram, FaQuestion, FaShield, FaXTwitter } from 'react-icons/fa6'
import { FaPlayCircle, FaSave } from 'react-icons/fa'

const HomeScreen = () => {
    return (

        <>
            <Container fluid className='bg-color'>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={6} className=' '>
                            <div className='d-flex flex-column gap-2'>
                                <h1 className='text-primary fw-bold ti'>Antivirus <br />
                                    Mask Store</h1>
                                <p>The easiest way to protect yourself</p>
                                <Row>
                                    <Col xs={4}>Anti-Bacterial</Col>
                                    <Col xs={4}>Anti-Virus</Col>
                                </Row>
                                <div className='py-2'>
                                    <a href="" className='btn btn-warning p-2 text-white'>Shop Now</a>
                                </div>


                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='position-relative'>
                                <div className='position-absolute d-flex flex-column bg-warning px-4 py-3 item text-white'>
                                    <div>
                                        Only
                                    </div>
                                    <div>$25</div>
                                </div>
                                <img src={require('../../images/product1.jpg')} alt="" className='w-100' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container className='py-5'>
                <Row className=''>
                    <Col lg={4}>
                        <div className='position-relative out'>
                            <img src={require("../../images/mbr.jpeg")} alt="" className='w-100' />
                            <div className='position-absolute d-flex flex-column align-items-center heading'>
                                <div className='py-4'>
                                    <p className='btn btn-pill bg-success text-white px-3'>New</p>
                                    <h3>Antivirus <br />Mask</h3>
                                    <Button className='btn btn-primary text-white w-100'>More</Button>
                                </div>

                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className='position-relative out'>
                            <img src={require("../../images/mbr-2.jpg")} alt="" className='w-100' />
                            <div className='position-absolute d-flex flex-column align-items-center heading'>
                                <div className='py-4'>
                                    <h3 className='text-primary'>Antivirus <br />Mask</h3>
                                    <p className='text-warning'>-30%</p>
                                    <Button className='btn btn-primary text-white w-100'>More</Button>
                                </div>

                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className='position-relative out'>
                            <img src={require("../../images/mbr-3.jpg")} alt="" className='w-100' />
                            <div className='position-absolute d-flex flex-column align-items-center heading'>
                                <div className='py-4'>
                                    <h3 className='text-primary'>Antivirus <br />Mask</h3>
                                    <p className='text-warning'>-30%</p>
                                    <Button className='btn btn-primary text-white w-100'>More</Button>
                                </div>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container fluid className='bg-color py-5'>
                <Container className='text-primary'>
                    <div className='d-flex flex-column text-center gap-5 aa'>
                        <h1 className=' title'>Effective and reliable <br />
                            protection for your</h1>
                        <p className='data'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div>
                            <Row className=''>
                                <Col lg={4}>
                                    <div className='d-flex flex-column gap-2'>
                                        <div className='icon'>
                                            <FaEarthAfrica></FaEarthAfrica>
                                        </div>
                                        <h2>Anti-Virus</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur earum quidem reiciendis</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className='d-flex flex-column gap-2'>
                                        <div className='icon'>
                                            <FaBacteria></FaBacteria>

                                        </div>
                                        <h2>Anti-Virus</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur earum quidem reiciendis</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className='d-flex flex-column gap-2'>
                                        <div className='icon'>

                                            <FaShield></FaShield>
                                        </div>
                                        <h2>Safety</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur earum quidem reiciendis</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </Container>

            {/* Effective & Reliable  */}
            <Container className='py-5'>
                <Row className='align-items-center'>
                    <Col lg={6}>
                        <div className='d-flex flex-column gap-3 text-primary'>
                            <h1>Effective & <br></br>reliable <br></br> protection</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <div>

                                <a href='' className='btn btn-warning text-white px-3'>About</a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className=''>
                            <img src={require("../../images/features1.jpg")} alt="" className='w-100' />

                        </div>
                    </Col>
                </Row>
            </Container>

            {/* 100% Secure */}
            <Container fluid className='bg-color py-4'>
                <Container>
                    <div className='position-relative'>
                        <img src={require("../../images/background2.jpg")} alt="" className='img img-fill' />
                    </div>
                </Container>
            </Container>
            <Container>

                <h2 className='py-5 text-center'>Featured Products</h2>
                <Row>
                    <Col lg={3}>
                        <div>
                            <Card className='text-primary'>
                                <div>
                                    <Card.Img variant="top" src={require("../../images/background2.jpg")} />

                                </div>
                                <Card.Body>
                                    <Card.Title>Basic Mask</Card.Title>
                                    <Card.Text>
                                        <h2 >
                                            $1.99
                                        </h2>

                                    </Card.Text>

                                </Card.Body>
                            </Card>

                        </div>

                    </Col>
                    <Col lg={3}>
                        <div>
                            <Card className='text-primary'>
                                <div>
                                    <Card.Img variant="top" src={require("../../images/background2.jpg")} />

                                </div>
                                <Card.Body>
                                    <Card.Title>Basic Mask</Card.Title>
                                    <Card.Text>
                                        <h2 >
                                            $1.99
                                        </h2>

                                    </Card.Text>

                                </Card.Body>
                            </Card>

                        </div>

                    </Col>
                    <Col lg={3}>
                        <div>
                            <Card className='text-primary'>
                                <div>
                                    <Card.Img variant="top" src={require("../../images/background2.jpg")} />

                                </div>
                                <Card.Body>
                                    <Card.Title>Basic Mask</Card.Title>
                                    <Card.Text>
                                        <h2 >
                                            $1.99
                                        </h2>

                                    </Card.Text>

                                </Card.Body>
                            </Card>

                        </div>

                    </Col>
                    <Col lg={3}>
                        <div>
                            <Card className='text-primary'>
                                <div>
                                    <Card.Img variant="top" src={require("../../images/background2.jpg")} />

                                </div>
                                <Card.Body>
                                    <Card.Title>Basic Mask</Card.Title>
                                    <Card.Text>
                                        <h2 >
                                            $1.99
                                        </h2>

                                    </Card.Text>

                                </Card.Body>
                            </Card>

                        </div>

                    </Col>

                </Row>
            </Container>

            <Container fluid className='bg-color py-5 my-5'>
                <div className='text-center text-primary'>
                    <h2>Join our newsletter and <br></br>
                        get $20 discount</h2>

                </div>
            </Container>
            {/* watch video */}
            <Container className='py-3'>
                <h2 className='text-center text-primary'>Watch Video</h2>
                <div className='position-relative py-2'>
                    <img src={require("../../images/background2.jpg")} alt="" className='w-100' />
                    <div className='position-absolute ply-btn'>
                        <FaPlayCircle></FaPlayCircle>
                    </div>
                </div>

            </Container>

            {/* Latest Reviews */}

            <Container fluid className='bg-color py-5'>
                <Container>
                    <div className='text-primary d-flex gap-2 text-center data'>
                        <div>"</div>
                        <div> Latest Reviews</div>
                    </div>
                    <Row className='my-4'>
                        <Col lg={3}>
                            <div className='bg-white text-primary px-3 py-2'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque vel facilis natus accusantium repudiandae ipsam sequi placeat ut et inventore. Commodi eveniet tenetur facilis ut esse corrupti voluptatum accusantium corporis!</p>
                                <p>John Smith</p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='bg-white text-primary px-3 py-2'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque vel facilis natus accusantium repudiandae ipsam sequi placeat ut et inventore. Commodi eveniet tenetur facilis ut esse corrupti voluptatum accusantium corporis!</p>
                                <p>John Smith</p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='bg-white text-primary px-3 py-2'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque vel facilis natus accusantium repudiandae ipsam sequi placeat ut et inventore. Commodi eveniet tenetur facilis ut esse corrupti voluptatum accusantium corporis!</p>
                                <p>John Smith</p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='bg-white text-primary px-3 py-2'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque vel facilis natus accusantium repudiandae ipsam sequi placeat ut et inventore. Commodi eveniet tenetur facilis ut esse corrupti voluptatum accusantium corporis!</p>
                                <p>John Smith</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            {/* map */}
            <Container className='py-5'>
                <Row>
                    <Col lg={5}>
                        <div className='d-flex flex-column text-primary gap-5'>
                            <div>
                                <h1>How can we <br />help you?</h1>
                                <p>We are at your disposal 7 days a week!</p>
                            </div>
                            <div>
                                <h1>989-879-0847</h1>
                                <p>Monday – Friday: 9:00-20:00</p>
                                <p>Saturday: 11:00 – 15:00</p>
                                <div className='text-center mail py-3'>contact@yoursite.com</div>

                            </div>
                            <div>
                                <div className='d-flex gap-2 icon'>
                                    <FaFacebook></FaFacebook>
                                    <FaXTwitter></FaXTwitter>
                                    <FaInstagram></FaInstagram>
                                    <FaAmazon></FaAmazon>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className='map'>

                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12090.453705139798!2d-73.985663!3d40.748531!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9ac1f1b85%3A0x7e33d1c0e7af3be4!2s350%205th%20Ave%2C%20New%20York%2C%20NY%2010118!5e0!3m2!1sen!2sus!4v1715786894859!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-100' ></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomeScreen