"use client";

import {
  useWallet,
  groupAndSortWallets,
} from "@aptos-labs/wallet-adapter-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Network } from "@aptos-labs/ts-sdk";
import { toast } from "sonner";

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WalletModal({ isOpen, onClose }: WalletModalProps) {
  const {
    connect,
    wallets = [],
    notDetectedWallets = [],
    connected,
    wallet: activeWallet,
    network,
    disconnect,
  } = useWallet();

  // State to force re-renders
  const [, setRefreshKey] = useState(0);

  // Force re-render when window gets focus to detect new wallet installations
  useEffect(() => {
    const onFocus = () => {
      setRefreshKey((key) => key + 1);
    };
    window.addEventListener("focus", onFocus);
    return () => window.removeEventListener("focus", onFocus);
  }, []);

  const {
    aptosConnectWallets,
    availableWallets,
    installableWallets: allInstallableWallets,
  } = groupAndSortWallets([...wallets, ...notDetectedWallets]);

  // Filter to only show OKX and Petra wallets in installable section
  const installableWallets = allInstallableWallets.filter(
    (wallet) =>
      wallet.name.toLowerCase().includes("petra") ||
      wallet.name.toLowerCase().includes("okx")
  );

  const handleConnect = useCallback(
    async (walletName: string) => {
      try {
        await connect(walletName);

        // Check network after connection
        if (network?.name !== Network.TESTNET) {
          toast.info("Switching to Testnet", {
            description:
              "Please approve the network switch request in your wallet",
          });

          try {
            // Try to switch to testnet - this might fail if the wallet doesn't support it
            toast.success("Please switch to Testnet in your wallet settings");
          } catch (switchError) {
            console.error("Failed to switch network:", switchError);
            toast.error("Network Switch Failed", {
              description: "Please manually switch to Testnet in your wallet",
            });
            // Disconnect if network switch fails
            await disconnect();
          }
        }
      } catch (error) {
        console.error("Failed to connect:", error);
        toast.error("Connection Failed", {
          description:
            error instanceof Error
              ? error.message
              : "Failed to connect to wallet",
        });
      }
    },
    [connect, disconnect, network, wallets]
  );

  useEffect(() => {
    if (connected) {
      onClose();
    }
  }, [connected, onClose]);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open: boolean) => {
        if (!open) onClose();
      }}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Connect Wallet</DialogTitle>
          <DialogDescription>
            Choose your preferred wallet to connect with our dApp
          </DialogDescription>
        </DialogHeader>

        <div className="py-6">
          <div className="space-y-4">
            {/* Aptos Connect Wallets */}
            {aptosConnectWallets.length > 0 && (
              <div>
                <h3 className="text-sm font-medium mb-3">
                  Social Login Wallets
                </h3>
                <div className="space-y-2">
                  {aptosConnectWallets.map((wallet) => (
                    <WalletOption
                      key={wallet.name}
                      wallet={wallet}
                      onConnect={handleConnect}
                      isActive={activeWallet?.name === wallet.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Available Wallets */}
            {availableWallets.length > 0 && (
              <div>
                <h3 className="text-sm font-medium mb-3">Available Wallets</h3>
                <div className="space-y-2">
                  {availableWallets.map((wallet) => (
                    <WalletOption
                      key={wallet.name}
                      wallet={wallet}
                      onConnect={handleConnect}
                      isActive={activeWallet?.name === wallet.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Installable Wallets */}
            {installableWallets.length > 0 && (
              <div>
                <h3 className="text-sm font-medium mb-3">Install Wallet</h3>
                <div className="space-y-2">
                  {installableWallets.map((wallet) => (
                    <WalletOption
                      key={wallet.name}
                      wallet={wallet}
                      onConnect={handleConnect}
                      isInstallable
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface WalletOptionProps {
  wallet: {
    name: string;
    icon?: string;
    url?: string;
  };
  onConnect: (name: string) => void;
  isActive?: boolean;
  isInstallable?: boolean;
}

function WalletOption({
  wallet,
  onConnect,
  isActive,
  isInstallable,
}: WalletOptionProps) {
  const handleClick = () => {
    if (isInstallable && wallet.url) {
      window.open(wallet.url, "_blank");
    } else {
      onConnect(wallet.name);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "flex items-center justify-between w-full p-4 rounded-lg border transition-colors hover:cursor-pointer",
        isActive
          ? "border-primary bg-primary/5"
          : "border-border hover:border-primary hover:bg-primary/5"
      )}
    >
      <div className="flex items-center gap-3">
        {wallet.icon && (
          <Image src={wallet.icon} alt={wallet.name} width={32} height={32} />
        )}
        <div className="text-left">
          <p className="font-medium">{wallet.name}</p>
          {isInstallable && (
            <p className="text-sm text-muted-foreground">Not installed</p>
          )}
        </div>
      </div>
      <span className="text-sm font-medium">
        {isInstallable ? "Install" : "Connect"}
      </span>
    </button>
  );
}
