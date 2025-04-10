import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { useCart } from "./context/CartContext";
import ProductsPage from "./pages/ProductsPage";
import { ToastContainer } from "react-toastify";
import CartPage from "./pages/CartPage";
import Footer from "./components/Footer";

function App() {
  const { cartCount } = useCart();
  return (
    <>
      <Header cartCount={cartCount} />
      <main className="p-8 container mx-auto">
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        newestOnTop={true}
        limit={3}
      />
    </>
  );
}

export default App;
