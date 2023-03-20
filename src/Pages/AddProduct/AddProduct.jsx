import React, { useState, useEffect } from "react";
import { HiViewfinderCircle } from "react-icons/hi2";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import "./AddProduct.css";

import { NavLink } from "react-router-dom";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const AddProduct = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3001/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUser();
  };

  return (
    <>
      <div className="container">
      <div className="px-3">

        <h4 className="py-2">Add Product</h4>
      </div>
        

        <div class="outer-wrapper">
          <div class="table-wrapper">
            <table class=" table-hover">
              <thead class="thead-light">
                <tr className="table">
                  <th  scope="col">S.No</th>
                  <th scope="col">Product Category</th>
                  <th scope="col">Product SubCategory</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Product Description</th>

                  <th scope="col">GST Rate</th>
                  <th scope="col">UOM</th>

                  <th scope="col">HSN Number</th>
                  <th scope="col">Stock Present</th>
                  <th scope="col">Product Rate</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user, index) => (
                  <tr>
                   
                    <th scope="row">{index + 1}</th>
                    <td>{user.productcategory}</td>
                    <td>{user.productsubcategory}</td>
                    <td>{user.productname}</td>
                    <td>{user.productdescription}</td>
                    <td>{user.gstrate}</td>
                    <td>{user.uom}</td>
                    <td>{user.hsnnumber}</td>
                    <td>{user.stockpresent}</td>
                    <td>{user.productrate}</td>
                    <td>
                      <NavLink
                        to={`/user/${user.id}`}
                        className="btn btn-info m-1"
                      >
                        <HiViewfinderCircle />
                      </NavLink>
                      <NavLink
                        to={`/editProduct/${user.id}`}
                        className="btn btn-primary m-1"
                      >
                        <AiFillEdit />
                      </NavLink>
                      <NavLink
                        className="btn btn-danger m-1"
                        onClick={() => deleteUser(user.id)}
                      >
                        <AiFillDelete />
                      </NavLink>
                    </td>

                    {/* <td>{user.productrate }</td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
        

        <div className="px-3 py-3
        ">

          <NavLink to="/addUserProduct" className="btn btn-secondary p-3 px-4 ">
            Add Product
          </NavLink>
        </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
