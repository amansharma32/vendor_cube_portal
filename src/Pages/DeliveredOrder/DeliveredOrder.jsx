import React from "react";
import { Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory, getOrders } from "../../API";

const DeliveredOrder = () => {
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
        <h4 className="py-2">Delivered Orders</h4>
        <Table
          loading={loading}
          columns={[
            {
              title: "S.No ",
              dataIndex: "id",
            },
            {
              title: "Order ID",
              dataIndex: "id",
            },

            {
              title: "Delivered Date",
              dataIndex: "id",
            },
            {
              title: "Delivery Challan",
              dataIndex: "id",
            },
            {
              title: "Invoice",
              dataIndex: "id",
            },
            {
              title: "Value of Order ",
              dataIndex: "price",
              render: (value) => <span>₹{value}</span>,
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

export default DeliveredOrder;
