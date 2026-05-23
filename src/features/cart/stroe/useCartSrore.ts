import { useLoginStore } from "@/features/login/store/useLoginStore";
import { useProductsStore } from "@/features/products/store/useProductsStore";
import type { CartItem, Product } from "@/shared/types";
import { create } from "zustand";
import { useShallow } from "zustand/shallow";

interface CartStoreState {
  cartItems: CartItem[];
  addToCart: (productId: number) => void;
}

export const useCartStore = create<CartStoreState>((set) => ({
  cartItems: [],
  addToCart: (productId: number) =>
    set((state) => {
      const user = useLoginStore.getState().user;
      const products = useProductsStore.getState().products;

      if (!user) return {}; // اگر کاربر لاگین نیست، تغییر نده

      const product = products.find((p) => p.id === productId) as Product;

      const isExistProduct = state.cartItems.find(
        (cartItem: CartItem) => cartItem.productId === productId,
      );

      if (isExistProduct)
        return {
          cartItems: state.cartItems.map((cartItem: CartItem) =>
            cartItem.productId === productId
              ? {
                  ...cartItem,
                  quantity: cartItem.quantity + 1,
                }
              : cartItem,
          ),
        };

      return {
        cartItems: [
          ...state.cartItems,
          {
            id: Date.now(),
            userId: user.id,
            productId,
            product,
            quantity: 1,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    }),
}));

export const useCartItems = () => useCartStore((state) => state.cartItems);

export const useCartActions = () =>
  useCartStore(
    useShallow((state) => ({
      addToCart: state.addToCart,
    })),
  );
