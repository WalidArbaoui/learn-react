import { CreditCard, Plus, ShieldCheck } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartSummary = () => {
  const { cart } = useCart();
  const subtotal = cart
    .map((cartItem) => cartItem.price * cartItem.quantity)
    .reduce((prev, curr) => prev + curr, 0);
  const tva = (subtotal * 8) / 100;
  return (
    <aside>
      <section className="p-4 bg-gray-100 rounded">
        <h3 className="text-xl font-bold mb-4">Summary</h3>
        <div className="flex items-center gap-1 flex-wrap mb-4">
          {cart.slice(0, 4).map((cartItem) => (
            <div
              className="aspect-square p-1 bg-white rounded w-12"
              key={cartItem.id}
            >
              <img
                src={cartItem.imageUrl}
                alt={cartItem.name}
                className="block"
              />
            </div>
          ))}
          {cart.length > 4 && (
            <div className="flex items-center justify-center aspect-square bg-gray-200 rounded w-12">
              <span className="flex font-bold items-center leading-none text-gray-400">
                <Plus size={12} strokeWidth={4} />
                {cart.length - 4}
              </span>
            </div>
          )}
        </div>
        <div className="text-gray-500">
          <p className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </p>
          <p className="flex justify-between">
            <span>8% TVA</span>
            <span>${tva.toFixed(2)}</span>
          </p>
          <p className="flex justify-between">
            <span>Shipping</span>
            <span>Free</span>
          </p>
          <hr className="border-gray-300 my-2" />
          <p className="text-black flex justify-between font-bold">
            <span>Estimated Total</span>
            <span>${(tva + subtotal).toFixed(2)}</span>
          </p>
        </div>
      </section>

      <section className="p-4 bg-gray-100 rounded mt-2">
        <h3 className="text-xl font-bold mb-4">Pay with</h3>
        <div className="grid grid-cols-4 w-1/2 gap-1">
          <img src="https://ae01.alicdn.com/kf/S2ee1f368a78345c293982065980ceddeG/216x144.png" />
          <img src="https://ae01.alicdn.com/kf/S7b20ce778ba44e60a062008c35e98b57M/216x144.png" />
          <img src="https://ae01.alicdn.com/kf/Sea8b6d9e957a4b4783785f087af30ba2r/216x144.png" />
          <img src="https://ae01.alicdn.com/kf/S91ee3e0f4fde4535aad35f7c30f6bacfh/216x144.png" />
        </div>
        <hr className="my-2 border-gray-300" />
        <div>
          <h4 className="font-bold text-lg">Buyer protection</h4>
          <p>
            <ShieldCheck
              size={18}
              className="inline mr-1 -mt-0.5 text-green-800"
            />
            Get a full refund if the item is not as described or not delivered
          </p>
        </div>
      </section>
      <Link
        to="/"
        className="flex items-center justify-center gap-2 mt-2 p-2 text-center rounded-full bg-black text-white hover:text-black hover:border hover:border-gray-400 hover:bg-gray-100 "
      >
        <CreditCard size={20} />
        Checkout
      </Link>
    </aside>
  );
};

export default CartSummary;
