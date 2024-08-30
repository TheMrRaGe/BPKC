"use client";

import React, { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

const quicknodeEndpoint = 'https://black-clean-frost.solana-mainnet.quiknode.pro/c6ff5e64973c46c6ff05685d7a0920bbcd1340db';

export default function AppWalletProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const endpoint = useMemo(() => quicknodeEndpoint, []); // Use QuickNode endpoint
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider
      endpoint={endpoint}
      config={{ commitment: "confirmed" }}
    >
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
