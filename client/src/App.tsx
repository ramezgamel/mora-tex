import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CartDetails from "./pages/CartDetails";
import Header from "./components/Header";
import { Suspense, lazy } from "react";

const Footer = lazy(() => import("./components/Footer"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
function App() {
  return (
    <>
      <Header />
      <main className="px-5">
        <Suspense fallback={<div>أنتظر من فضلك</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<CartDetails />} />
            <Route path="/favorite" element={<CartDetails />} />
            <Route path="*" element={<div>No matched route</div>} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
