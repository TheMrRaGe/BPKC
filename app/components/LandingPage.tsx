"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults'
import {
  generateSigner,
  transactionBuilder,
  publicKey,
  some,
} from '@metaplex-foundation/umi'
import {
  fetchCandyMachine,
  mintV2,
  mplCandyMachine,
  safeFetchCandyGuard,
} from '@metaplex-foundation/mpl-candy-machine'
import { LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { walletAdapterIdentity } from '@metaplex-foundation/umi-signer-wallet-adapters'
import { mplTokenMetadata } from '@metaplex-foundation/mpl-token-metadata'
import { setComputeUnitLimit } from '@metaplex-foundation/mpl-toolbox'
import * as bs58 from 'bs58'
import { TiPlus, TiMinus } from "react-icons/ti";
import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonCase } from "./ButtonCase";

const quicknodeEndpoint =
    'https://black-clean-frost.solana-mainnet.quiknode.pro/c6ff5e64973c46c6ff05685d7a0920bbcd1340db'

const candyMachineAddress = publicKey(
    'J4SatCJR4VCqSrGWFvDJKUvRdA5Bux7FFmmBum9Mci9V',
);

const treasury = publicKey(
  '3CBnegLRXygHTDq8dFz3vQTdFdzLyCHPk9xAGHEEs81t',
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const LandingPage = () => {
  const [txError, setTxError] = useState<string | null>(null);
  const [txLoading, setTxLoading] = useState<boolean>(false);
  const [nfts, setNfts] = useState<any[]>([]);
  const [mintResult, setMintResult] = useState<any>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [mintLimit, setMintLimit] = useState<number>(100);

  const { connection } = useConnection();
  const wallet = useWallet()

  const umi = useMemo(
    () =>
        createUmi(quicknodeEndpoint)
            .use(walletAdapterIdentity(wallet))
            .use(mplCandyMachine())
            .use(mplTokenMetadata()),
    [wallet],
  )

  const onClick = useCallback(async () => {
    if (!wallet.publicKey) {
      console.log('error', 'Wallet not connected!');
      return;
    }
  
    setTxLoading(true);
    setTxError(null);
  
    const maxRetries = 5; // Increased from 3 to 5
    let attempt = 0;
  
    while (attempt < maxRetries) {
      try {
        const candyMachine = await fetchCandyMachine(umi, candyMachineAddress);
        console.log('Candy Machine:', candyMachine);
  
        const candyGuardAddress = candyMachine.mintAuthority; 
        const candyGuard = await safeFetchCandyGuard(umi, candyGuardAddress);
  
        if (!candyGuard) {
          console.log('error', 'Candy Guard not found or not initialized!');
          return;
        }
  
        const nftMint = generateSigner(umi);
        
        const latestBlockhash = await umi.rpc.getLatestBlockhash();
        
        const transaction = transactionBuilder()
          .add(setComputeUnitLimit(umi, { units: 800_000 }))
          .add(
            mintV2(umi, {
              candyMachine: candyMachine.publicKey,
              candyGuard: candyGuard?.publicKey,
              nftMint,
              collectionMint: candyMachine.collectionMint,
              collectionUpdateAuthority: candyMachine.authority,
              mintArgs: {
                solPayment: some({ destination: treasury }),
              },
            }),
          )
          .setBlockhash(latestBlockhash);
  
        const { signature } = await transaction.sendAndConfirm(umi, {
          confirm: { commitment: 'confirmed' },
          send: {
            skipPreflight: true, // Skip preflight to avoid blockhash expiration
          },
        });
        
        console.log('Mint successful!', signature);
        setTxLoading(false);
        break;
      } catch (error: any) {
        console.error('Mint failed!', error);
        
        if (error.message.includes('Blockhash not found') || error.message.includes('Transaction simulation failed')) {
          attempt++;
          if (attempt < maxRetries) {
            console.log(`Retrying transaction... Attempt ${attempt + 1}`);
            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second before retrying
            continue;
          } else {
            setTxError('Transaction failed: Unable to process after multiple attempts. Please try again later.');
          }
        } else {
          if (error.logs) {
            console.error('Transaction logs:', error.logs);
          }
          setTxError(`An unexpected error occurred: ${error.message}`);
        }
      }
    }
    setTxLoading(false);
  }, [wallet.publicKey, umi]);
  
  return (
    <div className="relative flex flex-row justify-between gap-20 overflow-hidden pt-10">
      <div className="">
        <h1 className="font-bold text-[42px]">BORED PITTY KENNEL CLUB</h1>
        <h1 className="font-bold text-[42px] leading-10">
          DIGITAL COLLECTIBLES
        </h1>
        <p className="font-bold text-[20px] mt-6">
          5,000 Unique Digital Collectibles
        </p>
        <p className="font-bold text-[20px]">
          Living on the Solana Blockchain
        </p>
        <p className="font-bold text-[20px] mt-6">
          Mint Date: August 23th, 2024
        </p>
        <p className="font-bold text-[20px] text-red py-6">
          Mint Price: .045 SOL
        </p>

        {txError && <p className="text-red-500">{txError}</p>}
        <div className="flex gap-6 pt-3 ">
          <button
            className="text-[12px] md:text-[18px] font-bold bg-black font-bold border-double border-2 border-red text-white h-[40px] md:h-[60px] w-[120px] rounded-xl"
            onClick={onClick}
            disabled={txLoading}
          >
            {txLoading ? "Minting..." : `Mint `}
          </button>
          <ButtonCase />
        </div>
        <div className="col-span-1 row-span-1 mt-16 flex flex-col justify-between">
          <Image
            src="/bpkc.jpg"
            alt="Image 4"
            width={600}
            height={600}
            className="w-full border-solid border-red border-2 h-auto mb-4 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};
