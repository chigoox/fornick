import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Angie's Sweet bites",
  description: "Top Vending Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
