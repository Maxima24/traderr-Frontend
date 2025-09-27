"use client";

import { WalletButton } from "@/shared/wallet";
import { useWalletConnector } from "@/shared/wallet";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

export default function Home() {
  const { connected, account, isTestnet } = useWalletConnector();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold text-white">Traderr Frontend</h1>
          <WalletButton />
        </div>

        {connected && account && (
          <div className="bg-gray-800 rounded-lg p-6 text-white">
            <h2 className="text-xl font-semibold mb-4">Wallet Information</h2>
            <div className="space-y-2">
              <p>
                <span className="text-gray-400">Network: </span>
                <span
                  className={isTestnet ? "text-yellow-400" : "text-green-400"}
                >
                  {isTestnet ? "Testnet" : "Mainnet"}
                </span>
              </p>
              <p>
                <span className="text-gray-400">Address: </span>
                {account.address.toString()}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
