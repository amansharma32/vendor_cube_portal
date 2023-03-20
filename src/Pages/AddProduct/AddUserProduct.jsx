import axios from "axios";
import { React, useState } from "react";
import { useHistory } from "react-router-use-history";

const AddUserProduct = () => {
  let history = useHistory();
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

  const { productcategory, productsubcategory, productname, productdescription, gstrate, uom,hsnnumber,stockpresent , productrate } = user;
  const onInputChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/users", user);
    history.push("/addProduct");
  };

  return (
    <>
      <div className="box px-4">

      <div className="box px-5 py-4">
        <div className="w-100 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add A User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Enter Product Category"
                name="productcategory"
                value={productcategory}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Enter Product SubCategory"
                name="productsubcategory"
                value={productsubcategory}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Enter Product Name"
                name="productname"
                value={productname}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Enter Product Description"
                name="productdescription"
                value={productdescription}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Enter GST Rate"
                name="gstrate"
                value={gstrate}
                onChange={(e) => onInputChange(e)}
              />
            </div>
             
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Enter UOM"
                name="uom"
                value={uom}
                onChange={(e) => onInputChange(e)}
              />
            </div>
             
            
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Enter HSN Number"
                name="hsnnumber"
                value={hsnnumber}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Enter Stock Present"
                name="stockpresent"
                value={stockpresent}
                onChange={(e) => onInputChange(e)}
              />
            </div>

           

            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Enter Product Rate"
                name="productrate"
                value={productrate}
                onChange={(e) => onInputChange(e)}
              />
            </div>

           

          


            <button className="btn btn-primary btn-block p-4 w-100">
              Add User
            </button>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default AddUserProduct;
