import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
//import 'font-awesome/css/font-awesome.min.css'
import { FaBeer, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
const Layout = () => {
    return (
        <>
            <header className="bg-primary py-2">
                <Container className="text-center">
                    <div className='text-warning'>Due to the COVID 19 epidemic, orders may be processed with a slight delay</div>
                </Container>

                {/* Nav Bar */}
            </header>
            <Navbar expand="lg" className="bg-body-tertiary shadow navbar-class text-primary">
                <Container>
                    <Navbar.Brand href="#home">
                        <div className='d-flex align-items-center gap-2'>
                            <div>
                                <img src={require('../images/logo.png')} alt="" />
                            </div>
                            <div>CureM4</div>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='' />
                    <Navbar.Collapse id="basic-navbar-nav" className='gap-5'>
                        <Nav className="ms-auto gap-3 text-primary link fw-400" >
                            <Nav.Link to="/" as={Link}>Home</Nav.Link>
                            <Nav.Link to="/about-us" as={Link} >About</Nav.Link>
                            <Nav.Link to="/products" as={Link} >Products</Nav.Link>
                            <Nav.Link to="/services" as={Link} >Services</Nav.Link>
                            <Nav.Link to="/news" as={Link} >News</Nav.Link>
                            <Nav.Link to="/contact-us" as={Link} >Contact Us</Nav.Link>
                        </Nav>

                        <div>Need help? 989-879-0847
                        </div>
                        <div className='d-flex align-items-center gap-3'>
                            <FaFacebookF className='icon text-primary' />
                            <FaXTwitter className='icon text-primary' />
                            <FaInstagram className='icon text-primary' />
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Outlet />

            <Container fluid className='bg-primary py-5'>

                <Container>
                    <Row className='text-white'>
                        <Col lg={2}>
                            <p>About Us</p>
                            <p>Delivery</p>
                            <p>Pravicy Policy</p>
                        </Col>
                        <Col lg={2}>

                            <p>Affilate</p>
                            <p>Sales</p>
                            <p>Terms</p>
                        </Col>
                        <Col lg={2}>

                            <p>Bestsellers</p>
                            <p>Discount</p>
                            <p>Latest Product</p>
                        </Col>
                        <Col lg={2}>

                            <p>My Account</p>
                            <p>My Order</p>
                            <p>Returns</p>
                        </Col>
                        <Col lg={4}>

                            <p>Shipping</p>
                            <p>Wishlist</p>
                        </Col>

                    </Row>

                </Container>
            </Container>
            <Container className='py-3'>
                <Row className='align-items-center'>
                    <Col lg={6}>
                        <div>Copyright 2025 Mobirise. All Rights Reserved</div>
                    </Col>
                    <Col lg={6} className='ms-auto'>
                        <div className='d-flex justify-content-end gap-1'>
                            <img src={require("../../src/images/master-card.png")} alt="" />
                            <img src={require("../../src/images/union-pay.png")} alt="" />
                            <img src={require("../../src/images/ebay.png")} alt="" />
                            <img src={require("../../src/images/discover.png")} alt="" />
                            <img src={require("../../src/images/diners-club.png")} alt="" />
                            <img src={require("../../src/images/bitcoin.png")} alt="" />
                            <img src={require("../../src/images/amazon.png")} alt="" />
                            <img src={require("../../src/images/paypal.png")} alt="" />
                            <img src={require("../../src/images/visa.png")} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Layout