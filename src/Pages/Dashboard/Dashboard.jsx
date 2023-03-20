import React from "react";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { getCustomers, getInventory, getOrders, getRevenue } from "../../API";

import {
  AuditOutlined,
  ShopOutlined,
  RocketOutlined,
  CarryOutOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,

  Tooltip,
  Legend
);

const { Title } = Typography;
const Dashboard = () => {
  const [orders, setOrders] = useState(0);
  const [pendingOrder, setpendingOrder] = useState(0);
  const [deliveredOrder, setdeliveredOrder] = useState(0);
  const [inventory, setinventory] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res.total);
      setRevenue(res.discountedTotal);
    });
    getInventory().then((res) => {
      setinventory(res.total);
    });
    getCustomers().then((res) => {
      setdeliveredOrder(res.total);
    });
  }, []);

  return (
    <>
      <div>
        <h4 className="py-2 ">Dashboard</h4>

        <Space direction="horizontal" className="d-flex flex-wrap flex-row">
          <DashboardCard
            icon={
              <AuditOutlined
                style={{
                  color: "green",
                  backgroundColor: "rgba(0,255,0,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Orders"}
            value={orders}
          />
          <DashboardCard
            icon={
              <RocketOutlined
                style={{
                  color: "blue",
                  backgroundColor: "rgba(0,0,255,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Pending Orders"}
            value={pendingOrder}
          />
          <DashboardCard
            icon={
              <CarryOutOutlined
                style={{
                  color: "purple",
                  backgroundColor: "rgba(0,255,255,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Delivered Order"}
            value={orders}
          />
          <DashboardCard
            icon={
              <ShopOutlined
                style={{
                  color: "blue",
                  backgroundColor: "rgba(0,0,255,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Inventory"}
            value={inventory}
          />
          <DashboardCard
            icon={
              <DollarCircleOutlined
                style={{
                  color: "red",
                  backgroundColor: "rgba(255,0,0,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Revenue"}
            value={revenue}
          />
        </Space>
        <Space>
          <RecentOrders />
          <DashboardChart />
        </Space>
      </div>
    </>
  );
};

function DashboardCard({ title, value, icon }) {
  return (
    <>
      <Card>
        <Space direction="horizontal">
          {icon}
          <Statistic title={title} value={value} />
        </Space>
      </Card>
    </>
  );
}

function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products.splice(0, 5));
      setLoading(false);
    });
  }, []);

  return (
    <>
      <h4 className="py-3 ">Recent Orders</h4>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Price",
            dataIndex: "discountedPrice",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      ></Table>
    </>
  );
}

function DashboardChart() {
  const [reveneuData, setReveneuData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getRevenue().then((res) => {
      const labels = res.carts.map((cart) => {
        return `User-${cart.userId}`;
      });
      const data = res.carts.map((cart) => {
        return cart.discountedTotal;
      });

      const dataSource = {
        labels,
        datasets: [
          {
            label: "Revenue",
            data: data,
            backgroundColor: "rgba(255, 0, 0, 1)",
          },
        ],
      };

      setReveneuData(dataSource);
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Order Revenue",
      },
    },
  };

  return (
    <Card style={{ width: 500, height: 250 }}>
      <Bar options={options} data={reveneuData} />
    </Card>
  );
}

export default Dashboard;
