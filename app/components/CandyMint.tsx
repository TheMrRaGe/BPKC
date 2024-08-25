// CandyMint.tsx

import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useCallback, useMemo, ReactNode } from 'react';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import {
    generateSigner,
    transactionBuilder,
    publicKey,
    some,
} from '@metaplex-foundation/umi';
import {
    fetchCandyMachine,
    mintV2,
    mplCandyMachine,
    safeFetchCandyGuard
} from '@metaplex-foundation/mpl-candy-machine';
import { walletAdapterIdentity } from '@metaplex-foundation/umi-signer-wallet-adapters';
import { mplTokenMetadata } from '@metaplex-foundation/mpl-token-metadata';
import { setComputeUnitLimit } from '@metaplex-foundation/mpl-toolbox';
import { clusterApiUrl } from '@solana/web3.js';
import * as bs58 from 'bs58';

const quicknodeEndpoint =
    'https://solana-mainnet.g.alchemy.com/v2/jK1RI8GSoUn6OBQ6tIENsKc0mKmJgt0s' ||
    clusterApiUrl('mainnet-beta');
    
const candyMachineAddress = publicKey(
    '3tbMubGdMKoCQt8iuum6eTEkc5au5a13kNJPQktnSVRN',
);

interface CandyMintProps {
    children: ReactNode;
    className?: string;
}

export default function CandyMint({ children, className }: CandyMintProps) {
    const { connection } = useConnection();
    const wallet = useWallet();

    const umi = useMemo(
        () =>
            createUmi(quicknodeEndpoint)
                .use(walletAdapterIdentity(wallet))
                .use(mplCandyMachine())
                .use(mplTokenMetadata()),
        [wallet],
    );

    const onClick = useCallback(async () => {
        if (!wallet.publicKey) {
            console.error('Wallet not connected!');
            alert('Please connect your wallet to mint.');
            return;
        }

        const maxRetries = 3;
        let retries = 0;

        while (retries < maxRetries) {
            try {
                const candyMachine = await fetchCandyMachine(umi, candyMachineAddress);
                console.log('Candy Machine:', candyMachine);

                const candyGuardAddress = candyMachine.mintAuthority;
                const candyGuard = await safeFetchCandyGuard(umi, candyGuardAddress);

                if (!candyGuard) {
                    console.error('Candy Guard not found or not initialized!');
                    alert('Candy Guard not found. Please try again later.');
                    return;
                }

                const nftMint = generateSigner(umi);

                // Get the latest blockhash
                const latestBlockhashResult = await umi.rpc.getLatestBlockhash();

                const transaction = transactionBuilder()
                    .add(setComputeUnitLimit(umi, { units: 800_000 }))
                    .add(
                        mintV2(umi, {
                            candyMachine: candyMachine.publicKey,
                            candyGuard: candyGuard.publicKey,
                            nftMint,
                            collectionMint: candyMachine.collectionMint,
                            collectionUpdateAuthority: candyMachine.authority,
                            group: some('Public'),
                        }),
                    )
                    .setBlockhash(latestBlockhashResult.blockhash);

                const { signature } = await transaction.sendAndConfirm(umi, {
                    confirm: { commitment: 'confirmed' },
                    send: {
                        skipPreflight: true,
                    },
                });

                const txid = bs58.encode(signature);
                console.log('Mint successful!', `Transaction ID: ${txid}`);
                return; // Exit the function if successful
            } catch (error: any) {
                console.error('Mint failed!', error);
                if (error.message.includes('block height exceeded')) {
                    retries++;
                    console.log(`Retrying... (${retries}/${maxRetries})`);
                    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second before retrying
                } else {
                    console.error('An unexpected error occurred:', error.message);
                    alert(`Mint failed: ${error.message}`);
                    return; // Exit the function for other errors
                }
            }
        }

        console.error('Max retries reached. Mint failed.');
        alert('Mint failed after multiple attempts. Please try again later.');
    }, [wallet, umi]);

    return (
        <button
            className={`mb-6 mt-5 h-11 w-[78%] rounded font-primary font-bold uppercase text-black ${className}`}
            onClick={onClick}
        >
            <span>{children}</span>
        </button>
    );
}
