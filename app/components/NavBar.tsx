"use client";
import React from "react";
import Image from "next/image";
import "@solana/wallet-adapter-react-ui/styles.css";


export const NavBar: React.FC = () => {
  //   const router = useRouter();
  //   const path = usePathname();
  return (
    <nav className="w-auto h-auto flex-col rounded-xl">
      
            <Image
              src="/banner.jpg"
              alt="Image 4"
              width={600}
              height={600}
              className="w-full h-auto flex-col rounded-xl"
            />
          
      
          {/* <WalletMultiButton style={{}} /> */}


          {/*<CustomWalletButton />*/}
    </nav>
  );
};
