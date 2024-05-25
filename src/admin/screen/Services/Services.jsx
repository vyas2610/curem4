import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { FcViewDetails } from "react-icons/fc";
import { ApiExecute } from "../../../ApiExeService";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Services = () => {
  const DeleteData = async (id) => {
    await ApiExecute(`services/${id}`, "DELETE");
    fetechServices();
  };
  const [Services, UpdateServices] = useState([]);
  async function fetechServices() {
    let response = await ApiExecute("services");
    UpdateServices(response.data);
  }
  useEffect(() => {
    fetechServices();
  }, []);
  return (
    <>
      <div className="px-3 py-3">
        <h2>View Services</h2>
        {
          //      JSON.stringify(Services)
        }
        <table className="table">
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Name</th>
              <th>Description</th>
              <th>Update</th>
              <th>Delete</th>
              <th>Details</th>
            </tr>
          </thead>

          <tbody>
            {Services.map((Ser, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{Ser.ser_name}</td>
                <td>{Ser.ser_desc}</td>
                <td>
                  <Button
                    className="btn btn-primary"
                    as={Link}
                    to={"edit/" + Ser.ser_id}
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <Button
                    className="btn btn-danger"
                    onClick={() => DeleteData(Ser.ser_id)}
                  >
                    Delete
                  </Button>
                </td>
                <td>
                  <FcViewDetails /> Details
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Services;
