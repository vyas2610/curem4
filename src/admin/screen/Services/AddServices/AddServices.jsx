import { Form, Formik } from "formik";
import React, { useEffect, useRef } from "react";
import { ApiExecute } from "../../../../ApiExeService";
import { useNavigate, useParams } from "react-router-dom";

const AddServices = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const formikRef = useRef(null);
  const fetchServiceId = async () => {
    try {
      let {
        data: { ser_name, ser_desc },
      } = await ApiExecute(`services/${id}`);
      // let { ser_name, ser_desc } = data.data;
      // console.log(data);

      formikRef.current.setFieldValue("ser_name", ser_name);
      formikRef.current.setFieldValue("ser_desc", ser_desc);
    } catch (error) {}
  };
  useEffect(() => {
    if (!id) return;
    fetchServiceId();
  }, [id]);
  return (
    <>
      <div className="px-3 py-3">
        <h2>{!id ? "Add New" : "Edit"} Service</h2>

        <Formik
          initialValues={{
            ser_name: "Service-3",
            ser_desc:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora ratione perferendis porro dolore quas blanditiis molestiae commodi iure ut velit quasi veritatis est, aperiam eaque deleniti quo et minima inventore. Quae ut asperiores distinctio dignissimos. Libero facilis veniam odit laudantium, iusto nulla possimus, animi ducimus eos aliquid assumenda, modi explicabo. Vitae cum doloremque expedita suscipit ea molestias inventore nam sunt. ",
          }}
          innerRef={formikRef}
          onSubmit={async (values, { setSubmitting }) => {
            await ApiExecute("services", "POST", {
              data: values,
            });
            navigate("/admin-panel/services");
            setSubmitting(false);
          }}
        >
          {({ values, handleChange, handleBlur }) => (
            <Form>
              <div className="mb-3">
                <label className="form-label">Service Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Product Name"
                  value={values.ser_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="ser_name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Service Description</label>
                <textarea
                  className="form-control"
                  rows={8}
                  cols={3}
                  value={values.ser_desc}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="ser_desc"
                ></textarea>
              </div>

              <div className="mb-3">
                <button className="btn btn-success">
                  {!id ? "Add" : "Edit"} Service{" "}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default AddServices;
