import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { create } from "zustand/react";

interface AuthStoreAction {
  updateToken: (data: string) => void;
}

interface AuthStoreState {
  token: string;
}

export const useAuthStore = create(
  persist(immer<AuthStoreAction & AuthStoreState>(set => ({
    token: "",
    updateToken: (token: string) => {
      set({ token });
    },
  })), {
    name: "auth-store",
    storage: createJSONStorage(() => localStorage),
  }),
);
