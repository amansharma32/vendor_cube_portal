import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  CarryOutOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SideMenu = () => {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();

  return (
    <div className="SideMenu">
      <Menu
        mode="vertical"
        className="SideMenuVertical"
        onClick={(item) => {
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Dashboard",
            icon: <AppstoreOutlined />,
            key: "/dashboard",
          },
          {
            label: "Pending Orders",
            key: "/pendingOrders",
            icon: <ShoppingCartOutlined />,
          },
          {
            label: "Delivered Order",
            key: "/deliveredOrder",
            icon: <CarryOutOutlined />,
          },

          {
            label: "Inventory",
            key: "/inventory",
            icon: <ShopOutlined />,
          },
          {
            label: "Add Product",
            key: "/addProduct",
            icon: <PlusSquareOutlined />,
          },
        ]}
      ></Menu>
    </div>
  );
};

export default SideMenu;
