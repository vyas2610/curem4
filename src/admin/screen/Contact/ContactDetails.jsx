import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { FcViewDetails } from "react-icons/fc";
import { ApiExecute } from "../../../ApiExeService";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ContactDetails = () => {
  const DeleteMsg = async (id) => {
    await ApiExecute(`contact/${id}`, "DELETE");
    fetchMsg();
  };
  const [Message, UpdateMsg] = useState([]);
  const fetchMsg = async () => {
    let response = await ApiExecute("contact");
    UpdateMsg(response.data);
  };
  useEffect(() => {
    fetchMsg();
  }, []);
  return (
    <>
      <div className="px-3 py-3">
        <h2>Contact Details</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Delete</th>
              <th>Details</th>
            </tr>
          </thead>

          <tbody>
            {Message.map((msg, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{msg.con_name}</td>
                <td>{msg.con_email}</td>
                <td>{msg.con_msg}</td>

                <td>
                  <Button
                    className="btn btn-danger"
                    onClick={() => DeleteMsg(msg.con_id)}
                  >
                    <FaDeleteLeft /> Delete
                  </Button>
                </td>
                <td>
                  <Button
                    className="btn btn-primary"
                    as={Link}
                    to={`details/${msg.con_id}`}
                  >
                    <FcViewDetails /> Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ContactDetails;
