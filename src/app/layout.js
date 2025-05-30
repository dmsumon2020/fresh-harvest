import { Geist, Geist_Mono, Questrial, Rubik } from "next/font/google";
import "./globals.css";
import ProviderWrapper from "./ProviderWrapper";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
});

const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-questrial",
});

export const metadata = {
  title: "Fresh Harvest",
  description: "All Green Vegs Online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rubik.variable} ${questrial.variable} antialiased font-questrial relative`}
      >
        <Navbar />
        <ProviderWrapper>{children}</ProviderWrapper>
        <Footer />
      </body>
    </html>
  );
}
