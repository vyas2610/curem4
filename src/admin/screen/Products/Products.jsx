import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { FcViewDetails } from "react-icons/fc";
import { ApiExecute } from "../../../ApiExeService";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Products = () => {
  const [products, setProducts] = useState([]);

  const handleDelete = async (id) => {
    await ApiExecute(`products/${id}`, "DELETE");
    fetchProducts();
  };
  async function fetchProducts() {
    let response = await ApiExecute("products");
    console.log("response data: ", response);
    setProducts(response.data);
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <div className="px-3 py-3">
        <h2>View Products</h2>
        {
          //JSON.stringify(products)
        }
        <table className="table">
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Name</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Image</th>
              <th>Update</th>
              <th>Delete</th>
              <th>Details</th>
            </tr>
          </thead>

          <tbody>
            {products.map((pro, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{pro.name}</td>
                <td>{pro.price}</td>
                <td>{pro.rating}</td>
                <td>
                  <img src={pro.image} alt="" />
                </td>
                <td>
                  <Link to={"edit/" + pro.id} className="btn btn-info">
                    <FaEdit /> Edit
                  </Link>
                </td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(pro.id)}>
                    <FaDeleteLeft /> Delete
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

export default Products;
