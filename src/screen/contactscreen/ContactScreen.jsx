import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaMailBulk, FaPhone } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'

const ContactScreen = () => {
    return (
        <>
            <div className='bg-primary py-3 text-primary'>
                <Container>
                    <div className='text-white'>Home / Contact-Us </div>
                </Container>

            </div>
            <Container className='text-primary py-5'>
                <Row>
                    <Col lg={6}>
                        <h1>Get in Touch</h1>
                        <div className='d-flex flex-column gap-3'>
                            <div className='d-flex gap-2 flex-column'>
                                <h4>Name (Required)</h4>
                                <div className='w-100'>
                                    <input></input>
                                </div>
                            </div>
                            <div className='d-flex gap-2 flex-column'>
                                <h4>Email (Required)</h4>
                                <div className='w-100'>
                                    <input></input>
                                </div>
                            </div>
                            <div className='d-flex gap-2 flex-column'>
                                <h4>Message (Required)</h4>
                                <div className='w-100'>
                                    <textarea rows={10} cols={60}></textarea>
                                </div>
                            </div>

                            <div>
                                <button className='btn btn-primary text-white btn-pill border-0'>Send</button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>

                        <div className='d-flex flex-column gap-5'>
                            <div className='d-flex gap-2 '>
                                <div> <FaPhone></FaPhone>  </div>
                                <div>+91-12345-12345</div>
                            </div>

                            <div className='d-flex gap-2 '>
                                <div> <FaMailBulk></FaMailBulk>  </div>
                                <div>admin@gmail.com</div>
                            </div>

                            <div className='d-flex gap-2 '>
                                <div> <FaLocationPin></FaLocationPin>  </div>
                                <div>Plat no 1, High Court Jodhpur (Raj.)</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ContactScreen