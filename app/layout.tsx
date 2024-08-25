import "./globals.css";
import AppWalletProvider from "./components/AppWalletProvider";
import { NavBar } from "./components/NavBar";


export default function RootLayout({
	children,
  }: Readonly<{
	children: React.ReactNode;
  }>) {
	return (
	  <html lang="en" >
		<body className="px-6">
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

