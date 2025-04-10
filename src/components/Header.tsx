import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  cartCount: number;
};

function Header({ cartCount }: Props) {
  return (
    <header className="flex items-center justify-between p-4">
      <h1 className="font-bold">
        <Link to="/" viewTransition>
          Shopy
        </Link>
      </h1>
      <Link
        to="/cart"
        className="flex items-center gap-2 cursor-pointer"
        viewTransition
      >
        <div className="relative">
          <ShoppingCart />
          <span className="absolute w-4 h-4 -top-1 -right-1 bg-cyan-800 text-white rounded-full">
            <span className="absolute leading-none top-1/2 left-1/2 -translate-1/2 text-[10px]">
              {cartCount}
            </span>
          </span>
        </div>
        Cart
      </Link>
    </header>
  );
}

export default Header;
