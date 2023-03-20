import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-use-history";
import { Link, NavLink, useParams } from "react-router-dom";

const User = () => {
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

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3001/users/${id}`);
    setuser(res.data);
  };

  return (
    <>
      <div className="box py-5 px-5">
        
        <h1 className="display-6">User Id:{id}</h1>
        <hr />
        <ul className="list-group w-100">
          <li className="list-group-item">Product Category:{user.productcategory}</li>
          <li className="list-group-item">Product SubCategory:{user.productsubcategory}</li>
          <li className="list-group-item">Product Name:{user.productname}</li>
          <li className="list-group-item">Product Description:{user.productdescription}</li>
          <li className="list-group-item">GST Rate:{user.gstrate}</li>
          <li className="list-group-item">UOM:{user.uom}</li>
          <li className="list-group-item">HSN Number:{user.hsnnumber}</li>
          <li className="list-group-item">Stock Present:{user.stockpresent}</li>
          <li className="list-group-item">Product Rate:{user.productrate}</li>
          
        </ul>
        <hr />
        <div >

        <NavLink className="btn btn-primary p-3 " to="/AddProduct">
          Back To Home
        </NavLink>
        </div>
      </div>
    </>
  );
};

export default User;
