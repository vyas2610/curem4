import React from 'react'
import { Container } from 'react-bootstrap'

const ProductScreen = () => {
    return (
        <>
            <div className='bg-primary py-3 text-primary'>
                <Container>
                    <div className='text-white'>Home / Products </div>
                </Container>
            </div>
            <Container className='py-2'>
                <div className='text-primary'>

                    <h2 className='text-uppercase text-center'>Our Products</h2>
                </div>
            </Container>

        </>
    )
}
export default ProductScreen