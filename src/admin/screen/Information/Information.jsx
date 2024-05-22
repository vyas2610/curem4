import React from 'react'

const Information = () => {
    return (
        <>
            <div className='px-3 py-3'>
                <h2>
                    General Information

                </h2>
                <div className='px-3 py-3'>

                    <form action="" method='post'>
                        <div className='mb-3'>
                            <input type="text" class="form-control" id="" placeholder="989 879 0847" />

                        </div>
                        <div className='mb-3'>
                            <input type="text" className="form-control" id="" placeholder="12345 12345" />

                        </div>
                        <div className='mb-3'>
                            <input type="mail" className="form-control" id="" placeholder="admin@gmail.com" />

                        </div>
                        <div className='mb-3'>
                            <textarea rows={6} cols={3} className='form-control' placeholder='Plot No 1, High Court Jodhpur (Raj.)'></textarea>

                        </div>

                        <div className='mb-3'>
                            <input type="text" className="form-control" id="" placeholder="www.facebook.com" />

                        </div>
                        <div className='mb-3'>
                            <input type="text" className="form-control" id="" placeholder="www.x.com" />

                        </div>
                        <div className='mb-3'>
                            <input type="text" className="form-control" id="" placeholder="www.instagram.com" />

                        </div>
                        <div className='mb-3'>

                            <button className='btn btn-success'> Update Information </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Information