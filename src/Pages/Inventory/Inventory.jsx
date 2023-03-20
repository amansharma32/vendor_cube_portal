import React from "react";
import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory } from "../../API";

const { Title, Text, Paragraph, Link } = Typography;

const Inventory = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);
  return (
    <>
      <Space size={20} direction="vertical">
        <h4 className="py-2">Inventory</h4>
        <Table
          loading={loading}
          columns={[
            {
              title: "S.No",
              dataIndex: "id",
            },
            {
              title: "Category",
              dataIndex: "category",
            },
            {
              title: "Sub Category",
              dataIndex: "category",
            },
            {
              title: "Product Name",
              dataIndex: "title",
            },
            {
              title: "Value of Order",
              dataIndex: "price",
              render: (value) => <span>₹{value}</span>,
            },

            {
              title: "Quantity",
              dataIndex: "stock",
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

export default Inventory;
