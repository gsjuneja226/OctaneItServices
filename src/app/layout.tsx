import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppPill from "@/components/WhatsAppPill";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0e0502",
};

export const metadata: Metadata = {
  title: {
    default: "Octane | Web Engineering, Performance Marketing & SEO",
    template: "%s | Octane"
  },
  description: "Boutique digital studio engineering high-performance Next.js web applications, managing Google & Meta ads to cost-per-lead, and building technical search authority.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: "/favicon.svg"
  },
  openGraph: {
    title: "Octane | Web Engineering, Performance Marketing & SEO",
    description: "Full-service digital marketing, web engineering, and creative.",
    url: "https://octanedigital.com",
    siteName: "Octane Digital",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col font-sans bg-[#0e0502] text-white antialiased overflow-x-hidden">
        <Navbar />
        <main className="flex-grow overflow-x-hidden">{children}</main>
        <Footer />
        <WhatsAppPill />
      </body>
    </html>
  );
}
