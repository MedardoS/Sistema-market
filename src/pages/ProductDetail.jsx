import { useState } from "react";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

import Navbar from "../components/Navbar";

const ProductDetail = () => {

  const { id } =
    useParams();

  const navigate =
    useNavigate();

  const [size, setSize] =
    useState("M");

  const products = [
    {
      id: 1,
      title:
        "Polera Oversize Negra",
      price: 19990,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
      id: 2,
      title:
        "Chaqueta Urban Style",
      price: 34990,
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
    },
    {
      id: 3,
      title:
        "Jeans Slim Fit",
      price: 24990,
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d",
    },
    {
      id: 4,
      title:
        "Zapatillas Urban",
      price: 45990,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
  ];

  const product =
    products.find(
      (p) =>
        p.id === Number(id)
    );

  if (!product) {

    return (
      <h1>
        Producto no encontrado
      </h1>
    );

  }

  const handleBuy = () => {

    const token =
      localStorage.getItem(
        "token"
      );

    if (!token) {

      const register =
        window.confirm(
          "Debes iniciar sesión para comprar. ¿Deseas registrarte?"
        );

      if (register) {

        navigate("/register");

      } else {

        navigate("/login");

      }

      return;
    }

    const cartItem = {
      title:
        product.title,
      price:
        product.price,
      size,
    };

    const cart =
      JSON.parse(
        localStorage.getItem(
          "cart"
        )
      ) || [];

    cart.push(cartItem);

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert(
      "Producto agregado al carrito 🛒"
    );

    navigate("/cart");

  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor:
          "#111",
        color: "white",
      }}
    >
      <Navbar />

      <div
        style={{
          padding: "40px",
          display: "flex",
          justifyContent:
            "center",
        }}
      >
        <div
          style={{
            maxWidth: "500px",
            backgroundColor:
              "#1e1e1e",
            padding: "30px",
            borderRadius:
              "15px",
            textAlign:
              "center",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: "100%",
              borderRadius:
                "15px",
              marginBottom:
                "20px",
            }}
          />

          <h1>
            {product.title}
          </h1>

          <p>
            Producto destacado
            UrbanStyle.
          </p>

          <h2
            style={{
              color:
                "#ff6600",
            }}
          >
            $
            {product.price.toLocaleString()}
          </h2>

          <div
            style={{
              marginTop:
                "20px",
              marginBottom:
                "20px",
            }}
          >
            <label>
              Selecciona tu talla:
            </label>

            <br />

            <select
              value={size}
              onChange={(e) =>
                setSize(
                  e.target.value
                )
              }
              style={{
                padding:
                  "10px",
                borderRadius:
                  "10px",
                marginTop:
                  "10px",
                width:
                  "120px",
              }}
            >
              <option value="S">
                S
              </option>

              <option value="M">
                M
              </option>

              <option value="L">
                L
              </option>

              <option value="XL">
                XL
              </option>
            </select>
          </div>

          <button
            onClick={handleBuy}
            style={{
              padding:
                "12px 20px",
              backgroundColor:
                "#ff6600",
              border:
                "none",
              color:
                "white",
              borderRadius:
                "10px",
              cursor:
                "pointer",
              width: "100%",
            }}
          >
            Agregar al carrito 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;