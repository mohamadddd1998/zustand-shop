import type { User } from "@/shared/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useShallow } from "zustand/shallow";

interface LoginStoreState {
  user: User | null;
  isLogin: boolean;
  login: (user: User) => void;
  logout: () => void;
}

export const useLoginStore = create<LoginStoreState>()(
  persist(
    (set) => ({
      user: null,
      isLogin: false,
      login: (user: User) =>
        set({
          isLogin: true,
          user,
        }),
      logout: () =>
        set({
          isLogin: false,
          user: null,
        }),
    }),
    {
      name: "user-info",
      partialize: (state) => ({ user: state.user, isLogin: state.isLogin }), // اگر فقط بخشی از استیت را می‌خواهید ذخیره کنید
    },
  ),
);

export const useIsLogin = () => useLoginStore((state) => state.isLogin);
export const useUserLogin = () => useLoginStore((state) => state.user);

export const useLoginActions = () =>
  useLoginStore(
    useShallow((state) => ({
      login: state.login,
      logout: state.logout,
    })),
  );
