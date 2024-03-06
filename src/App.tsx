import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import CartDetails from "./pages/CartDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="px-5">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartDetails />} />
          <Route path="/favorite" element={<CartDetails />} />
          <Route path="*" element={<div>No matched route</div>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
