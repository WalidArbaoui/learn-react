import { useState } from "react";
import { Product } from "../types/Product";
import { ShoppingCart } from "lucide-react";

type Props = {
  product: Product;
  onAddToCart: any;
};

interface categoryStylesType {
  [index: string]: string;
}

const categoryStyles: categoryStylesType = {
  "T-shirt": "bg-amber-500",
  Mug: "bg-emerald-400",
  Cap: "bg-purple-400",
};

const ProductCard = ({ product, onAddToCart }: Props) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex flex-col relative border border-gray-200 rounded hover:scale-101 hover:shadow-lg">
      <div className={`p-4 -z-10 ${showMore && "absolute"}`}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="block aspect-square object-contain"
        />
      </div>
      <div className="p-2 grow bg-white/90">
        <div className="flex justify-between">
          <h3 className="font-bold">{product.name}</h3>
          {product.category && (
            <span
              className={`text-sm px-3 py-1 rounded-full ${
                categoryStyles[product.category]
              }`}
            >
              {product.category}
            </span>
          )}
        </div>
        <div className="flex gap-1">
          <p
            className={`text-gray-500 ${
              !showMore && "whitespace-nowrap overflow-hidden text-ellipsis"
            }`}
          >
            {product.description}
            {showMore && (
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-sm text-nowrap underline"
              >
                Show Less.
              </button>
            )}
          </p>
          {product.description.length > 48 && !showMore && (
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-sm text-nowrap underline"
            >
              Show More &#8628;
            </button>
          )}
        </div>
      </div>
      <div className="flex justify-between p-2">
        <button
          onClick={() => onAddToCart(product)}
          className="flex items-center gap-2 bg-cyan-800 text-white px-4 py-1 rounded-full hover:bg-cyan-900"
        >
          <ShoppingCart size={18} />
          Add to cart
        </button>
        <div className="text-xl font-bold">${product.price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
