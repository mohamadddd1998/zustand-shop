import { useLoginStore } from "@/features/login/store/useLoginStore";
import { products } from "@/shared/constants/db";
import type { Favorite, Product } from "@/shared/types";
import toast from "react-hot-toast";
import { create } from "zustand";
import { useShallow } from "zustand/shallow";

interface ProductsStoreState {
  products: Product[];
  favorites: Favorite[];
  toggleFavorite: (productId: number) => void;
}

export const useProductsStore = create<ProductsStoreState>((set) => ({
  products,
  favorites: [],
  toggleFavorite: (productId: number) =>
    set((state) => {
      const favorites = state.favorites;
      const user = useLoginStore.getState().user;

      if (!user) return {}; // اگر کاربر لاگین نیست، تغییر نده

      const isExistFavorite = favorites.find(
        (favorite) =>
          favorite.productId === productId && favorite.userId === user.id,
      );

      if (isExistFavorite) {
        toast.error("از لیست علاقه مندی ها حذف شد.");
        // حذف مورد از لیست علاقه مندی‌ها
        return {
          favorites: favorites.filter(
            (favorite) => favorite.id !== isExistFavorite.id,
          ),
        };
      } else {
        // اضافه کردن مورد جدید
        const newFavorite: Favorite = {
          id: Date.now(), // یا متد مناسب شما برای تولید آی‌دی
          userId: user.id,
          productId,
          createdAt: new Date().toISOString(),
        };
        toast.success("به لیست علاقه مندی ها اضافه شد.");
        return {
          favorites: [...favorites, newFavorite],
        };
      }
    }),
}));

export const useProducts = () => useProductsStore((state) => state.products);
export const useFavorites = () => useProductsStore((state) => state.favorites);

export const useProductsActions = () =>
  useProductsStore(
    useShallow((state) => ({
      toggleFavorite: state.toggleFavorite,
    })),
  );
