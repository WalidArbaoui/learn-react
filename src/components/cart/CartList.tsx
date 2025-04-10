import { Ban } from "lucide-react";
import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const CartList = () => {
  const { cart } = useCart();
  return (
    <>
      {!cart.length ? (
        <tr>
          <td colSpan={4}>
            <span className="flex flex-col text-lg items-center justify-center py-32 gap-1 text-gray-300">
              <Ban size={48} />
              No products in cart
              <Link to="/" className="group flex items-center text-black ">
                <span className="block group-hover:-translate-x-2">&larr;</span>
                <span className="underline">Continue Shopping</span>
              </Link>
            </span>
          </td>
        </tr>
      ) : (
        cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))
      )}
    </>
  );
};

export default CartList;
