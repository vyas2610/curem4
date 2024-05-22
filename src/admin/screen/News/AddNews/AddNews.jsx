import React from 'react'

const AddNews = () => {
    return (
        <>
            <div className='px-3 py-3'>

                <h2>
                    Add News                 </h2>
                <form action="" method='post'>

                    <div className='mb-3'>
                        <label className='form-label'>
                            News Title
                        </label>
                        <input type='text' className='form-control' placeholder='Enter Product Name' />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>
                            News Description
                        </label>
                        <textarea className='form-control' rows={8} cols={3}></textarea>
                    </div>

                    <div className='mb-3'>

                        <button className='btn btn-success'> Add News </button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default AddNews