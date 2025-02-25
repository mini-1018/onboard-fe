"use client";
import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
} from "@tanstack/react-query";
import { ReactNode } from "react";
import { useErrorStore } from "./error/errorStore";

export default function QueryProvider({ children }: { children: ReactNode }) {
  const { setError } = useErrorStore();
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error: any) => {
        setError(error.response.data);
      },
    }),
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
        throwOnError: true,
      },
      mutations: {
        onError: (error: any) => {
          setError(error);
        },
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
