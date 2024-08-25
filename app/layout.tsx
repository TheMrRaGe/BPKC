import "./globals.css";
import AppWalletProvider from "./components/AppWalletProvider";
import { NavBar } from "./components/NavBar";
import Head from 'next/head'; // Import Head from next/head

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Bored Pitty Kennel Club</title> {/* Set your desired title here */}
        <link rel="icon" href="/bpkc.jpg" /> {/* Updated the path to your favicon */}
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