import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roman Fitness | Premium Gym & Fitness Empire",
  description:
    "Roman Fitness is the premium gym in Periyanaickenpalayam, Coimbatore. Enter the Roman Empire of Fitness with elite equipment, expert coaching, body transformation programs, and AI diet plans.",
  icons: {
    icon: [
      { url: "/seo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/seo/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/seo/apple-touch-icon.png",
  },
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
