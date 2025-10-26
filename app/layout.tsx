import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quintessential Wellness | Premier Massage Therapy in Niagara",
  description: "Experience transformative healing at Quintessential Wellness. Expert massage therapy, sports recovery, and wellness services in St. Catharines, Ontario.",
  keywords: "massage therapy, sports massage, deep tissue, therapeutic massage, St. Catharines, Niagara, wellness, pain relief",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
