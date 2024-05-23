import { Form, Formik } from 'formik'
import React from 'react'
import { ApiExecute } from '../../../../ApiExeService'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='px-3 py-3'>

                <h2>
                    Add New Product
                </h2>

                <Formik
                    initialValues={
                        {
                            name: "",
                            price: 1,
                            rating: 3
                        }
                    }

                    onSubmit={async (values, { setSubmitting }) => {
                        // alert(JSON.stringify(values))
                        await ApiExecute("products", "POST", {
                            data: values
                        })
                        setSubmitting(false);
                        navigate("/admin-panel/product")
                    }}
                >
                    {({ values, handleChange, handleBlur }) => (

                        <Form>

                            <div className='mb-3'>
                                <label className='form-label'>
                                    Name
                                </label>
                                <input type='text' className='form-control'
                                    placeholder='Enter Product Name'
                                    name='name'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>
                                    Price
                                </label>
                                <input type='number' className='form-control'
                                    placeholder='Enter Product Price'
                                    name='price'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>
                                    Rating
                                </label>
                                <select name='rating' id='' className='form-control' onChange={handleChange} onBlur={handleBlur}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>

                            <div className='mb-3'>

                                <button className='btn btn-success'> Save </button>
                            </div>
                        </Form>
                    )
                    }
                </Formik>

            </div>

        </>

    )
}

export default AddProduct