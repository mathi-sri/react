import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import ProductDetails from "./pages/ProductDetails";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main className="container">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/cart"
            element={<CartPage />}
          />

          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;