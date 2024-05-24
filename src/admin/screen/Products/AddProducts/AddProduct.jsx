import { Form, Formik } from "formik";
import React, { useEffect, useRef } from "react";
import { ApiExecute } from "../../../../ApiExeService";
import { useNavigate, useParams } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const formikRef = useRef(null);
  const { id } = useParams();

  const fetchProductInfo = async () => {
    try {
      let {
        data: { name, price, rating },
      } = await ApiExecute(`products/${id}`);

      //   let { name, price, rating } = data;

      formikRef.current.setFieldValue("name", name);
      formikRef.current.setFieldValue("rating", rating);
      formikRef.current.setFieldValue("price", price);
    } catch (error) {}
  };

  useEffect(() => {
    if (!id) return;

    fetchProductInfo();
  }, [id]);

  return (
    <>
      <div className="px-3 py-3">
        <h2>{!id ? "Add New" : "Edit"} Product</h2>

        <Formik
          initialValues={{
            name: "",
            price: 1,
            rating: 3,
          }}
          innerRef={formikRef}
          onSubmit={async (values, { setSubmitting }) => {
            // alert(JSON.stringify(values))
            if (!id) {
              await ApiExecute("products", "POST", {
                data: values,
              });
            } else {
              await ApiExecute(`products/${id}`, "PUT", {
                data: values,
              });
            }
            setSubmitting(false);
            navigate("/admin-panel/product");
          }}
        >
          {({ values, handleChange, handleBlur }) => (
            <Form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Product Name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Price</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Product Price"
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Rating</label>
                <select
                  name="rating"
                  id=""
                  className="form-control"
                  value={values.rating}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>

              <div className="mb-3">
                <button className="btn btn-success">
                  {" "}
                  {!id ? "Save" : "Update"}{" "}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default AddProduct;
