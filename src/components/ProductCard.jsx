const ProductCard = ({ image, title, price }) => {
  return (
    <div
      style={{
        backgroundColor: "#1e1e1e",
        borderRadius: "15px",
        overflow: "hidden",
        width: "300px",
        color: "white",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "20px" }}>
        <h2>{title}</h2>

        <p
          style={{
            marginTop: "10px",
            color: "#ff6600",
            fontWeight: "bold",
          }}
        >
          ${price}
        </p>

        <button
          style={{
            marginTop: "15px",
            width: "100%",
            padding: "12px",
            border: "none",
            backgroundColor: "#ff6600",
            color: "white",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Ver producto
        </button>
      </div>
    </div>
  );
};

export default ProductCard;