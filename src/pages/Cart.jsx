import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { API_URL } from "../config/api";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("cart")) || [];

    setCart(products);
  }, []);

  const removeItem = (index) => {
    const updatedCart = [...cart];

    updatedCart.splice(index, 1);

    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cart.reduce((acc, item) => acc + Number(item.price), 0);

  const handleCheckout = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${API_URL}/api/purchases`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          cart,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Error al procesar compra");

        return;
      }

      alert("Compra realizada 🎉");

      localStorage.removeItem("cart");

      setCart([]);
    } catch (error) {
      console.log(error);

      alert("Error al conectar con el servidor");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#111",
        color: "white",
      }}
    >
      <Navbar />

      <div
        style={{
          padding: "40px",
        }}
      >
        <h1>🛒 Carrito de Compras</h1>

        {cart.length === 0 && (
          <div
            style={{
              marginTop: "20px",
              backgroundColor: "#1e1e1e",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            No hay productos en el carrito.
          </div>
        )}

        {cart.map((item, index) => (
          <div
            key={index}
            style={{
              marginBottom: "20px",
              padding: "20px",
              backgroundColor: "#1e1e1e",
              borderRadius: "10px",
            }}
          >
            <h3>{item.title}</h3>

            <p>Talla: {item.size}</p>

            <p>Precio: ${item.price.toLocaleString()}</p>

            <button
              onClick={() => removeItem(index)}
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Eliminar
            </button>
          </div>
        ))}

        {cart.length > 0 && (
          <>
            <h2>Total: ${total.toLocaleString("es-CL")}</h2>

            <button
              onClick={handleCheckout}
              style={{
                padding: "12px",
                backgroundColor: "#ff6600",
                border: "none",
                color: "white",
                borderRadius: "10px",
                cursor: "pointer",
                marginTop: "20px",
              }}
            >
              Finalizar Compra
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
