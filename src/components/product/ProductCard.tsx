import { useState } from "react";
import { Product } from "../../types/Product";
import { Check, ImageOff, Plus, ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";

type Props = {
  product: Product;
};

interface categoryStylesType {
  [index: string]: string;
}

const categoryStyles: categoryStylesType = {
  "T-shirt": "bg-amber-500",
  Mug: "bg-emerald-400",
  Cap: "bg-purple-400",
};

const ProductCard = ({ product }: Props) => {
  const [showMore, setShowMore] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  const { cart, addToCart } = useCart();

  return (
    <div className="flex flex-col h-full relative border border-gray-200 rounded overflow-hidden hover:scale-101 hover:shadow-lg min-h-100 md:min-h-auto">
      <div className={`p-4 -z-10 ${showMore && "absolute"}`}>
        {!imgLoaded && !imgFailed && (
          <div className="aspect-square bg-gray-200 rounded-lg animate-pulse"></div>
        )}
        {imgFailed && (
          <div className="flex flex-col items-center justify-center aspect-square text-gray-400 bg-gray-300 rounded-lg">
            <ImageOff size={64} />
            Image failed to load
          </div>
        )}
        <img
          src={product.imageUrl}
          alt={product.name}
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgFailed(true)}
          className={`block aspect-square object-contain ${
            imgFailed && "hidden"
          }`}
        />
      </div>
      <div className={`p-2 grow bg-white/90`}>
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
      <div className="flex justify-between p-2 bg-white/90 border-t border-gray-100">
        {cart.some((item) => item.id === product.id) ? (
          <button
            onClick={() => addToCart(product)}
            className="group flex items-center gap-2 outline -outline-offset-1 outline-cyan-800 pl-2 pr-4 py-1 rounded-full overflow-hidden"
          >
            <div className="relative w-8 h-full">
              <span className="absolute top-1/2 -translate-y-1/2  left-0 flex -translate-x-10  invisible items-baseline bg-yellow-500 rounded-full text-sm py-1 px-2 group-hover:visible group-hover:translate-x-0 transition duration-300">
                <Plus size={10} /> <span className="leading-none">1</span>
              </span>
              <span className="absolute top-1/2 -translate-y-1/2 left-0 bg-emerald-400 rounded-full text-sm py-1 px-2 group-hover:translate-y-4 transition duration-300">
                <Check size={14} />
              </span>
            </div>
            Added to cart
          </button>
        ) : (
          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-2 bg-cyan-800 text-white px-4 py-1 rounded-full hover:bg-cyan-900"
          >
            <ShoppingCart size={18} />
            Add to cart
          </button>
        )}
        <div className="text-xl font-bold">${product.price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
