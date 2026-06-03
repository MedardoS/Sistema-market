import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

const Gallery = () => {
  const products = [
    {
      id: 1,
      title: "Polera Oversize Negra",
      price: 19990,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
      id: 2,
      title: "Chaqueta Urban Style",
      price: 34990,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
    },
    {
      id: 3,
      title: "Jeans Slim Fit",
      price: 24990,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d",
    },
    {
      id: 4,
      title: "Zapatillas Urban",
      price: 45990,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
  ];

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

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
