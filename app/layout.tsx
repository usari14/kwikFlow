import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Kwikflow | Turn abandoned carts into orders", description: "Kwikflow helps Shopify stores turn abandoned carts into draft orders for thoughtful follow-up." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
