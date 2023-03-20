import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-use-history";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  let history = useHistory();
  const { id } = useParams();

  const [user, setuser] = useState({
    productcategory: "",
    productsubcategory: "",
    productname: "",
    productdescription: "",
    gstrate: "",
    uom: "",
    hsnnumber: "",
    stockpresent: "",
    productrate: "",
  });

  const { productcategory, productsubcategory, productname, productdescription,uom, gstrate,hsnnumber,stockpresent , productrate } = user;
  const onInputChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/users/${id}`);
    setuser(result.data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/users/${id}`, user);
    history.push("/addProduct");
  };

  return (
    <>
      <div className="box px-5 py-4">
        <div className="w-100 shadow p-5">
          <h2 className="text-center mb-4">Edit A User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control"
                placeholder="Enter your name"
                name="productcategory"
                value={productcategory}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control form-control"
                placeholder="Enter Product SubCategory"
                name="productsubcategory"
                value={productsubcategory}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control form-control"
                placeholder="Enter Product Name"
                name="productname"
                value={productname}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control form-control"
                placeholder="Enter Product Description"
                name="productdescription"
                value={productdescription}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control form-control"
                placeholder="Enter GST Rate"
                name="gstrate"
                value={gstrate}
                onChange={(e) => onInputChange(e)}
              />
            </div>

             
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control"
                placeholder="Enter UOM"
                name="uom"
                value={uom}
                onChange={(e) => onInputChange(e)}
              />
            </div>

             
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control"
                placeholder="Enter HSN Number"
                name="hsnnumber"
                value={hsnnumber}
                onChange={(e) => onInputChange(e)}
              />
            </div>

             
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control"
                placeholder="Enter Stock Present"
                name="stockpresent"
                value={stockpresent}
                onChange={(e) => onInputChange(e)}
              />
            </div>

             
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control"
                placeholder="Enter Product Rate"
                name="productrate"
                value={productrate}
                onChange={(e) => onInputChange(e)}
              />
            </div>

             
           

             

            <button className="btn btn-warning btn-block p-4 w-100">
              Update User
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
