import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { create } from "zustand/react";

interface AuthStoreState {
  token: string;
}

interface AuthStoreAction {
  updateToken: (data: string) => void;
}

export const useAuthStore = create(
  persist(immer<AuthStoreState & AuthStoreAction>(set => ({
    token: "",
    updateToken: (token: string) => {
      set({ token });
    },
  })), {
    name: "auth-store",
    storage: createJSONStorage(() => localStorage),
  }),
);
