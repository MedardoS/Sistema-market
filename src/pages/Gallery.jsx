import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

import { API_URL } from "../config/api";

const Gallery = () => {
  const [products, setProducts] = useState([]);

  const role = localStorage.getItem("role");

  const isAdmin = role === "admin";

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await fetch(`${API_URL}/api/products`);

      const data = await response.json();

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeactivate = async (id) => {
    const confirmAction = window.confirm("¿Marcar producto como agotado?");

    if (!confirmAction) return;

    try {
      await fetch(`${API_URL}/api/products/${id}/deactivate`, {
        method: "PATCH",
      });

      alert("Producto marcado como agotado");

      loadProducts();
    } catch (error) {
      console.log(error);
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
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Galería de Productos
        </h1>
        {products.length === 0 && (
          <h2
            style={{
              textAlign: "center",
              color: "#ccc",
            }}
          >
            No hay productos disponibles actualmente
          </h2>
        )}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard
                id={product.id}
                image={product.image_url}
                title={product.title}
                price={product.price}
                stock={product.stock}
              />

              {isAdmin && (
                <button
                  onClick={() => handleDeactivate(product.id)}
                  style={{
                    width: "100%",
                    marginTop: "10px",
                    padding: "10px",
                    backgroundColor: "#cc0000",
                    border: "none",
                    color: "white",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  Marcar Agotado
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
