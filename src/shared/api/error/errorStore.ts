import { create } from "zustand";
import { RequestError } from "@/shared/types/error.type";

interface ErrorStore {
  error: RequestError | null;
  setError: (error: RequestError) => void;
}

export const useErrorStore = create<ErrorStore>((set) => ({
  error: null,
  setError: (error) => set({ error }),
}));
