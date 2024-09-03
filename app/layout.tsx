import type { Metadata } from "next";
import "./globals.css";
import AppWalletProvider from "./components/AppWalletProvider";
import { NavBar } from "./components/NavBar";
import Head from 'next/head'; // Import Head from next/head

export const metadata: Metadata = {
	title: "BORED PITTY KENNEL CLUB",
	description:
	  "5,000 Unique Digital Collectibles Living on the Solana Blockchain",
	openGraph: {
	  title: "BORED PITTY KENNEL CLUB",
	  description:
		"5,000 Unique Digital Collectibles Living on the Solana Blockchain",
	  url: "https://boredpitty.vip/",
	  siteName: "BORED PITTY KENNEL CLUB",
	  images: [
		{
		  url: "/bpkc.jpg",
		  width: 1260,
		  height: 800,
		},
	  ],
	},
	twitter: {
	  site: `@MisterMoonOG`,
	  creator: `@MisterMoonOG`,
	  card: "summary",
	},
	category: "blockchain",
	icons: "/bpkc.jpg",
  };

export default function RootLayout({
	children,
  }: Readonly<{
	children: React.ReactNode;
  }>) {
	return (
	  <html lang="en" >

	  <Head>
        <title>Bored Pitty Kennel Club</title> {/* Set your desired title here */}
        <link rel="icon" href="/public/bpkc.jpg" /> {/* Update the path to your favicon */}
      </Head>
		<body className="px-3">
		  <AppWalletProvider>
			<div className="py-4">
			  <NavBar />
			</div>
			{children}
		  </AppWalletProvider>
		</body>
	  </html>
	);
  }

