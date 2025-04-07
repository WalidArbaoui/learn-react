import { Product } from "../types/Product";
import ProductCard from "./ProductCard";
import { SearchX } from "lucide-react";

type Props = {
  products: Product[];
};

const ProductList = ({ products }: Props) => {
  return (
    <div>
      {products.length ? (
        <div
          data-testid="product-list-container"
          className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={(product: Product) => {
                console.log(product);
              }}
            />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-full w-full">
          <div className="flex flex-col items-center text-xl">
            <SearchX className="text-gray-400" size={120} />
            No Products Found
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
