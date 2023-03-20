import React from "react";
import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory, getOrders } from "../../API";

const PendingOrder = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);
  return (
    <>
      <Space size={20} direction="vertical">
        <h4 className="py-2">Pending Order</h4>
        <Table
          loading={loading}
          columns={[
            {
              title: "S.No",
              dataIndex: "id",
            },
            {
              title: "Order ID",
              dataIndex: "id",
            },
            {
              title: "Delivery Date",
              dataIndex: "id",
            },
            {
              title: "Value of Order",
              dataIndex: "price",
              render: (value) => <span>₹{value}</span>,
            },

            {
              title: "Delivery Challan",
              dataIndex: "quantity",
            },
            {
              title: "Quantity",
              dataIndex: "quantity",
            },
            {
              title: "Invoice",
              dataIndex: "quantity",
            },
            {
              title: "Delivery Label",
              dataIndex: "quantity",
            },
          ]}
          dataSource={dataSource}
          pagination={{
            pageSize: 5,
          }}
        ></Table>
      </Space>
    </>
  );
};

export default PendingOrder;
