import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

const Gallery = () => {
  const products = [
    {
      id: 1,
      title: "Chaqueta Oversize",
      price: 25000,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
      id: 2,
      title: "Hoodie Streetwear",
      price: 30000,
      image:
        "https://images.unsplash.com/photo-1503341504253-dff4815485f1",
    },
    {
      id: 3,
      title: "Pantalón Cargo",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#111",
      }}
    >
      <Navbar />

      <div
        style={{
          padding: "40px",
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;