import { useState } from "react";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import { Product } from "./types/Product";
import { ToastContainer, toast } from "react-toastify";
import { CartItem } from "./types/CartItem";
import { Loader2, RotateCcw, TriangleAlert } from "lucide-react";
import { useFetch } from "./hooks/useFetch";
import { getProducts } from "./api/product.api";

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);
  const {
    data: products,
    isLoading,
    error,
    setRefresh,
  } = useFetch<Product[]>(getProducts);

  const handleAddToCart = (product: Product) => {
    setCartCount(cartCount + 1);
    const prodInCart = cart.find((item) => item.id === product.id);
    if (!prodInCart) {
      const newCartItem: CartItem = {
        ...product,
        quantity: 1,
      };
      setCart([...cart, newCartItem]);
      toast.success("Product Added Succesfuly");
    } else {
      prodInCart.quantity++;
      toast.info(`Product Quantity Updated (${prodInCart.quantity})`);
    }
  };

  return (
    <>
      <Header cartCount={cartCount} />
      <main className="p-8 container mx-auto">
        {isLoading && (
          <div className="flex flex-col items-center justify-center">
            <div>
              <Loader2 size={82} className=" animate-spin text-cyan-600" />
              <span className="text-lg">Loading...</span>
            </div>
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center">
            <TriangleAlert size={82} className="mx-auto text-red-500" />
            <span className="text-lg">Error: {error}</span>
            <button
              onClick={() => setRefresh((prev) => prev + 1)}
              className="flex gap-1 items-center mt-6 text-lg text-red-500 border border-red-400 py-1 px-4 rounded hover:bg-red-500 hover:text-white"
            >
              <RotateCcw size={20} />
              Retry
            </button>
          </div>
        )}

        {!isLoading && !error && (
          <ProductList
            products={products || []}
            onAddToCart={handleAddToCart}
            cartItems={cart}
          />
        )}

        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          newestOnTop={true}
          limit={3}
        />
      </main>
    </>
  );
}

export default App;
