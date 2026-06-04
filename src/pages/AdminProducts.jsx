import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { API_URL } from "../config/api";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await fetch(
        `${API_URL}/api/products/all`
      );

      const data = await response.json();

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deactivateProduct = async (id) => {
    try {
      await fetch(
        `${API_URL}/api/products/${id}/deactivate`,
        {
          method: "PATCH",
        }
      );

      loadProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const activateProduct = async (id) => {
    try {
      await fetch(
        `${API_URL}/api/products/${id}/activate`,
        {
          method: "PATCH",
        }
      );

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
            marginBottom: "30px",
          }}
        >
          Administrar Productos
        </h1>

        {products.map((product) => (
          <div
            key={product.id}
            style={{
              backgroundColor: "#1e1e1e",
              padding: "20px",
              marginBottom: "15px",
              borderRadius: "10px",
              border: product.active
                ? "1px solid #2ecc71"
                : "1px solid #e74c3c",
            }}
          >
            <h3>{product.title}</h3>

            <p>
              Precio: $
              {Number(product.price).toLocaleString(
                "es-CL"
              )}
            </p>

            <p>
              Stock: {product.stock}
            </p>

            <p>
              Estado:{" "}
              {product.active
                ? "Activo"
                : "Agotado"}
            </p>

            {product.active ? (
              <button
                onClick={() =>
                  deactivateProduct(product.id)
                }
                style={{
                  backgroundColor: "#cc0000",
                  color: "white",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Marcar Agotado
              </button>
            ) : (
              <button
                onClick={() =>
                  activateProduct(product.id)
                }
                style={{
                  backgroundColor: "#2ecc71",
                  color: "white",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Reactivar
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProducts;