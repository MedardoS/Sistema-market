import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { API_URL } from "../config/api";

const Orders = () => {

  const [orders, setOrders] =
    useState([]);

  useEffect(() => {

    const getOrders =
      async () => {

        const token =
          localStorage.getItem(
            "token"
          );

        const response =
          await fetch(
            `${API_URL}/api/purchases`,
            {
              headers: {
                Authorization:
                  token,
              },
            }
          );

        const data =
          await response.json();

        setOrders(data);

      };

    getOrders();

  }, []);

  return (
    <div
      style={{
        minHeight:
          "100vh",
        backgroundColor:
          "#111",
        color:
          "white",
      }}
    >
      <Navbar />

      <div
        style={{
          padding:
            "40px",
        }}
      >
        <h1>
          Mis Compras
        </h1>

        {orders.map(
          (order) => (
            <div
              key={order.id}
              style={{
                backgroundColor:
                  "#1e1e1e",
                padding:
                  "20px",
                marginBottom:
                  "20px",
                borderRadius:
                  "10px",
              }}
            >
              <h3>
                Compra #
                {order.id}
              </h3>

              <p>
                Total:
                $
                {order.total}
              </p>

              <p>
                Fecha:
                {" "}
                {new Date(
                  order.created_at
                ).toLocaleDateString()}
              </p>

            </div>
          )
        )}

      </div>
    </div>
  );
};

export default Orders;