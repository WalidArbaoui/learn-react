import { ShoppingCart } from "lucide-react";

function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <h1 className="font-bold">Shopy</h1>
      <button className="flex items-center gap-2 cursor-pointer">
        <ShoppingCart />
        Cart
      </button>
    </header>
  );
}

export default Header;
