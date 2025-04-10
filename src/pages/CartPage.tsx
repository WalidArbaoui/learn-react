import CartList from "../components/cart/CartList";
import CartSummary from "../components/cart/CartSummary";

const CartPage = () => {
  return (
    <section className="grid grid-cols-[3fr_1fr] max-lg:grid-cols-1">
      <div>
        <h2 className="text-3xl font-bold">Shopping Cart.</h2>
        <div className="p-2">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-gray-200">
                <th className="py-2 font-normal w-5/12 max-sm:w-2/6">
                  Product
                </th>
                <th className="py-2 font-normal w-3/12 max-sm:w-2/6">
                  Quantity
                </th>
                <th className="py-2 font-normal w-2/12 max-sm:w-1/6">
                  Price <span className="text-xs text-gray-400">(usd)</span>
                </th>
                <th className="py-2 font-normal w-2/12 max-sm:w-1/6">Delete</th>
              </tr>
            </thead>
            <tbody>
              <CartList />
            </tbody>
          </table>
        </div>
      </div>
      <CartSummary />
    </section>
  );
};

export default CartPage;
