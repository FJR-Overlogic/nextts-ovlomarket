"use client";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layouts/navbar/navbar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const metadata: Metadata = {
  title: "OvLoMarket",
  description: "Over Logic Marketplace",
};

type NextRouterType = ReturnType<typeof useRouter>;

interface CustomRouter extends NextRouterType {
  pathname: string;
  // kalau mau properti lain dari router, tambahkan di sini
}

// buat halaman yang tidak ada navbarnya
const disableNavbar = ["/404"];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { pathname } = router as CustomRouter;

  useEffect(() => {}, [pathname]);

  // inisialisasi aos
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <html lang="en">
      <body>
        {!disableNavbar.includes(pathname) && <Navbar />}
        {children}
      </body>
    </html>
  );
}
