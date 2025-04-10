import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItem as CartItemType } from "../../types/CartItem";
import { useCart } from "../../context/CartContext";

type Props = {
  cartItem: CartItemType;
};

const CartItem = ({ cartItem }: Props) => {
  const { addToCart, removeFromCart } = useCart();
  return (
    <tr>
      <td className="py-2">
        <div className="flex gap-4">
          <div className="w-24 p-4 border border-gray-200 rounded-xl">
            <img
              src={cartItem.imageUrl}
              alt={cartItem.name}
              className="block aspect-square object-contain"
            />
          </div>
          <div className="flex flex-col justify-center max-sm:hidden">
            <h3 className="font-semibold text-lg">{cartItem.name}</h3>
            <p className="text-gray-400">{cartItem.category}</p>
          </div>
        </div>
      </td>
      <td>
        <div className="inline-flex px-2 items-center gap-2 border border-gray-300 rounded-full">
          <button onClick={() => removeFromCart(cartItem)}>
            <Minus size={18} />
          </button>
          <span className="w-8 text-center">{cartItem.quantity}</span>
          <button onClick={() => addToCart(cartItem, false)}>
            <Plus size={18} />
          </button>
        </div>
      </td>
      <td>
        <span className="block text-lg leading-none">
          ${(cartItem.price * cartItem.quantity).toFixed(2)}
        </span>
        <span className="text-sm text-gray-400">
          ${cartItem.price}
          <span className="text-xs">/unit</span>
        </span>
      </td>
      <td>
        <button
          onClick={() => removeFromCart(cartItem, true)}
          className=" rounded-full aspect-square p-1 hover:bg-red-100"
        >
          <Trash2 className="text-red-600" />
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
