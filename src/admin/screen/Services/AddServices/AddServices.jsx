import React from 'react'

const AddServices = () => {
    return (
        <>
            <div className='px-3 py-3'>

                <h2>
                    Add New Service
                </h2>
                <form action="" method='post'>

                    <div className='mb-3'>
                        <label className='form-label'>
                            Service Name
                        </label>
                        <input type='text' className='form-control' placeholder='Enter Product Name' />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>
                            Service Description
                        </label>
                        <textarea className='form-control' rows={8} cols={3}></textarea>
                    </div>

                    <div className='mb-3'>

                        <button className='btn btn-success'> Add Service </button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default AddServices