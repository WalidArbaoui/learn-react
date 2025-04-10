import { createContext, useContext, useState, ReactNode } from "react";

import { Product } from "../types/Product";
import { CartItem } from "../types/CartItem";
import { toast } from "react-toastify";

interface CartContextType {
  cart: CartItem[];
  cartCount: number;
  addToCart: (product: Product, showToast?: boolean) => void;
  removeFromCart: (product: Product, removeCompletely?: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);

  const addToCart = (product: Product, showToast: boolean = true) => {
    setCartCount(cartCount + 1);
    const prodInCart = cart.find((item) => item.id === product.id);
    if (!prodInCart) {
      const newCartItem: CartItem = {
        ...product,
        quantity: 1,
      };
      setCart([...cart, newCartItem]);
      showToast && toast.success("Product Added Succesfuly");
    } else {
      prodInCart.quantity++;
      showToast &&
        toast.info(`Product Quantity Updated (${prodInCart.quantity})`);
    }
  };

  const removeFromCart = (
    product: Product,
    removeCompletely: boolean = false
  ) => {
    const prodInCart = cart.find((item) => item.id === product.id);
    if (!prodInCart) {
      toast.info("Can't find product in cart!");
    } else {
      if (prodInCart.quantity <= 1 || removeCompletely) {
        setCart(cart.filter((item) => item.id !== prodInCart.id));
        setCartCount(cartCount - prodInCart.quantity);
        toast.warn("Product deleted from cart");
      } else {
        setCartCount(cartCount - 1);
        prodInCart.quantity--;
      }
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, cartCount, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
