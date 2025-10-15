import { useState } from "react";
import Header from "./Common/Header";
import "./Contactus.css";
import Table from "react-bootstrap/Table";

export function Contactus() {
  let [userData, setUserData] = useState([]);
  let [formData, setFormData] = useState({
    uname: "",
    uemail: "",
    upassword: "",
    umsg: "",
    index: "",
  });


  let getvalue = (event) => {
    let { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };


 let data = (event) => {
  event.preventDefault();

  if (formData.index === "") {
   
    let oldData = {
      uname: formData.uname,
      uemail: formData.uemail,
      upassword: formData.upassword,
      umsg: formData.umsg,
    };

    let check = userData.filter(
      (v) => v.uemail === formData.uemail || v.upassword === formData.upassword
    );

    if (check.length >= 1) {
      alert("already exist");
    } else {
      setUserData([...userData, oldData]);
    }
  } else {
   
    let check = userData.filter(
      (v, i) =>
        (v.uemail === formData.uemail || v.upassword === formData.upassword) &&
        i !== formData.index
    );

    if (check.length === 0) {
      let updated = [...userData];
      updated[formData.index] = {
        uname: formData.uname,
        uemail: formData.uemail,
        upassword: formData.upassword,
        umsg: formData.umsg,
      };
      setUserData(updated);
    } else {
      alert("already exist");
    }
  }

  setFormData({
    uname: "",
    uemail: "",
    upassword: "",
    umsg: "",
    index: "",
  });
};


  let deleteRow = (id) => {
    let Del = userData.filter((v, i) => i !== id);
    setUserData(Del);
  };

  let update = (id) => {
    let selected = userData[id];
    setFormData({ ...selected, index: id });
  };

  return (
    <>
      <Header />
      <section className="contact py-5">
        <div className="container">
          <h1 className="text-center mb-4">Contact Us</h1>
          <p className="text-center text-muted mb-5">
            We'd love to hear from you! Fill out the form or reach us through the details below.
          </p>

          <div className="row g-4">
            {/* Contact Info */}
            <div className="col-md-4">
              <div className="info-card shadow-sm p-4 rounded mb-3">
                <h5>Address</h5>
                <p>123 React Street, Web City, JS 45678</p>
              </div>
              <div className="info-card shadow-sm p-4 rounded mb-3">
                <h5>Email</h5>
                <p>support@example.com</p>
              </div>
              <div className="info-card shadow-sm p-4 rounded">
                <h5>Phone</h5>
                <p>+92 300 1234567</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-md-8">
              <form className="contact-form shadow-sm p-4 rounded bg-light" onSubmit={data}>
                <div className="mb-3">
                  <input
                    name="uname"
                    value={formData.uname}
                    onChange={getvalue}
                    type="text"
                    placeholder="Your Name"
                    required
                    className="form-control"
                    
                  />
                </div>
                <div className="mb-3">
                  <input
                    name="uemail"
                    value={formData.uemail}
                    onChange={getvalue}
                    type="email"
                    placeholder="Your Email"
                    required
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <input
                    name="upassword"
                    value={formData.upassword}
                    onChange={getvalue}
                    type="password"
                    placeholder="Your Password"
                    required
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="umsg"
                    value={formData.umsg}
                    onChange={getvalue}
                    placeholder="Your Message"
                    rows="5"
                    required
                    className="form-control"
                  ></textarea>
                </div>
                <button className="btn btn-dark bg-dark w-100">
                  {formData.index === "" ? "Save" : "Update"}
                </button>
              </form>
            </div>
          </div>

          {/* Table */}
          <div className="mt-5">
            <h3 className="mb-3"> Submitted Data</h3>
            <Table striped bordered hover responsive className="shadow-sm">
              <thead className="table-dark">
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userData.length >= 1 ? (
                  userData.map((obj, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{obj.uname}</td>
                      <td>{obj.uemail}</td>
                      <td>{obj.upassword}</td>
                      <td>{obj.umsg}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-success me-2"
                          onClick={() => update(i)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-danger "
                          onClick={() => deleteRow(i)}
                        >
                           Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center text-muted">
                      No Data Available
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </section>
    </>
  );
}
