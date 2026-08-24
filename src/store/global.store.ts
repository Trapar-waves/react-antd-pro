import { immer } from "zustand/middleware/immer";
import { create } from "zustand/react";

interface GlobalStoreAction {
  updateRedirectUrl: (url: string) => void;
}

interface GlobalStoreState {
  redirectUrl: string;
}
export const useGlobalStore = create(immer<GlobalStoreAction & GlobalStoreState>(
  set => ({
    redirectUrl: "",
    updateRedirectUrl: (url: string) => {
      set({ redirectUrl: url });
    },
  }),
));
