import { immer } from "zustand/middleware/immer";
import { create } from "zustand/react";

interface GlobalStoreState {
  redirectUrl: string;
}

interface GlobalStoreAction {
  updateRedirectUrl: (url: string) => void;
}
export const useGlobalStore = create(immer<GlobalStoreState & GlobalStoreAction>(
  set => ({
    redirectUrl: "",
    updateRedirectUrl: (url: string) => {
      set({ redirectUrl: url });
    },
  }),
));
