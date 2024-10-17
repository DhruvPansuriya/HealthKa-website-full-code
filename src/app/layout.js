/* eslint-disable @next/next/no-page-custom-font */
import { Inter } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { motion, AnimatePresence } from "framer-motion";
config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Indrav",
  description: "ERP,EMR software for doctor, clinic and hospitals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}
