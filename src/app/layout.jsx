import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Stevens Blockchain Advisory",
  description: "Production-grade Web3 engineering & protocol advisory.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
