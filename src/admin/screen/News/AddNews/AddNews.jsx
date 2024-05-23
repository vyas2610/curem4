import { Form, Formik } from 'formik'
import React from 'react'
import { ApiExecute } from '../../../../ApiExeService'
import { useNavigate } from 'react-router-dom'

const AddNews = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='px-3 py-3'>

                <h2>
                    Add News   </h2>
                <Formik
                    initialValues={{
                        news_name: "New-1",
                        news_desc: "Enter News Desc"
                    }}

                    onSubmit={async (values, { setSubmitting }) => {
                        await ApiExecute("news", "POST", { data: values })
                        setSubmitting(false);
                        navigate("/admin-panel/news")
                    }}


                >
                    {
                        ({ values, handleChange,
                            handleBlur, }) => (

                            <Form>

                                <div className='mb-3'>
                                    <label className='form-label'>
                                        News Title
                                    </label>
                                    <input type='text' className='form-control'
                                        placeholder='Enter Product Name'
                                        value={values.news_name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name='news_name'
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>
                                        News Description
                                    </label>
                                    <textarea className='form-control' rows={8} cols={3}
                                        value={values.news_desc}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name='news_desc'
                                    ></textarea>
                                </div>

                                <div className='mb-3'>

                                    <button className='btn btn-success'> Add News </button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>


            </div>
        </>
    )
}

export default AddNews