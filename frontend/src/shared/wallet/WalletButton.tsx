"use client";

import { useWalletConnector } from "./useWalletConnector";
import { useState } from "react";
import { WalletModal } from "./WalletModal";
import { Button } from "@/shared/ui/Button";
import { truncateAddress } from "@/lib/utils";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Copy, LogOut, ChevronDown } from "lucide-react";

export function WalletButton() {
  const { account, connected, wallet, network, disconnectWallet } =
    useWalletConnector();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    if (!account?.address) return;
    await navigator.clipboard.writeText(account.address.toString());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDisconnect = async () => {
    try {
      const result = await disconnectWallet();
      if (!result.success) {
        console.error("Failed to disconnect:", result.error);
      }
    } catch (error) {
      console.error("Failed to disconnect:", error);
    }
  };

  if (!connected || !account) {
    return (
      <>
        <Button
          onClick={() => {
            console.log("Opening modal, setting isModalOpen to true");
            setIsModalOpen(true);
          }}
          className="flex items-center space-x-2 border cursor-pointer"
        >
          <span>Connect Wallet</span>
        </Button>
        <WalletModal
          isOpen={isModalOpen}
          onClose={() => {
            console.log("Closing modal, setting isModalOpen to false");
            setIsModalOpen(false);
          }}
        />
      </>
    );
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center space-x-2">
            {wallet?.icon && (
              <Image
                src={wallet.icon}
                alt={wallet.name}
                width={20}
                height={20}
                className="mr-2"
              />
            )}
            <span>{truncateAddress(account.address.toString())}</span>
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuItem onClick={handleCopyAddress} className="gap-2">
            <Copy className="h-4 w-4" />
            <span>{copied ? "Copied!" : "Copy Address"}</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={handleDisconnect}
            className="text-red-600 gap-2"
          >
            <LogOut className="h-4 w-4" />
            <span>Disconnect</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <WalletModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
