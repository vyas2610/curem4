import React from 'react'

const AddProduct = () => {
    return (
        <>
            <div className='px-3 py-3'>

                <h2>
                    Add New Product
                </h2>
                <form action="" method='post'>

                    <div className='mb-3'>
                        <label className='form-label'>
                            Name
                        </label>
                        <input type='text' className='form-control' placeholder='Enter Product Name' />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>
                            Price
                        </label>
                        <input type='text' className='form-control' placeholder='Enter Product Price' />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>
                            Rating
                        </label>
                        <select name='' id='' className='form-control'>
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
                </form>

            </div>

        </>

    )
}

export default AddProduct