import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Gallery from "../pages/Gallery";
import ProductDetail from "../pages/ProductDetail";
import CreateProduct from "../pages/CreateProduct";

import ProtectedRoute from "../components/ProtectedRoute";

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route
          path="/product/:id"
          element={<ProductDetail />}
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <CreateProduct />
            </ProtectedRoute>
          }
        />

      </Routes>
    </HashRouter>
  );
};

export default AppRouter;