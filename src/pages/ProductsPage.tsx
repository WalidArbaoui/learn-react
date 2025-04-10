import { getProducts } from "../api/product.api";
import { useFetch } from "../hooks/useFetch";
import { Product } from "../types/Product";
import { Loader2, RotateCcw, TriangleAlert } from "lucide-react";
import ProductList from "../components/product/ProductList";

const ProductsPage = () => {
  const {
    data: products,
    isLoading,
    error,
    setRefresh,
  } = useFetch<Product[]>(getProducts);

  return (
    <>
      {isLoading && (
        <div className="flex flex-col items-center justify-center h-full">
          <Loader2 size={82} className=" animate-spin text-cyan-600" />
          <span className="text-lg">Loading...</span>
        </div>
      )}

      {error && (
        <div className="flex flex-col items-center justify-center h-full">
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

      {!isLoading && !error && <ProductList products={products || []} />}
    </>
  );
};

export default ProductsPage;
