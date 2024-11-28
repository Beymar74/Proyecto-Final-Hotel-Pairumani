import type { Metadata } from "next";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans, Barlow } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { MantineProvider } from "@mantine/core";

// Fuentes locales
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Fuentes de Google
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["200", "400", "600", "800"],
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["100", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hotel Pairumani",
  description:
    "El Hotel Pairumani te ofrece paquetes personalizados con habitaciones confortables, desayuno, almuerzo y cena adaptados a tus gustos. Disfruta de nuestra piscina, sauna seco, vapor, comedor, aire acondicionado y WiFi gratuito.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.variable} ${barlow.variable} antialiased`}
      >
        <ClerkProvider>
          <MantineProvider>{children}</MantineProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
