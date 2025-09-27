"use client";

import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { Network } from "@aptos-labs/ts-sdk";
import { toast } from "sonner";
import { useMemo } from "react";

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const config = useMemo(
    () => ({
      wallets: [], // Available wallet adapters detected
      autoConnect: true,
      network: Network.TESTNET,
      onError: (error: any) => {
        console.error("Wallet error:", error);
        if (error instanceof Error) {
          toast.error("Wallet Error", {
            description: error.message,
          });
        } else {
          toast.error("Wallet Error", {
            description: "An unknown error occurred",
          });
        }
      },
    }),
    []
  );

  return (
    <AptosWalletAdapterProvider {...config}>
      {children}
    </AptosWalletAdapterProvider>
  );
}
