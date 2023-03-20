import React from "react";
import { Router, Route, Routes } from "react-router-dom";
import AddProduct from "../../../Pages/AddProduct/AddProduct";
import AddUserProduct from "../../../Pages/AddProduct/AddUserProduct";
import EditProduct from "../../../Pages/AddProduct/EditProduct";
import User from "../../../Pages/AddProduct/User";
import Dashboard from "../../../Pages/Dashboard/Dashboard";
import DeliveredOrder from "../../../Pages/DeliveredOrder/DeliveredOrder";
import Inventory from "../../../Pages/Inventory/Inventory";
import PendingOrder from "../../../Pages/PendingOrder/PendingOrder";
import LogIn from "../../LogIn";
import LoginRoute from "../../LoginRoute";
import PageNotFound from "../../PageNotFound";
import Registration from "../../Registration";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>

        <Route path="/pendingOrders" element={<PendingOrder />}></Route>
        <Route path="/deliveredOrder" element={<DeliveredOrder />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/addProduct" element={<AddProduct />}></Route>

        <Route path="/editProduct/:id" element={<EditProduct />}></Route>
        <Route path="/user/:id" element={<User />}></Route>
        <Route path="/addUserProduct" element={<AddUserProduct />}></Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
