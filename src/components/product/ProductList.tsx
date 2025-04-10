import { Product } from "../../types/Product";
import ProductCard from "./ProductCard";
import { SearchX } from "lucide-react";

type Props = {
  products: Product[];
};

const ProductList = ({ products }: Props) => {
  return (
    <>
      {products.length ? (
        <div
          data-testid="product-list-container"
          className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <SearchX className="text-gray-400" size={120} />
          No Products Found
        </div>
      )}
    </>
  );
};

export default ProductList;
