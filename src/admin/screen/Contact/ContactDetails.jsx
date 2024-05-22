import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { FaDeleteLeft } from 'react-icons/fa6'
import { FcViewDetails } from 'react-icons/fc'

const ContactDetails = () => {
    return (
        <>
            <div className='px-3 py-3'>
                <h2>
                    Contact Details

                </h2>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Sr. No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Update</th>
                            <th>Delete</th>
                            <th>Details</th>



                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Customre Name</td>
                            <td>admin@gmail.com</td>
                            <td>Try.....! Message</td>
                            <td><FaEdit /> Edit</td>
                            <td><FaDeleteLeft /> Delete</td>
                            <td><FcViewDetails /> Details</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ContactDetails