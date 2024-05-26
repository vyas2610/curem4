import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { FcViewDetails } from "react-icons/fc";
import { ApiExecute } from "../../../ApiExeService";
import { Button } from "react-bootstrap";

const News = () => {
  const DeleteData = async (id) => {
    console.log(`Id: ${id}`);
    await ApiExecute(`news/${id}`, "DELETE");
    fetchNews();
  };
  const [News, UpdateNews] = useState([]);
  async function fetchNews() {
    let newsResponse = await ApiExecute("news");
    UpdateNews(newsResponse.data);
  }
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <>
      <div className="px-3 py-3">
        <h2>View News</h2>
        {
          //  JSON.stringify(News)
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
            {News.map((ndata, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{ndata.news_name}</td>
                <td>{ndata.news_desc}</td>
                <td>
                  <Button className="btn btn-success">Edit</Button>
                </td>
                <td>
                  <Button
                    className="btn btn-danger"
                    onClick={() => DeleteData(ndata.news_id)}
                  >
                    Delete
                  </Button>
                </td>
                <td>
                  <Button className="btn btn-primary">Details</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default News;
