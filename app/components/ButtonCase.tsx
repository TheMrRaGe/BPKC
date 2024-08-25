
"use client";
import React from "react";
import "@solana/wallet-adapter-react-ui/styles.css";
import { CustomWalletButton } from "./CustomWalletButton";

export const ButtonCase: React.FC = () => {
  //   const router = useRouter();
  //   const path = usePathname();
  return (
    <nav className="h-15 rounded-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
        <div className="flex flex-row">
          {/* <WalletMultiButton style={{}} /> */}
          <CustomWalletButton  />
        </div>
      </div>
    </nav>
  );
};