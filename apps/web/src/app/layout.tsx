import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/motion/scroll-progress";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#2A2520",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: "La Cantera Workspace — Coworking en Salta",
    template: "%s | La Cantera Workspace",
  },
  description:
    "Coworking, oficinas privadas y espacios para eventos en Salta. Dos sedes: Deán Funes 1380 y Balcarce 735.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://lacanteraws.com"
  ),
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "La Cantera Workspace",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-AR"
      className={`${fraunces.variable} ${manrope.variable} h-full`}
    >
      <body className="relative min-h-full flex flex-col bg-stone-cream text-stone-deep antialiased" suppressHydrationWarning>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
