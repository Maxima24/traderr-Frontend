'use client';

import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { useCallback, useMemo } from 'react';
import { Network } from '@aptos-labs/ts-sdk';

export const useWalletConnector = () => {
  const { 
    connect,
    disconnect,
    account,
    connected,
    wallet,
    network,
    wallets,
    signAndSubmitTransaction
  } = useWallet();

  const isTestnet = useMemo(() => {
    return network?.name === Network.TESTNET;
  }, [network]);

  const isMainnet = useMemo(() => {
    return network?.name === Network.MAINNET;
  }, [network]);

  const connectWallet = useCallback((walletName: string) => {
    try {
      connect(walletName);
      return { success: true };
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      return { success: false, error };
    }
  }, [connect]);

  const disconnectWallet = useCallback(() => {
    try {
      disconnect();
      return { success: true };
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
      return { success: false, error };
    }
  }, [disconnect]);

  const sendTransaction = useCallback(async (recipient: string, amount: number) => {
    if (!account?.address) {
      throw new Error('Wallet not connected');
    }

    try {
      const response = await signAndSubmitTransaction({
        data: {
          function: "0x1::coin::transfer",
          typeArguments: ["0x1::aptos_coin::AptosCoin"],
          functionArguments: [recipient, amount],
        },
      });

      return { success: true, hash: response.hash };
    } catch (error) {
      console.error('Transaction failed:', error);
      return { success: false, error };
    }
  }, [account, signAndSubmitTransaction]);

  return {
    connectWallet,
    disconnectWallet,
    sendTransaction,
    isTestnet,
    isMainnet,
    account,
    connected,
    wallet,
    network,
    wallets
  };
};