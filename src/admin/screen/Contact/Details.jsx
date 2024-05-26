import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiExecute } from "../../../ApiExeService";

const Details = () => {
  const { id } = useParams();
  const [Detail, UpdateDetail] = useState([]);
  const fetchDetails = async (id) => {
    let response = await ApiExecute(`contact/${id}`);
    UpdateDetail(response.data);
  };
  useEffect(() => {
    fetchDetails(id);
  }, []);
  return (
    <>
      <div className="px-3 py-3">
        <h2>Details | {Detail.con_name} </h2>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Msg</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{Detail.con_name}</td>
              <td>{Detail.con_email}</td>
              <td>{Detail.con_msg}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Details;
