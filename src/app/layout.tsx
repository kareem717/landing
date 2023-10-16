import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from 'sonner'
const inter = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "biddropper",
	description: "The best way to get work done.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Toaster />
					<Navbar />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
