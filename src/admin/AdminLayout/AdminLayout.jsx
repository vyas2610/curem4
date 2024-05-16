import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "../../css/admin-style.scss"

const AdminLayout = () => {
    return (
        <>
            <div className='d-flex  vh-100 bg-primary'>
                <aside className=''>
                    <div className='bg-white d-flex logo align-items-center gap-2 p-3'>
                        <img src={require("../../images/logo.png")} alt="" />
                        <div className='fw-bold fs-3'>CureM4</div>
                    </div>
                    <div>
                        <ul className='admin-nav'>
                            <li>
                                <Link>DashBoard</Link>
                            </li>
                            <li>
                                <Link>Products</Link>
                                <ul>
                                    <li>
                                        <Link to='product/create'>Add Products</Link>
                                    </li>
                                    <li>
                                        <Link to='product'>View Products</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link></Link>
                            </li>
                            <li>
                                <Link></Link>
                            </li>
                            <li>
                                <Link></Link>
                            </li>
                        </ul>
                    </div>
                </aside>
                <div className='bg-warning flex-grow-1 '>

                    <h1>Admin Panel</h1>
                    <main>
                        <Outlet />
                    </main>
                </div>

            </div>
        </>
    )
}

export default AdminLayout