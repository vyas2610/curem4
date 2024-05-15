import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const NewsScreen = () => {
    return (
        <>
            <div className='bg-primary py-3 text-primary'>
                <Container>
                    <div className='text-white'>Home / News </div>
                </Container>
            </div>
            <Container className='py-2'>
                <div className='text-primary'>

                    <h2 className='text-uppercase text-center'>Our News</h2>
                </div>

                <Row className='py-3'>
                    <Col lg={4}>
                        <div className='text-primary service'>
                            <div>
                                <img src={require("../../images/product1.jpg")} alt="" className='w-100' />

                            </div>
                            <h3 className='text-warning text-center text-uppercase'>News 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora ratione perferendis porro dolore quas blanditiis molestiae commodi iure ut velit quasi veritatis est, aperiam eaque deleniti quo et minima inventore. Quae ut asperiores distinctio dignissimos. Libero facilis veniam odit laudantium, iusto nulla possimus, animi ducimus eos aliquid assumenda, modi explicabo. Vitae cum doloremque expedita suscipit ea molestias inventore nam sunt.</p>

                            <div className='text-center'>
                                <a href="" className='btn btn-warning text-white'>Show More</a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className='text-primary service'>
                            <div>
                                <img src={require("../../images/product1.jpg")} alt="" className='w-100' />

                            </div>
                            <h3 className='text-warning text-center text-uppercase'>News 2</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora ratione perferendis porro dolore quas blanditiis molestiae commodi iure ut velit quasi veritatis est, aperiam eaque deleniti quo et minima inventore. Quae ut asperiores distinctio dignissimos. Libero facilis veniam odit laudantium, iusto nulla possimus, animi ducimus eos aliquid assumenda, modi explicabo. Vitae cum doloremque expedita suscipit ea molestias inventore nam sunt.</p>
                            <div className='text-center'>
                                <a href="" className='btn btn-warning text-white'>Show More</a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className='text-primary service'>
                            <div>
                                <img src={require("../../images/product1.jpg")} alt="" className='w-100' />

                            </div>
                            <h3 className='text-warning text-center text-uppercase'>News 3</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora ratione perferendis porro dolore quas blanditiis molestiae commodi iure ut velit quasi veritatis est, aperiam eaque deleniti quo et minima inventore. Quae ut asperiores distinctio dignissimos. Libero facilis veniam odit laudantium, iusto nulla possimus, animi ducimus eos aliquid assumenda, modi explicabo. Vitae cum doloremque expedita suscipit ea molestias inventore nam sunt.</p>
                            <div className='text-center'>
                                <a href="" className='btn btn-warning text-white'>Show More</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default NewsScreen