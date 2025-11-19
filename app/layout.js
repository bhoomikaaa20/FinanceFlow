import { Inter } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FinanceFlow",
  description: "Track, manage, control finances",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={``}>
          {/* Header */}
          <Header />

          <main className="min-h-screen">{children}</main>

          {/* Footer */}
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-grey-600">
              <p>Made with love by Bhoomika Somavarapu</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
